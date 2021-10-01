<template>

<div>
  <h2 class="home-title">Select a Story </h2>

  <div class="story-list" >
    <div v-for="(message, key) in data" v-bind:key="key">
      <div class="nes-container is-dark with-title is-centered story-choice">
          <p class="title">Time Transmitter - X. Message</p>
          <p>{{ message.content.substring(1, 100)  }}</p>
      </div>   
    </div>
    <div>
      <div class="nes-container with-title is-centered story-choice">
          <p class="title">Time Transmitter</p>
          <button type="button" class="nes-btn is-primary">Start New Story !</button>
      </div>   
    </div>
  </div>
</div>

</template>

<script>
// @ is an alias to /src

export default {
  name: 'MultipleStories',
  data () {        
      return { 
          data: null, 
      }
  },
  mounted () {
    this.updateStoryline();
  },
  methods : {
      updateStoryline () {
          fetch(process.env.VUE_APP_API_URL + '8')
              .then(response => response.json())
              .then(data => {
                  this.data = data;
          });
      }
  }
}
</script>

<style scoped>
.home-title {
  text-align: center;
  margin: 20px;
}

.story-list {
  width: 60%;
  margin: auto;
}
.story-choice {
  margin-top: 20px;
}

@media (max-width: 800px) {
  .story-list {
    width: 100%;
  }
}

</style>
