<template>
      <div class="nes-container is-dark">
          <div class="message-list" >
                <div class="message" v-for="(message, key) in data" v-bind:key="key">
                    <div class="message-img" v-bind:class="{ 'user': ! message.is_author}">
                        <img v-if="message.is_author && message.showPicture" src="https://static.olpiweb.be/infinite/mcpixel.png"/>
                        <img v-else-if="message.showPicture" class="float-end" src="https://static.olpiweb.be/infinite/melipixel.png"/>
                    </div>
                    <div class="nes-container is-rounded is-dark is-message">
                        <p>{{ message.content }} </p>
                    </div>                
                </div>
                <div v-if="isLoading" class="message" >
                    <div class="nes-container is-rounded is-dark is-message">
                        <p>Loading ...</p>
                    </div>                
                </div>
          </div>
      </div>
</template>

<script>
export default {
    name : "Storyline",
    data () {        
        return { data: null, isLoading: true }
    },
    created () {
        this.updateStoryline();
        this.timer = setInterval(this.updateStoryline, 1000);  
    },
    updated () {
        window.scrollTo(0,document.body.scrollHeight);
    },
    methods : {
        updateStoryline () {
            fetch(process.env.VUE_APP_API_URL)
                .then(response => response.json())
                .then(data => {
                //update Vdom only when new entries
                if (this.data == null || this.data.length !== data.length) {
                    //add values that computes if previous value is same character
                    let previous = null;
                    for (let d in data) {
                        if (previous == data[d].is_author) {
                            data[d].showPicture = false;
                        } else {
                            data[d].showPicture = true;
                        }
                        previous = data[d].is_author;
                    }
                    if (this.data == null) {
                        this.isLoading = false;
                    }
                    this.data = data;
                    
                }
            });
        }
    }
}
</script>

<style scoped>
.is-message {
    border-image-repeat: stretch!important;
    clear: right;
}
.message-img {
    max-width: 100%;
    position: relative;
    display: inline-block;
}
.message-img.user {
    float: right;
}

img {
    max-width: 100%;
}

@media (max-width: 800px) {
  .nes-container {
    /*flex-direction: column;*/
    padding: 0.5rem 1rem;
  }
}

</style>