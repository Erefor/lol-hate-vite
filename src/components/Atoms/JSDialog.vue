<template>
  <teleport to="body">
    <div
      class="root"
      v-if="modelValue"
      @click="$emit('update:modelValue', !modelValue)"
    >
      <div class="modal">
        <div>
          <slot />
        </div>
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
.modal{
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
.modal > div{
  padding: 50px;
  border-radius: 10px;
  background-color: white;
  width: clamp(250px, 500px, 750px);
  height: clamp(250px, 300px, 500px);
  margin: 12px;
}
</style>
