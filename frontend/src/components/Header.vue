<template>
    <div class="nes-container nes-container-top header">
        <strong>Infinite Stories - {{ name }}</strong>
    </div>
</template>

<script>
export default {
    name: "Header",
    setup() {


    },
}
</script>

<style>

/* Header */
.header {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9;
    height: 80px;
    border-bottom: 4px solid #D3D3D3;
    background-color: white;
  }
</style>