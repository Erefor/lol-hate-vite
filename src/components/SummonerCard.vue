<template>
  <div class="card-container">
    <div class="image">
      <img :src="`http://ddragon.leagueoflegends.com/cdn/11.22.1/img/profileicon/${summonerData.profileIconId}.png`">
    </div>
    <JSText>Aquí va información del jugador</JSText>
  </div>
</template>

<script>

export default {
    name: 'SummonerCard',
    props: {
        summonerData: {
            type: Object,
            required: true,
            default: () => {}
        }
    },
}
</script>

<style scoped>
.card-container{
  width: 450px;
  height: 350px;
  background-color: white;
  box-shadow: 0px 8px 19px 0px rgba(0,0,0,0.75);
  border-radius: 5px;
  overflow: hidden;
}
.image{
  width: 100%;
  height: 50%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
