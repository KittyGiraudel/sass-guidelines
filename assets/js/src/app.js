/* globals $ */

;(function () {
  'use strict'

  function getTemplateContent(id) {
    const template = document.getElementById(id)
    return template.content.firstElementChild.cloneNode(true)
  }

  function getChapterHeading(chapter) {
    return chapter.querySelector('h2[id]')
  }

  function getChapterName(chapter) {
    return chapter.id.split('chapter-')[1]
  }

  function getCurrentLocale() {
    return document.documentElement.getAttribute('lang')
  }

  function getChapterEditUrl(chapter) {
    var BASE_URL =
      'https://github.com/KittyGiraudel/sass-guidelines/tree/main/pages'
    var locale = getCurrentLocale()
    var fileName = '_' + getChapterName(chapter) + '.md'

    return [BASE_URL, locale, fileName].join('/')
  }

  function createChapterLinks(chapter, heading) {
    var editLink = getTemplateContent('svg-pencil-tpl')
    var chapterLink = getTemplateContent('svg-link-tpl')
    var wrapper = document.createElement('div')
    var title = heading.innerText || heading.textContent

    editLink.href = getChapterEditUrl(chapter)
    chapterLink.href = '#' + heading.id
    editLink.querySelector('.sr-only').innerHTML += ' ' + title
    chapterLink.querySelector('.sr-only').innerHTML += ' ' + title

    wrapper.classList.add('button-wrapper', 'chapter__buttons')
    wrapper.appendChild(chapterLink)
    wrapper.appendChild(editLink)

    return wrapper
  }

  function redirectUrl(event) {
    window.location.href = this.value
  }

  function initialiseLanguagePicker() {
    var languagePicker = document.querySelector('#language-picker')

    languagePicker.on('change', redirectUrl, false)
  }

  function initialiseSyntaxToggle() {
    var syntaxToggle = $('input[name="syntax"]')

    syntaxToggle.on('click', function (event) {
      var fn = this.value === 'sass' ? 'add' : 'remove'
      document.body.classList[fn]('sass')
    })
  }

  function replaceSidebarOpener(link) {
    var button = document.createElement('button')

    button.setAttribute('type', 'button')
    button.setAttribute('data-a11y-dialog-show', 'options-panel')
    button.setAttribute('class', link.getAttribute('class'))
    button.innerHTML = link.innerHTML

    link.parentNode.replaceChild(button, link)
  }

  function initialiseOptionsPanel() {
    $('a[href="#options-panel"]').forEach(replaceSidebarOpener)

    var dialog = new A11yDialog(document.querySelector('#options-panel'))

    dialog
      .on('show', function (el) {
        el.classList.add('is-open')
      })
      .on('hide', function (el) {
        el.classList.remove('is-open')
      })
  }

  function initialiseChapters() {
    var chapters = $('.chapter:not(.toc)')

    chapters.forEach(function (chapter) {
      var heading = getChapterHeading(chapter)

      heading.parentNode.insertBefore(
        createChapterLinks(chapter, heading),
        heading.nextSibling
      )
    })
  }

  document.addEventListener('DOMContentLoaded', function (event) {
    initialiseLanguagePicker()
    initialiseSyntaxToggle()
    initialiseOptionsPanel()
    initialiseChapters()
  })
})()
