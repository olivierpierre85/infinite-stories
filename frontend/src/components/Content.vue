<template>
  <div class="nes-container infinite-main">

      <Storyline/>
      <section>
          <div class="nes-container with-title ">
              <p class="title">Your Answer</p>
              <textarea id="textarea_field" class="nes-textarea"></textarea>
              <button type="button" class="nes-btn" @click="sendResponse">Send</button>
          </div>
      </section>
  </div>
</template>

<script>

import Storyline from './Storyline.vue';

export default {
    name: "Content",
    components : {
        Storyline
    },
    methods : {
        sendResponse() {
            alert('TODO send to api');
        },
    }
}
</script>

<style scoped>


.btn-answer {
    margin-right : 15px;
    margin-top : 10px;
}
.infinite-main {
    margin-top: 80px; 
    margin-bottom: 75px; 
    border-top: 0px;
}

@media (max-width: 800px) {
  .infinite-main  {
    /*flex-direction: column;*/
    padding: 0.5rem 1rem;
  }
}
</style>