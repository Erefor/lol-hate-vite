<template>
  <div>
    <h1>{{ nombre }}</h1>
    <router-view />
  </div>
</template>

<script>
import {ref} from 'vue'

export default {
    props: {

    },
    setup() {
        const nombre = ref('Lol Hate')
        return {
            nombre
        }
    }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
