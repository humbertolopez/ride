<template>
    <div>
        <h2>{{title.rendered}}</h2>
        <div v-html="content.rendered"></div>
    </div>
</template>
<script>
    import {apiurl,blogname} from '~/conf/wp';

    export default {
        head(post) {
            return {
                title: post.title.rendered+' ─ '+blogname
            }
        },
        async asyncData({params}){
            const id = params.id
            const post = await fetch(
                apiurl+'posts/'+id+'?embed'
            ).then(
                (res)=>res.json()
            )
            return post
        }
    }
</script>