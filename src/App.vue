<template>
  <component :is="layout">
  </component>
</template>

<script>
import MainLayout from '@/layouts/MainLayout'
export default {
  computed: {
    layout(){
      return `${this.$route.meta.layout || 'empty'}-layout`;
    }
  },
  components: {
    MainLayout
  }
}
</script>

<style>
  @import 'assets/css/index.css';
  @import url('https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,300;0,400;0,500;0,700;1,300&display=swap');
</style>
