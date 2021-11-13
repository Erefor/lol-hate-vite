<template>
  <div>
    <div class="inputs">
      <JSInput
        label="Buscar invocador"
        v-model="summonerName"
        :rules="[value => value.trim() !== '' || 'Agrega un nombre valido']"
      />
      <button @click="getSummonerData">
        Buscar
      </button>
      <teleport>
        <JSText>
          Hola, puerco
        </JSText>
      </teleport>
    </div>
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
export default {
    name: 'IndexReportPage',
    components: {
        JSInput,
    },
    setup() {
        const summonerName = ref('')
        const apiKey = ref('')
        const summonerData = ref(null)
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
