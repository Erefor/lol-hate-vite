<template>
  <div class="contenedor-principal">
    <JSText
      variant="title"
      class="titulo"
    >
      {{ nombre }}
    </JSText>
    <JSTabs tab-title-variant="subtitle-text">
      <Tab title="inicio">
        <MainPageTab />
      </Tab>
      <Tab title="Buscar">
        <h1>Buscar</h1>
      </Tab>
      <Tab title="Reportar">
        <ReportPage />
      </Tab>
    </JSTabs>
  </div>
</template>

<script>
import {ref} from 'vue'
import MainPageTab from './Pages/MainPage/index.vue'
import ReportPage from './Pages/ReportPage/index.vue'
import JSTabs from './components/Molecules/JSTabs.vue'
import Tab from './components/Atoms/Tab.vue'
export default {
    components: {
        JSTabs, Tab, MainPageTab, ReportPage,
    },
    setup() {
        const nombre = ref('LoL Hate')
        return {
            nombre
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
  height: clamp(400px, 850px, 1200px);
}
.titulo{ margin-bottom: 24px }
</style>
