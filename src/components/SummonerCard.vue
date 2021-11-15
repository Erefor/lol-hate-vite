<template>
  <div class="card-container">
    <div class="image">
      <img
        :src="`https://ddragon.leagueoflegends.com/cdn/11.22.1/img/profileicon/${summonerData.profileIconId || 1}.png`"
        alt="summoner image"
      >
    </div>
    <div class="texts">
      <JSText variant="subtitle">
        {{ summonerData.name }}
      </JSText>
      <JSText variant="subtitle">
        {{ summonerData.summonerLevel }} lvl
      </JSText>
      <JSText variant="description">
        <a
          target="_blank"
          :href="`https://lan.op.gg/summoner/userName=${summonerData.name}`"
        >OP.GG</a>
      </JSText>
    </div>
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
  width: 350px;
  height: 400px;
  background-color: white;
  box-shadow: 0px 8px 19px 0px rgba(0,0,0,0.75);
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  text-align: center;
}
.image{
  max-width: 100%;
  max-height: 80%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
}
.image img {
  max-width: 300px;
  max-height: 300px;
  border-radius: 50%;
  padding: 10px;
}
a{
  text-decoration: none;
  color: cornflowerblue;
  font-weight: 600;
}
@media (max-width: 450px) {
    .card-container{
        width: 100%;
        height: 300px;
    }
    .image img {
        width: 150px;
        height: 150px;
    }
}
</style>
