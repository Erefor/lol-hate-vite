<template>
  <div
    v-if="summonerData"
    class="report-section"
  >
    <LoadingIndicator v-model="loading" />
    <SummonerCard
      v-if="summonerData"
      :summonerData="summonerData"
    />
    <form @submit.prevent="submitReview">
      <JSSelect
        :options="options"
        size="full"
        label="Selecciona un etiqueta"
        v-model="reviewTag"
      />
      <textarea
        v-model="review"
        placeholder="Agrega aquí tu comentario"
      />
      <JSButton>Enviar</JSButton>
    </form>
    <JSDialog v-model="showSuccessModal">
      <NotificationModal
        class="center"
        @action="resetSection"
        description="Tu comentario se ha guardado"
        button-text="Entendido"
      />
    </JSDialog>
  </div>
</template>
<script>
import {inject, ref} from 'vue'
import { ref as refFirebase, push } from 'firebase/database'
import { database } from '../../Boot/Firebase.js'
import SummonerCard from '../../components/SummonerCard.vue'
import JSSelect from '../../components/Molecules/JSSelect.vue'
import LoadingIndicator from '../../components/Molecules/LoadingIndicator.vue'
import NotificationModal from '../../components/NotificationModal.vue'
import JSDialog from '../../components/Atoms/JSDialog.vue'

export default {
    name: 'ReportSection',
    components: {SummonerCard, JSSelect, LoadingIndicator, NotificationModal, JSDialog},
    props: {
        summonerData: {
            type: [Object, null],
            required: true,
            default: () => {}
        },
    },
    setup(props) {
        const review = ref('')
        const reviewTag = ref('Buen jugador')
        const reset = inject('selectSearchSection')
        const loading = ref(false)
        const showSuccessModal = ref(false)
        const options = ref([
            'Buen jugador', 'Se fue Afk', 'Ayuda al equipo enemigo', 'Tóxico como el cianuro',
            'Muerte intencional', 'Prueba campeones en ranked', 'Insultó a mi madre', 'Pésimo jugador',
            'Perdimos por su culpa', 'Solo deseo insultarlo', 'Me carreo', 'Buenas calls',
        ])
        async function submitReview() {
            loading.value = true
            await push(refFirebase(database, `summoners/${props.summonerData.name}/reviews`), {
                review: review.value,
                reason: reviewTag.value
            })
            loading.value = false
            showSuccessModal.value = true
        }
        function resetSection() {
            showSuccessModal.value = false
            review.value = ''
            reviewTag.value = options.value[0]
            reset()
        }

        return {
            options,
            reviewTag,
            review,
            loading,
            showSuccessModal,
            submitReview,
            resetSection,
        }
    },
}
</script>
<style scoped>
.report-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 701px;
  height: 400px;
  margin-top: 48px;
}
textarea {
  padding: 10px;
  width: 300px;
  height: 250px;
  resize: none;
  outline-color: cornflowerblue;
  border-radius: 5px;
}

form{
  height: 100%;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
}
@media (max-width: 759px) {
    .report-section{
        width: 100%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    form{
        height: 400px;
        margin-top: 48px;
    }
}
</style>
