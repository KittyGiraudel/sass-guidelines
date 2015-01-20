var fs = require('fs');
var path = require('path');

var args = process.argv.slice(2);
var language = args.length ? args[0] : 'en';
var languagePath = '/' + (language === 'en' ? '' : language);
var exclude = {
    'en': 'Further reading',
    'pl': 'Dalsze informacje'
}

// Repeat `string` `n` times
// @param {String} string
// @param {Number} n
strRepeat = function (string, n) {
    return new Array(n + 1).join(string);
}

// Split the content of a file on line breaks, and only keep Markdown headings
// as long as they are not *Further reading*
// @param {String} data
// @return {Array}
function parse (data) {
    return data.split('\n').filter(function (element) {
        return element.match(/^#+/)
            && element.toLowerCase().indexOf(exclude[language].toLowerCase()) === -1;
    });
}

// Build the HTML table of contents from an array of Markdown headings
// @param {Array} headings
// @return {String}
function build (headings) {
    var html = '',
        last = 1,
        indent = '  ',
        current;

    headings.forEach(function (element, index, array) {
        if (element.match(/^\s*(#*)/)) {
            current = RegExp.$1.length;
        }

        element = element
            .replace(/^\s*(#*)/, '')   // Un-markdownify
            .replace(/^\s+|\s+$/g,''); // Trim


        html += strRepeat(indent, current - 1);// Markdown indent
        html += '* [' + element + '](#' + generateId(element) + ')\n'; // New item

        last = current;
    });

    html += '\r';

    return html;
}

// Replace what's between start and end tokens of ToC
// with the given content
// @param {String} initial
// @param {String} replacement
// @return {String}
function replace (initial, replacement) {
    var startToken = '<!-- START TOC -->';
    var endToken   = '<!-- END TOC -->';

    return initial.replace(
        new RegExp(startToken + '(.|\n)*' + endToken),
        startToken + '\n' + replacement + '\n' + endToken
    );
}

// Generate ID
// @param {String} string
// @return {String}
function generateId (string) {
    return string.toLowerCase().replace(/[\ \-\&\+\$\,\/\:\;\=\?\@\"\#\{\}\|\^\~\[\]\`\\\*\(\)\%\.\!\']/g, '-');
}






var filePath = path.join(process.cwd(), languagePath, 'index.md');

fs.readFile(filePath, {
    encoding: 'utf-8'
}, function (err, data) {
    if (err) {
        throw err;
    }

    fs.writeFile(filePath, replace(data, build(parse(data))), {
        encoding: 'utf-8'
    }, function (err) {
        if (err) {
            throw err;
        }

        console.log('Table of Contents generated for `' + language + '` version.');
    })
});
