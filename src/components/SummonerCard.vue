<template>
  <div class="card-container">
    <img src="https://www.gettyimages.com.mx/gi-resources/images/500px/983794168.jpg">
    <JSText>Aquí va información del jugador</JSText>
  </div>
</template>

<script>
export default {
    name: 'SummonerCard'
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
</style>
