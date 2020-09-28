<template>
  <main v-on:click="changePage" class="top-main">

    <div class="animate__animated animate__infinite animate__bounce animate__slow">
      <div class="eng top-content">Hello</div>
    </div>

    <div class="eng top-content-hide">Welcome</div>

    <div class="eng top-content2">Click on the screen</div>
  </main>
</template>

<script>
import { gsap } from 'gsap';

export default {
  name: 'Top',
  methods: {
    changePage(){
      gsap.to('.top-main', {
        backgroundColor: 'white',
        duration: 2,
        onComplete: function() {
          window.location.href = '/home'
        }
      }),
      gsap.to('.top-content', {
        y: -100,
        opacity: 0,
        duration: 1,
      }),
      gsap.to('.top-content2', {
        y: 100,
        opacity: 0,
        duration: 1,
      }),
      gsap.to('.top-content-hide', {
        className:"+=active animate__animated animate__tada",
      })
    }
  }
}
</script>

<style lang="scss">
.top-main {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #3F8EFC;
  height: 100vh;
  width: 100vw;
  animation: fadeIn 2s;
  text-align: center;
  .top-content {
    color: #fff;
    font-size: 128px;
  }
  .top-content2 {
    color: #fff;
    font-size: 64px;
    margin-top: 100px;
  }
  .top-content-hide {
    display: none;
  }
}

.active {
  display: block;
  color: #3F8EFC;
  font-size: 128px;
}
</style>