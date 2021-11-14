<template>
  <teleport to="body">
    <div
      class="root"
      v-if="modelValue"
      @click="$emit('update:modelValue', !modelValue)"
    >
      <div class="dialog">
        <slot />
      </div>
    </div>
  </teleport>
</template>

<script>
export default {
    name: 'JSDialog',
    emits: ['update:modelValue'],
    props: {
        modelValue: {
            type: Boolean,
            default:true,
            required:false,
        }
    }
}
</script>

<style>
.dialog{
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0,0,0,0.5);
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
