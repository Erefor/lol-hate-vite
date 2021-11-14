<template>
  <button
    :type="type"
    :class="computedComponentClass"
  >
    <slot />
  </button>
</template>
<script>
import {computed, toRefs} from 'vue'

export default {
    name: 'JSButton',
    props: {
        borderRadius: {
            type: String,
            default: '5px',
            required: false,
        },
        variant: {
            type: String,
            default: 'default',
            required: false,
            validator: (value) => ['default'].includes(value)
        },
        type: {
            type: String,
            default: '',
            required: false,
        }
    },
    setup(props) {
        const { borderRadius:componentBorderRadius } = toRefs(props)
        const classesMap = {
            default: 'default',
        }
        const computedComponentClass =  computed(() => `
      ${classesMap[props.variant]}`)
        return {
            componentBorderRadius,
            computedComponentClass,
        }
    }
}
</script>

<style scoped>
button{
  cursor: pointer;
}
button:hover{
  opacity: 0.7;
}
.default{
  background-color: cornflowerblue;
  border-radius: v-bind(componentBorderRadius);
  height: 40px;
  border: none;
  outline: none;
  color: white;
  padding: 12px;
}
</style>
