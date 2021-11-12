<template>
  <div
    class="contenedor-input"
    :class="{campoInvalido: !valid}"
  >
    <JSText
      :variant="labelVariant"
      class="label"
    >
      {{ label }}
    </JSText>
    <input
      class="input"
      :placeholder="placeholder"
      :type="type"
      :value="modelValue"
      @input="update"
    >
    <div
      v-if="mensajesDeError.length"
      class="errores"
    >
      <JSText
        variant="text"
        color="red"
        v-for="(error, index) in mensajesDeError"
        :key="index"
      >
        {{ error }}
      </JSText>
    </div>
  </div>
</template>

<script>
import { ref, toRefs } from 'vue'

export default {
    emits: ['update:modelValue', 'campos-validos'],
    props: {
        modelValue: {
            type: String,
            default: '',
        },
        label: {
            type: String,
            required: false,
            default: 'Label aquí',
        },
        type: {
            type: String,
            default: 'text',
        },
        placeholder: {
            type: String,
            default: '',
        },
        rules: {
            type: Array,
            required: false,
            default: () => [],
        },
        width: {
            type: String,
            required: false,
            default: null,
        },
        labelVariant: {
            type: String,
            default: 'text',
        },
    },
    setup(props, { emit }) {
        const { modelValue } = toRefs(props)
        const valid = ref(true)
        const errores = ref([])
        const mensajesDeError = ref([])
        const inputWidth = ref(!props.width ? '322px' : props.width)

        const validarReglas = nuevoValor => {
            mensajesDeError.value = []
            errores.value = []
            props.rules.forEach(rule => {
                const resultado = rule(nuevoValor)
                errores.value.push(resultado)
                mensajesDeError.value.push(resultado)
                mensajesDeError.value = mensajesDeError.value.map(msg => (typeof msg !== 'boolean' ? msg : ''))
            })
            if (errores.value.length === props.rules.length) {
                valid.value = errores.value.every(e => e === true)
                return
            }
            valid.value = false
        }

        function update(e) {
            validarReglas(e.target.value)
            emit('update:modelValue', e.target.value)
        }
        function tomarValidacionDeCampo() {
            validarReglas(modelValue.value)
            return valid.value
        }

        return {
            valid,
            errores,
            inputWidth,
            mensajesDeError,
            tomarValidacionDeCampo,
            update,
        }
    },
}

</script>

<style scoped lang="scss">
                         .contenedor-input{
                           width: v-bind(inputWidth);
                           height: 66px;
                           position: relative;
.label{
  width: 100%;
  height: 26px;
}
input{
// Para conseguir separacion entre el input y el ticker usa padding left
box-sizing: border-box;
  width: calc(100% - 4px);
  height: 40px;
  outline: none;
  margin: 0;
  border: solid 2px #DBD9D9;
  border-radius: 2px;
}
input:hover, input:focus{
  cursor: pointer;
  border-color: gray;
}
}
.errores{
  position: absolute;
  left: 0;
  right: 0;
  margin-top: 5px;
  height: auto;
}
.campoInvalido input{
  border: solid 2px red;
  color: red;
}
.campoInvalido input:focus {
  border: solid 2px red;
  color: red;
}
.campoInvalido input:hover {
  border: solid 2px red;
  color: red;
}
</style>

