<template>
    <div class="nes-container footer" v-show="false">
        <strong>Tool Bar to add</strong>
    </div>
</template>

<script>
export default {
    name: "Footer",
    setup() {


    },
}
</script>

<style>

.footer {
    position: fixed;
    height: 80px;
    left: 0;
    bottom: 0;
    width: 100%;
    background-color: white;
    color: black;
    text-align: center;
  }
</style>