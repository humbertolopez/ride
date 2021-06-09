<template>
    <section class="grid grid-cols-1 lg:grid-cols-3">
        <div id="home-posts-list" class="col-span-2 grid-cols-1 lg:grid grid-cols-2">
            <div v-for="post in posts" class="post-item border-b border-gray-300 px-6 py-10">
                <div>
                    <img class="w-full object-cover" :src="post._embedded['wp:featuredmedia'][0].media_details.sizes['index-post'].source_url" :alt="post._embedded['wp:featuredmedia'][0].alt_text"></img>
                </div>
                <h2 class="post-title"><NuxtLink :to="`${formatDate(post.date)}/${post.slug}`">{{post.title.rendered}}</NuxtLink></h2>
                <div v-html="post.excerpt.rendered" class="excerpt"></div>
            </div>
        </div>
        <div class="py-10 px-6">
            <HomePodcastsSidebar />
            <HomeNitpicksSidebar />
        </div>
    </section>
</template>
<script>
    import {apiurl,blogname} from '~/conf/wp'
    import {dateMethods} from '~/conf/utils'

    export default {
        data() {
            return {
                title: blogname,
                posts: []
            }
        },
        head() {
            return {
                title: this.title
            }
        },
        async fetch(){
            this.posts = await fetch(
                apiurl+'posts?_embed&per_page=10'
            ).then(
                res=>res.json()
            )
        },
        methods: {            
            formatDate(date){
                return `${dateMethods.theYear(date)}/${dateMethods.theMonth(date)}/${dateMethods.theDay(date)}`
            }
        }
    }
</script>