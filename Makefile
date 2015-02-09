UGLIFY = node_modules/uglify-js/bin/uglifyjs

all: min inline

min: assets/js/main.min.js

assets/js/main.min.js: \
	assets/js/main.js
	cat $^ | $(UGLIFY) > $@

clean:
	$(RM) -r assets/js/main.min.js

_site/css/critical.css:
	jekyll build

inline: _site/css/critical.css
	awk -f _utils/inline.awk _includes/head.html > _includes/head.html.tmp
	mv _includes/head.html.tmp _includes/head.html
