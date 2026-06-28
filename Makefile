# Makefile for maker-nathan.dev (Jekyll / Minimal Mistakes)
# See CLAUDE.md for full dev setup instructions.

.PHONY: serve build check lint clean install publish

# Commit message for `make publish`. Override with: make publish MSG="your message"
MSG ?= "Site update $(shell date '+%Y-%m-%d %H:%M')"

# ── Development ──────────────────────────────────────────────────────────────

## Start local dev server with live reload at http://localhost:4000
serve:
	bundle exec jekyll serve --livereload

## One-shot production build into _site/
build:
	JEKYLL_ENV=production bundle exec jekyll build

## Install Ruby dependencies (run once after clone or Gemfile changes)
install:
	bundle install

## Remove _site/, .jekyll-metadata, and .sass-cache
clean:
	bundle exec jekyll clean

# ── Quality ───────────────────────────────────────────────────────────────────

## Build then validate HTML, internal links, and image references via htmlproofer
check: build
	bundle exec htmlproofer ./_site \
		--disable-external \
		--allow-hash-href \
		--ignore-urls "/linkedin.com/,/calendly.com/" \
		--ignore-files "./_site/404.html"

## Prose and style linting via Vale (install: brew install vale)
## Checks spelling, style, and consistency across all content files.
lint:
	@command -v vale >/dev/null 2>&1 || { echo "Vale not found. Install with: brew install vale"; exit 1; }
	vale _posts/ _pages/ _portfolio/

# ── Publishing ────────────────────────────────────────────────────────────────

## Stage content changes, commit, and push to GitHub Pages.
## Usage: make publish
##        make publish MSG="add glovebox portfolio page"
publish:
	git add _pages/ _portfolio/ _posts/ _data/ assets/ index.md _config.yml Gemfile
	@git diff --cached --quiet && echo "Nothing to commit." || git commit -m $(MSG)
	git push origin master
