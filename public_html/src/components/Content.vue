<template>
  <div class="nes-container infinite-main">
      LastStoryline: {{ lastStoryLine }}
      <Storyline :data="data" />
      <AnswerBox :lastStoryLine="lastStoryLine"/>
  </div>
</template>

<script>

import Storyline from './Storyline.vue';
import AnswerBox from './AnswerBox.vue';

export default {
    name: "Content",
    components : {
        Storyline,
        AnswerBox
    },
    data () {        
        return { 
            data: null, 
            isLoading: true,
            isEnd: false,
            lastStoryLine:null,
        }
    },
    created () {
        if(this.$route.params.storyId)
            this.updateStoryline();
        //this.timer = setInterval(this.updateStoryline, 1000);  
    },
    methods : {
        updateStoryline () {
            fetch(process.env.VUE_APP_API_URL + this.$route.params.storyId)
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
                                            //Check if last Storyline is an END
                    }
                    if (this.data == null) {
                        this.isLoading = false;
                    }
                    this.data = data;
                    this.lastStoryLine= data.at(-1).id;

                    if(data.at(-1)["is_ending"]){
                        this.isEnd = true;
                    }
                }
            });
        }
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