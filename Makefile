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

_includes/critical.css:
	touch _includes/critical.css

inline: _includes/critical.css _site/css/critical.css
	mv _site/css/critical.css _includes/critical.css
