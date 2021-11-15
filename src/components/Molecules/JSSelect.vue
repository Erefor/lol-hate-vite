<template>
  <div
    :class="setSize"
    @click="setToggleAction"
  >
    <label>
      <JSText
        :variant="componentLabelVariant"
        :style="styleLabel"
      >
        {{ componentLabel }}
      </JSText>
    </label>
    <div class="select">
      {{ isObject ? modelValue[`${componentOptionLabel}`] : modelValue }}
    </div>
    <div
      v-if="!isObject"
      class="items"
      :class="{selectHide: !open}"
    >
      <div
        v-for="(value, index) in componentOptions"
        :key="index"
        class="item"
        @click="updateModel(value)"
      >
        {{ value }}
      </div>
    </div>
    <div
      v-else
      class="items"
      :class="{selectHide: !open}"
    >
      <div
        v-for="(value, index) in componentOptions"
        :key="index"
        class="item"
        @click="updateModel(value)"
      >
        {{ value[`${componentOptionLabel}`] }}
      </div>
    </div>
    <JSIcon
      class="icono"
      tamanio="sm"
      :nombre-de-icono="iconArrowDirection"
    />
  </div>
</template>

<script>
import {
    ref, reactive, computed, watch,
} from 'vue'
import JSIcon from '../Atoms/JSIcon.vue'

export default {
    name: 'JSSelect',
    components: {JSIcon},
    emits: ['update:modelValue'],
    props: {
        options: {
            type: Array,
            required: true,
            default: () => [],
        },
        label: {
            type: String,
            required: false,
            default: 'Label aquí',
        },
        disabled: {
            type: Boolean,
            required: false,
            default: false,
        },
        optionLabel: {
            type: String,
            required: false,
            default: null,
        },
        optionValue: {
            type: String,
            required: false,
            default: null,
        },
        size: {
            type: String,
            default: 'sm',
            required: false,
            validator: (value) => ['sm', 'md', 'full'].includes(value),
        },
        labelVariant: {
            type: String,
            default: 'text',
        },
        styleLabel: {
            type: Object,
            default: null,
        },
    },
    setup(props, { emit }) {
        const open = ref(false)
        const componentLabel = ref(props.label)
        const componentOptionValue = ref(props.optionValue)
        const componentOptionLabel = ref(props.optionLabel)
        const modelValue = ref(props.options.length > 0 ? props.options[0] : 'Cargando...')
        const componentOptions = ref(props.options)
        const componentLabelVariant = ref(props.labelVariant)
        const sizes = reactive({
            sm: 'selector-sm',
            md: 'selector-md',
            full: 'selector-full',
        })

        const iconArrowDirection = computed(() => (open.value ? 'arrow_drop_up' : 'arrow_drop_down'))

        function updateModel(value) {
            modelValue.value = value
            if (props.optionValue != null && props.optionLabel != null) {
                emit('update:modelValue', modelValue.value[`${componentOptionValue.value}`])
            } else {
                emit('update:modelValue', modelValue.value)
            }
        }

        const setSize = computed(() => {
            if (props.disabled) {
                return [sizes[props.size], 'disabled']
            }
            return sizes[props.size]
        })

        const setToggleAction = computed(() => {
            if (props.disabled) {
                return () => {}
            }
            // eslint-disable-next-line no-return-assign
            return (() => open.value = !open.value)
        })

        const isObject = computed(() => {
            if (props.optionValue != null && props.optionLabel != null) {
                return true
            }
            return false
        })

        watch(() => props.options, () => {
            componentOptions.value = props.options
            // eslint-disable-next-line prefer-destructuring
            modelValue.value = componentOptions.value[0]
        }, { deep: true })

        return {
            componentLabel,
            componentOptionValue,
            componentOptionLabel,
            open,
            modelValue,
            setSize,
            updateModel,
            setToggleAction,
            isObject,
            componentOptions,
            iconArrowDirection,
            componentLabelVariant,
        }
    },
}
</script>

<style scoped>
label{
  display: block;
  font-size: 12px;
  width: 100%;
  position: absolute;
  left: 0;
  top: -35px;
}
.selector-sm{
  height: 40px;
  line-height: 40px;
  max-height: 40px;
  border: solid 2px #DBD9D9;
  border-radius: 3px;
  width: clamp(100px, 199px, 199px);
  color: black;
  position: relative;
  cursor: pointer;
}
.selector-md{
  height: 40px;
  line-height: 40px;
  max-height: 40px;
  border: solid 2px #DBD9D9;
  border-radius: 3px;
  width: clamp(150px, 322px, 322px);
  color: black;
  position: relative;
  cursor: pointer;
}
.selector-sm:hover{
  border: solid 2px rgba(0, 0, 0, 0.50);
}
.selector-full{
  height: 40px;
  line-height: 40px;
  max-height: 40px;
  border: solid 2px #DBD9D9;
  border-radius: 3px;
  width: 100%;
  color: black;
  position: relative;
  cursor: pointer;
}
.select{
  width: auto;
  height: 40px;
  padding-left: 1em;
  padding-right: 1rem;
  overflow: hidden;
}
.icono{
  position: absolute;
  top: 0;
  right: 0;
  height: 100%;
  padding: 0 5px;
}
.items {
  color: #fff;
  border-radius: 0px 0px 6px 6px;
  overflow: hidden;
  border-right: 2px solid gray;
  border-left: 2px solid gray;
  border-bottom: 2px solid gray;
  border-top: solid 2px gray;
  position: absolute;
  background-color: white;
  left: 0;
  right: 0;
  z-index: 1;

}
.items div {
  color: #fff;
  padding-left: 1em;
  user-select: none;
  color: black;
}
.items .item:hover {
  background-color: rgba(128, 128, 128, 0.541);
}
.selectHide {
  display: none;
}
.disabled{
  cursor: not-allowed;
  background-color: rgba(128, 128, 128, 0.472);
  pointer-events: painted;
}
</style>
