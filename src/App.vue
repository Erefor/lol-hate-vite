<template>
  <div class="contenedor-principal">
    <JSText
      variant="title"
      class="titulo"
    >
      {{ nombre }}
    </JSText>
    <JSTabs tab-title-variant="subtitle-text">
      <Tab title="Inicio">
        <MainPageTab />
      </Tab>
      <Tab title="Buscar">
        <SearchPage />
      </Tab>
      <Tab title="Reportar">
        <ReportPage />
      </Tab>
    </JSTabs>
  </div>
</template>

<script>
import {provide, ref} from 'vue'
import MainPageTab from './Pages/MainPage/index.vue'
import ReportPage from './Pages/ReportPage/index.vue'
import SearchPage from './Pages/SearchPage/index.vue'
import JSTabs from './components/Molecules/JSTabs.vue'
import Tab from './components/Atoms/Tab.vue'
import useGetApiKey from './composables/useGetApiKey'
export default {
    components: {
        JSTabs, Tab, MainPageTab, ReportPage, SearchPage,
    },
    setup() {
        const apiKey = ref(null)
        const nombre = ref('LoL Hate / LATAM')
        async function getKey() { apiKey.value = await useGetApiKey() }
        getKey()
        provide('apiKey', apiKey)
        return {
            nombre,
            apiKey,
        }
    }
}
</script>
<style>
*{margin: 0; padding: 0; font-family: "Open Sans",Avenir, Helvetica, Arial, sans-serif;}
#app {
  font-family: "Open Sans",Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  margin: 34px;
}
.contenedor-principal{
  width: 100%;
}
.titulo{ margin-bottom: 24px }
@media (max-width: 450px) {
    #app{
        margin: 12px;
    }
}
</style>
