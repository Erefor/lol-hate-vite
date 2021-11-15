<template>
  <div class="reviews-section">
    <SummonerCard
      v-if="summonerData"
      :summonerData="summonerData"
    />
    <ul>
      <li
        v-for="({review, reason}, index) in reviews"
        :key="index"
        class="review-item"
      >
        <JSText variant="text">
          <strong>{{ reason }}</strong>
        </JSText>
        <JSText variant="description">
          {{ review }}
        </JSText>
      </li>
    </ul>
  </div>
</template>
<script>
import { get, child, ref as refFirebase } from 'firebase/database'
import { database } from '../../Boot/Firebase'
import SummonerCard from '../../components/SummonerCard.vue'
import {ref} from 'vue'

export default {
    name: 'ReviewsSection',
    components: {SummonerCard},
    props: {
        summonerData: {
            type: [Object, null],
            required: true,
            default: () => {},
        },
    },
    setup(props) {
        const reviews = ref([])
        async function getReviews() {
            const reviewsResp = await get(await child(refFirebase(database), `/summoners/${props.summonerData.name}/reviews`))
            if (reviewsResp.exists()) {
                reviews.value = reviewsResp.val()
                return
            }
            reviews.value[0] = { reason: '', review: 'Este jugador aún no tiene ningún comentario' }
            console.log(reviewsResp.exists())
        }
        getReviews()
        return {
            reviews
        }
    }
}
</script>
<style scoped>
.reviews-section {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 400px;
}

ul {
    border-radius: 5px;
    list-style: none;
    width: 300px;
    max-height: 400px;
    border: solid 2px grey;
    box-shadow: 0px 8px 19px 0px rgba(0, 0, 0, 0.75);
    overflow-y: scroll;
    display: flex;
    flex-direction: column-reverse;
}
li{
    padding: 12px;
    border-bottom: solid 2px cornflowerblue;
}
@media (max-width: 759px) {
    .reviews-section{
        width: auto;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }
    ul{
        height: 400px;
        width: 100%;
        margin-top: 48px;
    }
}
::-webkit-scrollbar {
    width: 10px;
}

::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
}
::-webkit-scrollbar-thumb {
    background-color: cornflowerblue;
    border-radius: 10px;
}

</style>
