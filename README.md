# FASV - Jekyll Theme

A single page Jekyll theme. Customizable, responsive, and comes with svg icons, google map and a contact form.

Here is the [live site](https://footanklespecialistsva.com)

### Prerequisites

Jekyll setup guide for macOS: https://jekyllrb.com/docs/installation/macos/

* rbenv: https://github.com/rbenv/rbenv
* ruby

* nvm
* node

When configuring ruby version, set for local directory via `rbenv local ${ruby_version}`.

### Install Dependencies

* Run `bundle` to install ruby gem dependencies
* npm install

### Local Development

Run `npm run start`.

Site is served on localhost:4000.

### Build
Build with `npm run build`

TODO - Need to replace build system. For now, be on Node v6 and run grunt commands individually via `npx grunt ...` then run `jekyll build`. 

### Deploy
To Upload to S3 Bucket: aws s3 cp _site/. s3://YOUR_BUCKET_NAME/ --recursive --profile PROFILE_NAME

### TODO
* Figure out webpack bundling for javascript assets. Currently, they bundle but yield an error that prevents several jQuery plugins from working. This error is likely a result from loading jQuery as a separate resource outside of the webpack context. Either the webpack config needs to be modified to support this or these javascript libraries should be imported via webpack. Currently, the legacy version of the bundled javascript is manually copied to the _site folder, see js/old/all.min.js.

* Update npm start to watch for changes in javascript assets via webpack. Currently, I have not figured out a way to get a sequential running of webpack then jekyll and keeping them both in watch mode.

* Implement new build system for svg assets after removing grunt and plugins:
  * Minify svg assets using webpack / svgo
  * Then, combine svg assets into one svg asset via something like https://github.com/svgstore/svgstore