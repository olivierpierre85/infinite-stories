<template>
    <div class="parent">
        <div class="div1"> The 5 may FDFD - Not long after the invasion of China </div>
        <div class="div2">
            Map
            <img style="width: 100%;" src="https://static.olpiweb.be/infinite/worldmap.png"/>  
        </div>
        <div class="div3"> 
        Health
        <div>
            <i class="nes-icon is-medium heart"></i>
            <i class="nes-icon is-medium is-half heart"></i>
            <i class="nes-icon is-medium is-transparent heart"></i>
            <i class="nes-icon is-medium heart is-empty"></i>
        </div>
        Finance
        <div>
            <i class="nes-icon is-medium coin"></i>
            <i class="nes-icon is-medium is-half coin"></i>
            <i class="nes-icon is-medium is-transparent coin"></i>
            <i class="nes-icon is-medium coin is-empty"></i>
        </div>
        </div>
    </div>
</template>

<script>

export default {
    name: "Info",
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

.parent {
display: grid;
grid-template-columns: repeat(5, 1fr);
grid-template-rows: repeat(5, 1fr);
grid-column-gap: 0px;
grid-row-gap: 0px;
}

.div1 { grid-area: 1 / 1 / 2 / 6; }
.div2 { grid-area: 2 / 1 / 6 / 4; }
.div3 { grid-area: 2 / 4 / 6 / 6; }
</style>