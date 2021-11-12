<template>
  <div>
    <div class="inputs">
      <JSInput
        label="Buscar invocador"
        v-model="summonerName"
        :rules="[value => value.trim() !== '' || 'Agrega un nombre valido']"
      />
      <button>Buscar</button>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { database } from 'src/Boot/Firebase'
import { ref as refFirebase, get, child } from 'firebase/database'
import JSInput from '../../components/Molecules/JSInput.vue'
export default {
    name: 'IndexReportPage',
    components: {
        JSInput,
    },
    setup() {
        const summonerName = ref('')
        // eslint-disable-next-line no-unused-vars
        const apiKey = ref('')
        async function getApiKey() {
            const key = get(await child(refFirebase(database), '/apiKey'))
            console.log(key)
        }
        getApiKey()
        return {
            summonerName,
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
