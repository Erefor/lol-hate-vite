<template>
  <JSDialog>
    <Spinner />
  </JSDialog>
</template>

<script>
import Spinner from '../Atoms/Spinner.vue'
import JSDialog from '../Atoms/JSDialog.vue'
export default {
    name: 'LoadingIndicator',
    components: {  Spinner, JSDialog }
}
</script>

<style scoped>

</style>
