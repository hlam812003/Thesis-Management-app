<template>
    <div>
        <header>
            <nav>
                <ul>
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li><nuxt-link to="/thesis">Theses</nuxt-link></li>
                    <li><nuxt-link to="/students">Students</nuxt-link></li>
                    <li><nuxt-link to="/supervisors">Supervisors</nuxt-link></li>
                </ul>
            </nav>
        </header>
    </div>
</template>

<script>
    export default {
        name: 'TheHeader'
    }
</script>

<style scoped>
    @import "~/assets/css/TheHeader.css"
</style>
