<template>
  <div>
  <Header/>
  <div class="nes-container main-content">
    <router-view></router-view>
  </div>
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

.main-content {
  margin-top: 80px; 
  margin-bottom: 75px; 
  border-top: 0px;
}


@media (max-width: 800px) {
  .main-content  {
    padding: 0.5rem 1rem;
  }
}
</style>
