<template>
  <div class="search-container">
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
        class="center"
        description="No hay jugadores con ese nombre"
        button-text="Entendido"
        @action="showModal = false"
      />
    </JSDialog>
    <ReviewsSection
      class="reviews-section"
      v-if="summonerData"
      :summoner-data="summonerData"
    />
  </div>
</template>

<script>
import {inject, ref} from 'vue'
import useGetSummonerData from '../../composables/useGetSummonerData'
import JSInput from '../../components/Molecules/JSInput.vue'
import JSDialog from '../../components/Atoms/JSDialog.vue'
import NotificationModal from '../../components/NotificationModal.vue'
import ReviewsSection from './ReviewsSection.vue'

export default {
    name: 'SearchPageIndex',
    components: {ReviewsSection, JSInput, JSDialog, NotificationModal},
    setup() {
        const summonerName = ref('')
        const apiKey = inject('apiKey')
        const loading = ref(false)
        const input = ref(null)
        const summonerData = ref(null)
        const showModal = ref(false)
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
            summonerData,
            showModal,
            getSummonerData,
        }
    }
}
</script>

<style scoped>
.search-container{ width: 701px }
.inputs{
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    flex-direction: row;
    width: 701px;
    height: 70px;
}
.reviews-section{
    margin-top: 48px;
}
</style>
