<template>
  <div>
      <Storyline :data="data" :isEnd="isEnd" :isLoading="isLoading" @newMessage="updateStoryline"/>
      <AnswerBox :lastStoryLine="lastStoryLine" :isEnd="isEnd" @newMessage="updateStoryline"  />
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
            isLoading: null,
            isEnd: false,
            lastStoryLine:null,
        }
    },
    mounted () {
        this.isLoading = true;
        this.updateStoryline();

        //this.timer = setInterval(this.updateStoryline, 1000);  
    },
    methods : {
        updateStoryline () {

            let storyId = 8;
            if(this.$route.params.storyId) {
                storyId = this.$route.params.storyId;
                this.fetchStory(storyId);
            } else {
                //TODO get last Story id from current logged user
                storyId = 8;
            }
        },
        fetchStory(storyId) {
            fetch(process.env.VUE_APP_API_URL + storyId)
                .then(response => response.json())
                .then(data => {
                //update Vdom only when new entries (NOT WORKING when changing content)
                //if (this.data == null || this.data.length !== data.length) {
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
                    } else {
                        this.isEnd = false;
                    }
                //}
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

</style>