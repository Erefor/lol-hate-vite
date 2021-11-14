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
      <JSModalBody> <JSText>No hay un invocador con ese nombre</JSText></JSModalBody>
    </JSDialog>
    <JSText v-if="summonerData">
      {{ summonerData.name }}
    </JSText>
    <SummonerCard />
  </div>
</template>

<script>
import {inject, ref} from 'vue'
import JSInput from '../../components/Molecules/JSInput.vue'
import JSDialog from '../../components/Atoms/JSDialog.vue'
import JSModalBody from '../../components/Atoms/JSModalBody.vue'
import SummonerCard from '../../components/SummonerCard.vue'
import useGetSummonerData from '../../composables/useGetSummonerData'
export default {
    name: 'IndexReportPage',
    components: {
        JSInput, JSDialog, JSModalBody, SummonerCard
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
                summonerData.value = useGetSummonerData(summonerName.value, apiKey)
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
  justify-content: flex-start;
  align-items: flex-end;
  flex-direction: row;
  width: 500px;
  height: 70px;
}
</style>
