<template>
  <div class="layout-default">
    <header class="layout-default__header">header</header>
    <div class="layout-default__content">
      <div class="container">
        <slot name="default" />
      </div>
    </div>
    <footer class="layout-default__footer">footer</footer>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.layout-default {
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: aliceblue;
  overflow: hidden;
}

.layout-default__footer,
.layout-default__header {
  height: 72px;
  display: flex;
  justify-content: space-between;
  background-color: aquamarine;
  padding: 20px 0 8px;
}

.layout-default__content {
  position: relative;
  display: flex;
  flex: 1 0 auto;
  align-items: center;
  justify-content: center;
}
</style>