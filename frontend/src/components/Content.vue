<template>
  <div class="nes-container infinite-main">
      <Storyline/>
      <div>
          <div class="nes-container with-title ">
              <p class="title">Your Answer</p>
              <form>
                <textarea id="textarea_field" class="nes-textarea" required v-model="newContent"></textarea>
                <button type="button" class="nes-btn" @click="sendResponse">Send</button>
                <button type="button" class="nes-btn" @click.alt="switchAdmin" v-bind:class="{ 'is-primary': isAdmin }">Admin</button>
              </form>
          </div>
      </div>
  </div>
</template>

<script>

import Storyline from './Storyline.vue';

export default {
    name: "Content",
    components : {
        Storyline
    },
    data() {
        return {
            newContent: '',
            isAdmin: false
        }
    },
    methods : {
        sendResponse() {
            alert(this.newContent);
        },
        switchAdmin() {
            this.isAdmin = ! this.isAdmin
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