<template>
  <div
    :class="variant"
  >
    <slot />
  </div>
</template>
<script>
export default {
    name: 'JSText',
    props: {
        variant: {
            type: String,
            default: 'title',
            validator: value => ['title', 'subtitle', 'subtitle-text', 'description','text'].includes(value),
        },
    },
    data() {
        return {
            classes: [
                this.variant,
            ],
        }
    },
}
</script>
<style>
.title{
  font-size: 36px;
  font-style: normal;
  font-weight: 600;
}
.subtitle{
  font-size: 24px;
  font-style: normal;
  font-weight: 600;
}
.subtitle-text{
  font-size: 14px;
  font-weight: 600;
  font-style: normal;
}
.description{
  font-size: 16px;
  font-weight: 400;
  font-style: normal;
}
.text{
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
}
</style>
