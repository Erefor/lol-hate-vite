<template>
  <JSModalBody class="center-items">
    <JSText :variant="descriptionVariant">
      {{ description }}
    </JSText>
    <JSButton @click="$emit('action')">
      {{ buttonText }}
    </JSButton>
  </JSModalBody>
</template>

<script>
import JSModalBody from './Atoms/JSModalBody.vue'

export default {
    name: 'NoDataModal',
    components: {
        JSModalBody,
    },
    emits: ['action'],
    props: {
        buttonText: {
            type: String,
            default: 'Texto',
            required: true,
        },
        description: {
            type: String,
            default: 'Description',
            required: false,
        },
        descriptionVariant: {
            type: String,
            default: 'title',
            required: false,
        },
    },
}
</script>

<style scoped>

</style>
