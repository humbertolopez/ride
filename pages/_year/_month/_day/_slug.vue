<template>
    <div id="single-post" class="container w-3/4 mx-auto">
        <h1>{{title.rendered}}</h1>
        <div class="date">
            {{formatDateReverse(date)}}
        </div>
        <div>
            <img class="w-full object-cover" :src="$data._embedded['wp:featuredmedia'][0].source_url" :alt="$data._embedded['wp:featuredmedia'][0].alt_text"></img>
        </div>
        <div v-html="content.rendered">
        </div>
    </div>
</template>
<script>
    import {apiurl,blogname,media} from '~/conf/wp'
    import {dateMethods} from '~/conf/utils'

    export default {
        head(post) {
            return {
                title: post.title.rendered+' ─ '+blogname
            }
        },
        layout: 'interior',
        async asyncData({params}){
            const slug = params.slug
            const post = await fetch(
                apiurl+'posts/?slug='+slug+'&_embed'
            ).then(
                (res)=>res.json()
            )
            return post[0]
        },
        methods: {
            formatDateReverse(date){
                return `${dateMethods.theDay(date)}/${dateMethods.theMonth(date)}/${dateMethods.theYear(date)}`
            }
        }
    }
</script>