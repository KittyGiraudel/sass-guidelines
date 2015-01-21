(function (global) {
    function strRepeat (string, n) {
        return new Array(n + 1).join(string);
    }

    var ToC = function (language) {
        this.language = language;
        this.node = document.getElementById('toc');
        this.exclude = {
            'en': 'Further reading',
            'pl': 'Dalsze informacje'
        };

        this.initialize();
    };

    ToC.prototype.initialize = function () {
        this.parse(function (data) {
            this.build(data);
        }.bind(this));
    };

    ToC.prototype.build = function (headings) {
        var html = '';
        var last = 0;
        var current;

        Array.prototype.slice.call(headings).forEach(function (element, index, array) {
            current = global.parseInt(element.nodeName.substring(1));

            if (last === current) {
                html += '</li>\n';
            } else if (last > current) {
                html += strRepeat('</li>\n</ul>\n', last - current) + '</li>\n';
            } else {
                html += '\n<ul>\n';
            }

            html += '<li><a href="#' + element.id + '">' + element.innerHTML + '</a>';

            last = current;
        });

        html += '</li>\n</ul>\n';

        this.node.innerHTML = html;
    };

    ToC.prototype.parse = function (callback) {
        var headings = Array.prototype.slice.call(document.querySelectorAll('.main h1, .main h2, .main h3'))
            .filter(function (element) {
                return element.textContent.toLowerCase().indexOf(this.exclude[this.language].toLowerCase()) === -1;
            }, this);

        if (typeof callback === 'function') {
            callback(headings);
        }
    };

    global.ToC = ToC;

}(window));
