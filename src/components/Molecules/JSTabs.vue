<template>
  <div class="js-tabs">
    <ul class="js-tabs-header">
      <li
        v-for="(title, index) in tabTitles"
        :key="index"
        @click="selectedTitle = title"
        :class="{'js-selected-tab': selectedTitle === title}"
      >
        <JSText :variant="tabTitleVariant">
          {{ title }}
        </JSText>
      </li>
    </ul>
    <slot />
  </div>
</template>

<script>
import {ref, provide} from 'vue'

export default {
    name: 'JSTabs',
    props: {
        tabTitleVariant: {
            type: String,
            default: 'text',
            required:false,
        },
    },
    setup(props, { slots }) {
        const tabTitles = ref(slots.default().map(tab => tab.props.title))
        const selectedTitle = ref(tabTitles.value[0])
        function selectSearchSection() { selectedTitle.value = tabTitles.value[1] }
        provide('selectSearchSection',selectSearchSection)
        provide('selectedTitle', selectedTitle)
        return {
            tabTitles,
            selectedTitle,
        }
    }
}
</script>

<style scoped>
.js-tabs{
  width: 100%;
  height: 100%;
}
.js-tabs-header{
  list-style: none;
  display: flex;
  margin-bottom: 12px;
}
.js-tabs-header li{
  width: 80px;
  text-align: left;
  margin-right: 12px;
  cursor: pointer;
}
.js-selected-tab{
  border-bottom: solid 5px cornflowerblue;
}
</style>
