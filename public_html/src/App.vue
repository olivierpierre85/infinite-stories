<template>
  <div>
  <Header/>
  <router-view></router-view>
  <Footer/>
  </div>
</template>

<script>
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';
//import Content from './components/Content.vue';

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    //Content
  }
}
</script>

<style>
html, body, pre, code, kbd, samp {
  font-family: "Press Start 2P";
}

body.modal-open {
  overflow: hidden;
}
</style>
