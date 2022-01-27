<template>
    <div class="nes-container footer" v-show="true">
        <button type="button" class="nes-btn is-success footer-btn" @click="switchShowInfo" >Toggle Story Status</button>
        <button type="button" class="nes-btn" @click.alt="switchAdmin" v-bind:class="{ 'is-primary': isAdmin }">Admin</button>
    </div>
</template>

<script>
import { mapState } from 'vuex'

export default {
    name: "Footer",
    computed: mapState([
        'isAdmin'
    ]),
    methods : {
        switchAdmin() {
            this.$store.dispatch('switchAdmin')
        },
        switchShowInfo() {
            this.$store.dispatch('switchShowInfo')
        },
    }
}
</script>

<style scoped>
.footer-btn {
    margin-right:15px;
}
.footer {
    position: fixed;
    height: 80px;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: white;
    color: black;
    text-align: center;
    padding:5px;
  }
</style>