<template>
    <div>
        <div v-if="! isEnd" class="nes-container with-title ">
            <p class="title">Your Answer</p>
            <form>
            <textarea id="textarea_field" class="nes-textarea" required v-model="newContent"></textarea>
            <button type="button" class="nes-btn" @click="sendResponse">Send</button>
            <button type="button" class="nes-btn" @click.alt="switchAdmin" v-bind:class="{ 'is-primary': isAdmin }">Admin</button>
            </form>
        </div>
        <div v-if="isEnd" class="nes-container with-title ">
            <p class="title">The End</p>
            <p>That's ok, You can still try again. </p>
            <p>Select one of your preview response and change it. 
                The story will start again at that point, so you can improve your answers to achieve a better ending
                </p>
        </div>
    </div>
</template>
<script>
export default {
    name: "AnswerBox",
    props : {
        lastStoryLine : Number,
        isEnd : Boolean,
    },
    data() {
        return {
            newContent: '',
            isAdmin: false,
            isEnding: false
        }
    },
    methods : {
        sendResponse() {
            fetch(process.env.VUE_APP_API_URL + this.$route.params.storyId , {
                method: 'POST',
                body: JSON.stringify({
                    'is_author' : this.isAdmin, 
                    'is_ending':this.isEnding, 
                    'content': this.newContent, 
                    'parent': {'id' : this.lastStoryLine}
                })
            })
            .then(response => { 
                console.log(response)
                this.newContent = "";
                this.$emit('newMessage');                
            });
        },
        switchAdmin() {
            this.isAdmin = ! this.isAdmin
        },
    }
}
</script>

<style scoped>

</style>