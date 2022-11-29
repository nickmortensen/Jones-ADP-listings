# Jones Sign Webflow Career Module :wrench:,

<!-- [npm link](https://www.npmjs.org/package/gulp-gold) -->

[![GitHub release](https://assets.website-files.com/602b1199ad0366aa34b0d515/60410ea12722d87829cf44d1_Jones_Sign_Linear_RGB.svg)](https://github.com/arturparkhisenko/gulp-gold/releases)
[![dependencies Status](https://david-dm.org/arturparkhisenko/gulp-gold/dev-status.svg)](https://david-dm.org/arturparkhisenko/gulp-gold?type=dev)
[![Known Vulnerabilities](https://snyk.io/test/github/arturparkhisenko/gulp-gold/badge.svg)](https://snyk.io/test/github/arturparkhisenko/gulp-gold)
[![GitHub license](https://img.shields.io/github/license/arturparkhisenko/gulp-gold.svg)](https://github.com/arturparkhisenko/gulp-gold/blob/master/LICENSE.md)

> NOTE:

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->

- [TL;DR](#tldr)
- [Links](#links)
- [Images](#images)
  - [npm scripts](#npm-scripts)
  - [gulp tasks](#gulp-tasks)
- [careers.html page](#optional)
- [MIT License](#mit-license)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## TL;DR

Simple HTML, CSS, & Javascript for a module that inserts Current [ADP WorkfoceNow](https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=204ff1cf-3f7e-4fae-984d-f0f3787bac3f&ccId=19000101_000001&type=MP&lang=en_US) Listings from Jones Sign Company into a Webflow page.

- Styles - [stylelint](https://stylelint.io/) -> [postCSS](https://postcss.org/)([postcss-import](https://www.npmjs.com/package/postcss-import), [postcss-url](https://www.npmjs.com/package/postcss-url), [postcss-preset-env](https://www.npmjs.com/package/postcss-preset-env)(autoprefixed&cssnext), [cssnano](https://cssnano.co/))
- Scripts - [eslint](https://www.npmjs.com/package/eslint) -> [webpack](https://webpack.js.org)([babel-preset-env](https://www.npmjs.com/package/@babel/preset-env)) -> [prettier](https://prettier.io/)
- Images - [imagemin](https://www.npmjs.com/package/gulp-imagemin)
- [Browsersync](https://www.browsersync.io/)
- Errors output improved by [plumber](https://www.npmjs.com/package/gulp-plumber)
- I hope You will enjoy it :)

## Installing

- You must have [NodeJS](https://nodejs.org/en/) (includes [NPM](https://www.npmjs.com/)) installed

```shell
npm install --legacy-peer-deps
```

> "--legacy-peer-deps" is required because of Stylelint, it'll be resolved later

This project uses Gulp v.4 so we should have `gulp-cli` or `npx` (goes with NPM v5.3.0+) installed globally to use npm scripts using local Gulp:

```shell
npm install -g gulp-cli
```

## Images

### Image Files
Images don't live in this git repository and they certainly aren't spit out from our job listings on [ADP WorkfoceNow](https://workforcenow.adp.com/mascsr/default/mdf/recruitment/recruitment.html?cid=204ff1cf-3f7e-4fae-984d-f0f3787bac3f&ccId=19000101_000001&type=MP&lang=en_US)

Instead they'll come [from the secure remote site at jobs.jonessign.com](https://jobs.jonessign.com/images)

## Optional
Most of these files also live in a testing environment at https://jobs.jonessign.com & you can see a pretty decent [similacrum](https://jobs.jonessign.com) of what I am after here.

[stylelint](https://stylelint.io/)
## [MIT License](LICENSE.md)
