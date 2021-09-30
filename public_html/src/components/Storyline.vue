<template>
      <div class="nes-container is-dark">
          <div class="message-list" >
                <div class="message" v-for="(message, key) in data" v-bind:key="key">
                    <div class="message-img" v-bind:class="{ 'user': ! message.is_author}">
                        <img v-if="message.is_author && message.showPicture" src="https://static.olpiweb.be/infinite/mcpixel.png"/>
                        <img v-else-if="message.showPicture" class="float-end" src="https://static.olpiweb.be/infinite/melipixel.png"/>
                    </div>
                    <!-- Ending adds blinking for your dialog, is also clikable -->
                    <div v-if="isEnd && ! message.is_author"  class="nes-container is-rounded is-dark is-message blinking" >
                        <p>
                            <pre>{{ message.content }}</pre>                        
                        </p>

                        <div v-if="showRestart">
                            <button type="button" class="nes-btn is-warning restart-button" @click="restartStoryline(message.id)">
                                Restart Here
                            </button>
                        </div>    
                    </div>        
                     <!-- Normal text  -->
                    <div v-else class="nes-container is-rounded is-dark is-message">
                        <p><pre>{{ message.content }}</pre></p>
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
    props : {
        data : Object,
        isEnd : Boolean,
        isLoading: Boolean,
    },
    data () {        
        return { 
            showRestart : true,
        }
    },
    updated () {
        window.scrollTo(0,document.body.scrollHeight);
    },
    methods: {
        restartStoryline(id) {
            if ( confirm("Are you sure you want to restart ? : ") ) {
                //Rebase story to storyline above this one (id)
                fetch(process.env.VUE_APP_API_URL + 'restart/' + this.$route.params.storyId + '/' + id)
                .then(response => { 
                    console.log(response)
                    this.newContent = "";
                    this.$emit('newMessage');                
                });
            }
        }
    }
}
</script>

<style scoped>

.restart-button {
    width: 100%;
}
.is-message {
    border-image-repeat: stretch!important;
    clear: right;
}

.blinking {
    animation-name: blink;
    animation-duration: 1s;
    animation-iteration-count: infinite;
    animation-direction: alternate;
}

@keyframes blink {
  to { border-image-source:url('data:image/svg+xml;utf8,<?xml version="1.0" encoding="UTF-8" ?><svg version="1.1" width="8" height="8" xmlns="http://www.w3.org/2000/svg"><path d="M3 1 h1 v1 h-1 z M4 1 h1 v1 h-1 z M2 2 h1 v1 h-1 z M5 2 h1 v1 h-1 z M1 3 h1 v1 h-1 z M6 3 h1 v1 h-1 z M1 4 h1 v1 h-1 z M6 4 h1 v1 h-1 z M2 5 h1 v1 h-1 z M5 5 h1 v1 h-1 z M3 6 h1 v1 h-1 z M4 6 h1 v1 h-1 z" fill="rgb(33,37,41)" /></svg>'); }
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

pre {
    white-space: pre-wrap;       /* Since CSS 2.1 */
    white-space: -moz-pre-wrap;  /* Mozilla, since 1999 */
    white-space: -pre-wrap;      /* Opera 4-6 */
    white-space: -o-pre-wrap;    /* Opera 7 */
    word-wrap: break-word;       /* Internet Explorer 5.5+ */
}

</style>