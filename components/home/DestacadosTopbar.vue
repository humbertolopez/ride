<template>
    <div id="destacados-bar">
        <div class="destacados-item overflow-hidden relative flex justify-center content-center" v-for="post in destacados">
            <img class="object-cover w-full min-h-full min-w-full flex-shrink-0" :src="post._embedded['wp:featuredmedia'][0].source_url">
            <h2>{{post.title.rendered}}</h2>
        </div>
    </div>
</template>
<script>
    import {apiurl} from '~/conf/wp'

    export default {
        data(){
            return {
                destacados: [],
                getcategory: []
            }
        },
        async fetch(){
            const category = 'destacado'
            this.getcategory = await fetch(
                apiurl+'categories?slug='+category
            ).then(
                res => res.json()
            )
            const categoryid = this.getcategory[0].id
            this.destacados = await fetch(
                apiurl+'posts?_embed&per_page=5&categories='+categoryid
            ).then(
                res => res.json()
            )
        }
    }
</script>