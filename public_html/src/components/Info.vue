<template>
    <div class="wrapper">
        <div class="header-info nes-container is-dark">
            <span class="header-story-date">
                {{ formattedStoryDate }}
            </span>   
            <div class="header-health">
                Health : 
                <i class="nes-icon is-small heart" v-for="index in currentStoryLine.health" :key="index"></i>
                <i class="nes-icon is-small is-transparent heart" v-for="index in (5-currentStoryLine.health)" :key="index"></i>
            </div>
            <div class="header-wealth">
                Money :
                <i class="nes-icon is-small coin" v-for="index in currentStoryLine.wealth" :key="index"></i>
                <i class="nes-icon is-small is-transparent heart" v-for="index in (5-currentStoryLine.wealth)" :key="index"></i>
            </div>
        </div>
        <div class="main-container nes-container is-dark">
            <canvas style="width: 100%;"  id="demo"></canvas>
        </div>
        <div class="aside aside-2 nes-container is-dark"> 
            Latest News
            <hr/>
            <h2 class="header-paper-title h3">
                {{ currentStoryLine.papers_headline }}
            </h2>
            <br/>
            <div class="header-paper-content">
                {{ currentStoryLine.papers_content }}
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
        }
    },
    computed :{
        formattedStoryDate : function () {
            let date = new Date(this.currentStoryLine.story_date);
            let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
            let formatDate = date.toLocaleString('en-US', options);
            return formatDate;
        }
    },
    props : {
        currentStoryLine : Object,
    },
    mounted () {
        this.isLoading = true;
        this.updateStoryline();
        this.drawPosition();
        //this.timer = setInterval(this.updateStoryline, 1000);  
    },
    methods : {
        drawPosition () {
            //this.currentStoryLine
            //TODO SAve somewhere else
            var img_width = 1295;
            var img_height = 651;
            var demo = document.getElementById('demo');
            var canvas = demo,
            ctx = canvas.getContext('2d'),
            img = new Image;
            img.onload = start;
            img.src = '../assets/worldmap.png';

            canvas.width = img_width;
            canvas.height = img_height;
            let centerX = this.currentStoryLine.hero_position_x;
            let centerY = this.currentStoryLine.hero_position_y;

            function start() {
                ctx.drawImage(img, 0, 0);

                //Draw hero position with a cross
                ctx.moveTo(centerX-10, centerY-10);
                ctx.lineTo(centerX+10, centerY+10);

                ctx.moveTo(centerX-10, centerY+10);
                ctx.lineTo(centerX+10, centerY-10);

                ctx.lineWidth = 4;
                ctx.strokeStyle = "red";

                ctx.stroke();
            }
        },
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

/* Flex Box containers */
.wrapper {
  display: flex;  
  flex-flow: row wrap;
  font-weight: bold;
  text-align: center; 
}

.wrapper > * {
  padding: 10px;
  margin: 5px;
  flex: 1 100%;
}

.main-container  {
  text-align: left;
}


@media all and (min-width: 600px) {
  .aside { flex: 2 0 0; }

  .header-info {
    display: flex;  
    flex-flow: row wrap;
    font-weight: bold;
    text-align: left; 
    justify-content:space-between;
    }
}

@media all and (min-width: 1200px) {
  .main-container    { flex: 3 0px; }
  .main-container     { order: 2; }
  .aside-2 { order: 3; }
}

</style>