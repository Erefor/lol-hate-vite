<template>
  <div>
    <slot />
  </div>
</template>

<script>
export default {
    name: 'JSModalBody'
}
</script>

<style scoped>
div{
  padding: 50px;
  border-radius: 10px;
  background-color: white;
  width: clamp(200px, 500px, 750px);
  height: clamp(200px, 300px, 500px);
  margin: 12px;
}
</style>
