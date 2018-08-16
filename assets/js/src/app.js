/* globals $ */

(function () {
  'use strict'

  var sanitizeSvg = (function ensureSvgId () {
    var id = 100

    return function (svg) {
      id++
      return svg
        .replace(/title\-\d+/g, ('title-' + id))
        .replace(/desc\-\d+/g, ('desc-' + id))
    }
  }())

  function getMetaContent (name) {
    return document.querySelector('meta[name="' + name + '"]').getAttribute('content')
  }

  function getChapterHeading (chapter) {
    return chapter.querySelector('h1[id]')
  }

  function getChapterTitle (chapter) {
    var heading = getChapterHeading(chapter)
    return (heading.innerText || heading.textContent)
  }

  function getChapterName (chapter) {
    return chapter.id.split('chapter-')[1]
  }

  function getCurrentLocale () {
    return document.documentElement.getAttribute('lang')
  }

  function getChapterEditUrl (chapter) {
    var BASE_URL = 'https://github.com/HugoGiraudel/sass-guidelines/blob/master/pages'
    var locale = getCurrentLocale()
    var fileName = '_' + getChapterName(chapter) + '.md'

    return [ BASE_URL, locale, fileName ].join('/')
  }

  function translateSvgTitle (svg, title) {
    return svg.replace('</title>', ' “' + title + '”</title>')
  }

  function getLinkSvgContent (svg, chapter) {
    return translateSvgTitle(
      sanitizeSvg(svg),
      getChapterTitle(chapter)
    )
  }

  function createChapterEditLink (chapter, svg) {
    var title = getChapterTitle(chapter)
    var link = document.createElement('a')

    link.href = getChapterEditUrl(chapter)
    link.classList.add('chapter__edit', 'button-ui')
    link.setAttribute('target', '_blank')
    link.setAttribute('rel', 'noreferrer noopener')
    link.innerHTML = getLinkSvgContent(svg, chapter)

    return link
  }

  function createChapterAnchorLink (chapter, svg) {
    var link = document.createElement('a')
    var heading = getChapterHeading(chapter)

    link.href = '#' + heading.id
    link.classList.add('chapter__link', 'button-ui')
    link.innerHTML = getLinkSvgContent(svg, chapter)

    return link
  }

  function createChapterLinks (chapter, editSvg, linkSvg) {
    var wrapper = document.createElement('div')

    wrapper.classList.add('button-wrapper', 'chapter__buttons')
    wrapper.appendChild(createChapterAnchorLink(chapter, linkSvg))
    wrapper.appendChild(createChapterEditLink(chapter, editSvg))

    return wrapper
  }

  function fixSkipLinks () {
    var element = document.getElementById(window.location.hash.substring(1))

    if (element) {
      if (!/^(?:a|select|input|button|textarea)$/i.test(element.tagName)) {
        element.tabIndex = -1
      }
      element.focus()
    }
  }

  function redirectUrl (event) {
    window.location.href = this.value
  }

  function initialiseLanguagePicker () {
    var languagePicker = document.querySelector('#language-picker')

    languagePicker.on('change', redirectUrl, false)
  }

  function initialiseSyntaxToggle () {
    var syntaxToggle = $('input[name="syntax"]')

    syntaxToggle.on('click', function (event) {
      var fn = this.value === 'sass' ? 'add' : 'remove'
      document.body.classList[fn]('sass')
    })
  }

  function replaceSidebarOpener (link) {
    var button = document.createElement('button')

    button.setAttribute('type', 'button')
    button.setAttribute('data-a11y-dialog-show', 'options-panel')
    button.setAttribute('class', link.getAttribute('class'))
    button.innerHTML = link.innerHTML

    link.parentNode.replaceChild(button, link)
  }

  function initialiseOptionsPanel () {
    $('a[href="#options-panel"]').forEach(replaceSidebarOpener)

    var dialog = new A11yDialog(
      document.querySelector('#options-panel'),
      document.querySelector('#main-content')
    )

    dialog
      .on('show', function (el) { el.classList.add('is-open') })
      .on('hide', function (el) { el.classList.remove('is-open') })
  }

  function initialiseChapters () {
    var chapters = $('.chapter:not(.toc)')
    var editSvg = getMetaContent('svg-pencil-icon')
    var linkSvg = getMetaContent('svg-link-icon')

    chapters.forEach(function (chapter) {
      var heading = getChapterHeading(chapter)

      heading.parentNode.insertBefore(
        createChapterLinks(chapter, editSvg, linkSvg),
        heading.nextSibling
      )
    })
  }

  window.on('hashchange', fixSkipLinks, false)
  document.addEventListener('DOMContentLoaded', function (event) {
    initialiseLanguagePicker()
    initialiseSyntaxToggle()
    initialiseOptionsPanel()
    initialiseChapters()
  })

  // Install service worker
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/service-worker.js', { scope: '/' })
      .then(function (registration) {
        console.log(
          '%cserviceworker:registration', 'color:green',
          `successful with scope: ${registration.scope}`
        )
      })
      .catch(function (error) {
        console.error(
          '%cserviceworker:registration', 'color:red',
          'failed: ', error
        )
      })
  }
}())
