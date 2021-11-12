<template>
  <div
    class="tab-content"
    v-show="selectedTitle === title"
  >
    <slot />
  </div>
</template>

<script>
import {inject} from 'vue'

export default {
    name: 'JSTab',
    props: {
        title: {
            type: String,
            default: 'Titulo',
            required: true,
        },
    },
    setup() {
        const selectedTitle = inject('selectedTitle')
        return {
            selectedTitle,
        }
    }
}
</script>

<style scoped>
.tab-content{
  width: 100%;
  height: 100%;
}
</style>
