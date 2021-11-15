<template>
  <div>
    <LoadingIndicator v-if="loading" />
    <div class="inputs">
      <JSInput
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
    <ReportSection :summoner-data="summonerData" />
  </div>
</template>

<script>
import {inject, ref} from 'vue'
import JSInput from '../../components/Molecules/JSInput.vue'
import JSDialog from '../../components/Atoms/JSDialog.vue'
import NotificationModal from '../../components/NotificationModal.vue'
import useGetSummonerData from '../../composables/useGetSummonerData'
import ReportSection from './ReportSection.vue'

export default {
    name: 'IndexReportPage',
    components: {
        ReportSection,
        JSInput, JSDialog, NotificationModal,
    },
    setup() {
        const summonerName = ref('')
        const apiKey = inject('apiKey')
        const summonerData = ref(null)
        const showModal = ref(false)
        const input = ref(null)
        const loading = ref(false)
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
            summonerName,
            summonerData,
            apiKey,
            showModal,
            input,
            loading,
            getSummonerData,
        }
    }
}
</script>

<style scoped>
.inputs{
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-direction: row;
  width: 701px;
  height: 70px;
}
.center-items{
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
}
@media (max-width: 759px) {
    .inputs{
        height: 160px;
        width: auto;
        flex-direction: column;
        justify-content: space-between;
        align-items: flex-start;
    }
}
</style>
