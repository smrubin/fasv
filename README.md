# FASV - Jekyll Theme

A single page Jekyll theme. Customizable, responsive, and comes with svg icons, google map and a contact form.

Here is the [live site](https://footanklespecialistsva.com)

### Prerequisites

Jekyll setup guide for macOS: https://jekyllrb.com/docs/installation/macos/

* rbenv: https://github.com/rbenv/rbenv
* ruby

When configuring ruby version, set for local directory via `rbenv local ${ruby_version}`.

### Install Dependencies

* Run `bundle` to install ruby gem dependencies
* npm install

### Local Development

Run `npm run start`.

### Build
Build with `npm run build`

TODO - Need to replace build system. For now, be on Node v6 and run grunt commands individually via `npx grunt ...` then run `jekyll build`. 

### Deploy
To Upload to S3 Bucket: aws s3 cp _site/. s3://YOUR_BUCKET_NAME/ --recursive --profile PROFILE_NAME
