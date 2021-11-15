<template>
  <div :class="configuracionIcono">
    <span class="material-icons">
      {{ nombreDeIcono }}
    </span>
  </div>
</template>

<script>
import { ref, computed } from 'vue'

export default {
    props: {
        tamanio: {
            type: String,
            required: false,
            default: 'sm',
        },
        borderColor: {
            type: String,
            required: false,
            default: '',
        },
        nombreDeIcono: {
            type: String,
            required: false,
            default: 'link',
        },
        color: {
            type: String,
            required: false,
            default: 'primary',
        },
        backgroundColor: {
            type: String,
            required: false,
            default: '',
        },
        borderRadius: {
            type: String,
            required: false,
            default: null,
        },
    },
    setup(props) {
        const icono = ref('image')
        const iconBorderRadius = ref(!props.borderRadius ? '0px' : props.borderRadius)
        const tamanios = ref({
            sm: 'contenedor-icono-sm',
            md: 'contenedor-icono-md',
            lg: 'contenedor-icono-lg',
        })
        const colorDeBorde = ref({
            primary: 'primary',
            black: 'black',
        })

        const color = ref({
            primary: 'color-primary',
            black: 'color-black',
            white: 'color-white',
            yellow: 'color-yellow',
            grey: 'color-grey',
            red: 'color-red',
        })
        const backgroundColor = ref({
            primary: 'primary-background',
            secondary: 'secondary-background',
            black: 'black-background',
            white: 'white-background',
        })

        const configuracionIcono = computed(() => `
        ${tamanios.value[props.tamanio]} ${colorDeBorde.value[props.borderColor]}
        ${color.value[props.color]} ${backgroundColor.value[props.backgroundColor]}
        `)
        return {
            icono,
            configuracionIcono,
            iconBorderRadius,
        }
    },
}
</script>

<style scoped lang="scss">
div{
  display: flex;
  justify-content: center;
  align-items: center;
}
.contenedor-icono-sm{
  width: 34px;
  height: 34px;
  max-width: 34px;
  max-height: 34px;
  border-radius: v-bind(iconBorderRadius);
}
.contenedor-icono-sm span{
  display: inline-block;
  font-size: 20px;
  margin: 8px;
  width: 20px;
}
.contenedor-icono-md{
  width: 47px;
  height: 47px;
  max-width: 50px;
  max-height: 50px;
  border-radius: v-bind(iconBorderRadius);
}
.contenedor-icono-md span{
  display: inline-block;
  font-size: 30px;
  width: 30px;
}
.contenedor-icono-lg{
  width: 60px;
  height: 60px;
  max-width: 60px;
  max-height: 60px;
  border-radius: v-bind(iconBorderRadius);
}
.contenedor-icono-lg span{
  display: inline-block;
  font-size: 50px;
  width: 50px;
}
.primary{ border: solid 3px cornflowerblue; border-radius: 100%; }
.black{ border: solid 3px black; border-radius: 100%; }
.color-primary{ color: cornflowerblue }
.color-black{ color: black }
.color-white{ color: white }
.color-grey{ color: grey }
.color-red { color: red }
.black-background { background-color: black }
.white-background { background-color: white }
</style>
