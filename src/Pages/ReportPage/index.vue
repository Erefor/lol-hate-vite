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
import { ref } from 'vue'
import { database } from '../../Boot/Firebase'
import { ref as refFirebase, get, child } from 'firebase/database'
import JSInput from '../../components/Molecules/JSInput.vue'
import JSDialog from '../../components/Atoms/JSDialog.vue'
import JSModalBody from '../../components/Atoms/JSModalBody.vue'
import SummonerCard from '../../components/SummonerCard.vue'
export default {
    name: 'IndexReportPage',
    components: {
        JSInput, JSDialog, JSModalBody, SummonerCard
    },
    setup() {
        const summonerName = ref('')
        const apiKey = ref('')
        const summonerData = ref(null)
        const showModal = ref(false)
        const input = ref(null)
        const loading = ref(false)
        async function getApiKey() {
            const key = await get(await child(refFirebase(database), '/apiKey'))
            apiKey.value = key.val()
        }
        async function getSummonerData() {
            loading.value = true
            if (!input.value.tomarValidacionDeCampo()){
                loading.value = false
                return
            }
            try {
                const data = await fetch(`https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName.value}?api_key=${apiKey.value}`)
                summonerData.value = await data.json()
                loading.value = false
            } catch (e) {
                loading.value = false
                showModal.value = true
            }
        }
        getApiKey()
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
