<template>
  <div>
    <div class="inputs">
      <JSInput
        label="Buscar invocador"
        v-model="summonerName"
        :rules="[value => value.trim() !== '' || 'Agrega un nombre valido']"
      />
      <button @click="showModal = !showModal">
        Buscar
      </button>
    </div>
    <JSDialog v-model="showModal">
      <JSText>No hay jugadores con ese nombre</JSText>
    </JSDialog>
    <JSText v-if="summonerData">
      {{ summonerData.name }}
    </JSText>
  </div>
</template>

<script>
import { ref } from 'vue'
import { database } from '../../Boot/Firebase'
import { ref as refFirebase, get, child } from 'firebase/database'
import JSInput from '../../components/Molecules/JSInput.vue'
import JSDialog from '../../components/Atoms/JSDialog.vue'
export default {
    name: 'IndexReportPage',
    components: {
        JSInput, JSDialog
    },
    setup() {
        const summonerName = ref('')
        const apiKey = ref('')
        const summonerData = ref(null)
        const showModal = ref(true)
        async function getApiKey() {
            const key = await get(await child(refFirebase(database), '/apiKey'))
            apiKey.value = key.val()
        }
        async function getSummonerData() {
            try {
                const data = await fetch(`https://la1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName.value}?api_key=${apiKey.value}`)
                summonerData.value = await data.json()
                console.log(summonerData.value)
            } catch (e) {
                console.log(e)
            }
        }
        getApiKey()
        return {
            summonerName,
            summonerData,
            apiKey,
            showModal,
            getSummonerData,
        }
    }
}
</script>

<style scoped>
.inputs{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: row;
  width: 500px;
  height: 70px;
}
</style>
