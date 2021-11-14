<template>
  <div class="spinner" />
</template>

<script>
export default {
    name: 'JSSpinner',
}
</script>

<style scoped>
.spinner{
  border: 4px solid rgba(0,0,0,0.1);
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border-left-color: cornflowerblue;
  animation: spin 1s ease infinite;
}
@keyframes spin {
  0%{ transform: rotate(0deg) }
  100%{transform: rotate(360deg)}
}
</style>
