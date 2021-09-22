<template>
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
</template>
<script>
export default {
    name: "AnswerBox",
    props : {
        lastStoryLine : String
    },
    data() {
        return {
            newContent: '',
            isAdmin: false,
            isEnding: true
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