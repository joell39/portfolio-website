<script setup>
import HeaderComp from './components/HeaderComp.vue'
import Heading from './components/Heading.vue'
import Contact from './components/Contact.vue'
import FooterComp from './components/FooterComp.vue'
import { store } from './store.js'
</script>

<script>
export default {
  data() {
    return {
      store
    }
  },

  created () {
    document.title = this.$title
  }
}
</script>

<template>
  <header>
    <HeaderComp />
  </header>

  <main>
    <Heading />
    <Contact />
  </main>

  <footer>
    <FooterComp />
  </footer>
</template>

<style>
  
</style>
