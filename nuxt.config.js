export default {
    components: true,
    modules: [
        '@nuxt/http',
        '@nuxtjs/tailwindcss'
    ],
    head: {
        link: [
            {
                rel: 'stylesheet',
                href: 'https://fonts.googleapis.com/css?family=Dosis:600,400,300|Nunito:400,600'
            }
        ]
    },
    css: [
        '~/assets/css/style.css',
    ]
}