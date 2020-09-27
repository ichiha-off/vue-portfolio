<template>
  <main class="top-main">
    <div class="animate__animated animate__infinite animate__bounce animate__slow">
      <button v-on:click="changePage" class="eng top-link">home</button>
    </div>
  </main>
</template>

<script>
export default {
  name: 'Top',
  methods: {
    changePage(){
    alert('Hello!')
    }
  }
}
</script>

<style lang="scss">
.top-main {
  background-color: #3F8EFC;
  height: 100vh;
  width: 100vw;
  animation: fadeIn 1s;
  text-align: center;
  .top-link {
    background-color: transparent;
    border: none;
    cursor: pointer;
    outline: none;
    padding: 0;
    appearance: none;
    color: #fff;
    line-height: 100vh;
    font-size: 128px;
  }
}
</style>