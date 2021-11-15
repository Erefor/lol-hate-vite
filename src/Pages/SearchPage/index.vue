<template>
  <div class="inputs">
    <JSInput
      width="468px"
      ref="input"
      label="Buscar invocador"
      v-model="summonerName"
      :rules="[value => value.trim() !== '' || 'Agrega un nombre valido']"
      @keypress.enter="getSummonerData"
    />
    <JSButton @click="getSummonerData">
      Buscar invocador
    </JSButton>
  </div>
  <JSDialog v-model="showModal">
    <NotificationModal
      description="No hay jugadores con ese nombre"
      button-text="Entendido"
      @action="showModal = false"
    />
  </JSDialog>
</template>

<script>
import {ref} from 'vue'
import useGetSummonerData from '../../composables/useGetSummonerData'
import JSInput from '../../components/Molecules/JSInput.vue'
import JSDialog from '../../components/Atoms/JSDialog.vue'
import NotificationModal from '../../components/NotificationModal.vue'
export default {
    name: 'SearchPageIndex',
    components: { JSInput, JSDialog, NotificationModal },
    setup() {
        const summonerName = ref('')
        const loading = ref(false)
        const input = ref(null)
        const summonerData = ref(null)
        async function getSummonerData() {
            loading.value = true
            if (!input.value.tomarValidacionDeCampo()){
                loading.value = false
                return
            }
            try {
                summonerData.value = null
                summonerData.value = await useGetSummonerData(summonerName.value, apiKey.value)
                loading.value = false
            } catch (e) {
                loading.value = false
                showModal.value = true
            }
        }
        return {
            input,
            summonerName,
            getSummonerData,
        }
    }
}
</script>

<style scoped>

</style>
