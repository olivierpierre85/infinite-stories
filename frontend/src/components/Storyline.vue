<template>
      <div class="nes-container is-dark">
          <div class="message-list" v-for="(message, key) in data" v-bind:key="key">
              <div class="message">
                <div class="message-img">
                    <img v-if="message.is_author" src="@/assets/mcpixel.png"/>
                    <img v-else src="@/assets/melipixel.png"/>
                </div>
                <div class="nes-container is-rounded is-dark is-message">
                    <p>{{ message.content }} </p>
                </div>                
            </div>
          </div>
      </div>
</template>

<script>
export default {
    name : "Storyline",
    data () {        
        return { data: null }
    },
    // mounted() {
    //     this.updateStoryline();
    // },
    created () {
        this.updateStoryline();
        this.timer = setInterval(this.updateStoryline, 1000);
    },
    methods : {
        updateStoryline () {
            const ROOT_PATH ="http://127.0.0.1:8000" ;
            //TODO replace filler data with actual values
            fetch(ROOT_PATH + '/api/')
                .then(response => response.json())
                .then(data => {
                this.data = data;
            });
        }
    }
}
</script>

<style scoped>
.is-message {
    border-image-repeat: stretch!important;
}
.message-img {
    max-width: 100%;
    position: relative;
    display: inline-block;
}

img {
    max-width: 100%;
}
/*
.message {
    display: flex;
}
*/
@media (max-width: 800px) {
  .nes-container {
    /*flex-direction: column;*/
    padding: 0.5rem 1rem;
  }
}

</style>