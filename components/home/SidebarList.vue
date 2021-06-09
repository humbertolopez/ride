<template>
    <div v-if="getcategory[0]" :id="`list-category-${getcategory[0].slug}`" class="sidebar-category-list">
        <h2 class="list-category-title">{{getcategory[0].name}}</h2>
        <div v-if="sidebarposts">
            <ul v-for="post in sidebarposts">
                <li>{{post.title.rendered}}</li>
            </ul>
        </div>
    </div>
    <div v-else>
        Cargando...
    </div>
</template>
<script>
    export default {
        props: [
            'sidebarposts',
            'getcategory'
        ]
    }
</script>