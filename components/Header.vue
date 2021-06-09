<template>
    <div id="header" class="mt-4 pb-4 w-full border-b border-gray-300 text-center">
        <NuxtLink to="/">
            <img class="rounded-full inline-block" src="~/assets/img/ride_logo.svg">
        </NuxtLink>
        <nav id="nav" class="nav container mx-auto text-center mt-4">
            <ul class="inline-block uppercase font-dosis font-bold text-xl">
                <li class="inline-block px-1"><NuxtLink to="/">Inicio</NuxtLink></li>
                <li class="inline-block px-1"><NuxtLink to="/category/podcast">Podcast</NuxtLink></li>
                <li class="inline-block px-1"><NuxtLink to="/category/nitpicks">Nitpicks</NuxtLink></li>
            </ul>
        </nav>
    </div>
</template>