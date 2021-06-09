/* url for the main api endpoint */
const apiurl = 'https://rideblog.mx/wp-json/wp/v2/'
/* the name of the blog, for use on <title> */
const blogname = 'RIDE ─ El blog y podcast sobre la cultura automotriz, desde México'
/* the media path, for easy fetching featured media and alt descriptions */
const media = `$data._embedded['wp:featuredmedia'][0].source_url`

export {apiurl,blogname,media}