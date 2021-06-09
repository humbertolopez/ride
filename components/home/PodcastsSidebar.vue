<template>
    <HomeSidebarList :sidebarposts="sidebarposts" :getcategory="getcategory" />
</template>
<script>
    import {apiurl} from '~/conf/wp'

    export default {
        data(){
            return {
                sidebarposts: [],
                getcategory: []
            }
        },
        async fetch(){
            const category = 'podcast'
            this.getcategory = await fetch(
                apiurl+'categories?slug='+category
            ).then(
                res => res.json()
            )
            const categoryid = this.getcategory[0].id
            this.sidebarposts = await fetch(
                apiurl+'posts?_embed&categories='+categoryid
            ).then(
                res => res.json()
            )
        }
    }
</script>