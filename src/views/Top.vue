<template>

<main v-on:click="changePage" ref="background" class="top-main">

  <div class="animate__animated animate__infinite animate__bounce animate__slow animate__delay-1s">
    <div class="eng top-content">Hello</div>
  </div>

  <div class="eng top-content-hide">Welcome</div>

  <div class="eng top-content2">Click on the screen</div>

  <div class="hide-background" ref="background"></div>

</main>

</template>

<script>
import { gsap } from 'gsap';

export default {
  name: 'Top',
  methods: {
    changePage(){
      var tl = gsap.timeline({paused: true});
      tl.to('.top-content',.8, {
        y: -300,
        opacity: 0,
      })
      .to('.top-content2',.8, {
        y: 300,
        opacity: 0,
      })
      .to('.hide-background', 1,{
        scaleX: 1,
      }),
      tl.to('.top-content-hide', 2,{
        display: 'block',
        className: '+=animate__animated animate__flipInX top-content-hide eng',
      },'-=.5')
      tl.to('.top-content-hide', 2,{
        className: '+=animate__animated animate__hinge top-content-hide eng',
        onComplete: function() {
        window.location.href = '/home'
        }
      })
      tl.play();
    }
  }
}
</script>

<style lang="scss">

.top-main {
  position: relative;
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
    font-size: clamp(64px, 20vw ,128px);
    animation: lightSpeedInLeft 1s;
  }
  .top-content2 {
    color: #fff;
    font-size: clamp(32px, 10vw ,64px);
    margin-top: 100px;
    animation: lightSpeedInRight 1s;
  }
  .top-content-hide {
    display: none;
    color: #3F8EFC;
    font-size: clamp(64px, 20vw ,192px);
    z-index: 1;
  }
  .hide-background {
    position: absolute;
    background-color: #fff;
    width: 100%;
    height: 100%;
    transform: scaleX(0);
  }
}

</style>