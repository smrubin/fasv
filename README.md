# FASV - Jekyll Theme

A single page Jekyll theme. Customizable, responsive, and comes with svg icons, google map and a contact form.

Here is the [live site](https://footanklespecialistsva.com)

### Local Development

Serve with `npm run serve`

### Build
Build with `npm run build`

TODO - Need to replace build system. For now, be on Node v6 and run grunt commands individually via `npx grunt ...` then run `jekyll build`. 

### Deploy
To Upload to S3 Bucket: aws s3 cp _site/. s3://YOUR_BUCKET_NAME/ --recursive --profile PROFILE_NAME
