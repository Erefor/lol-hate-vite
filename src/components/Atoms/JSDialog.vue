<template>
  <teleport to="body">
    <div
      v-if="modelValue"
      class="modal-mask"
    >
      <div class="modal-wrapper">
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
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
