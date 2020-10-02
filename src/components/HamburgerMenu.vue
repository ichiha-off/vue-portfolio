<template>

  <div class="hamburger-menu">
    <!--ハンバーガーメニューのボタン-->
    <div class="hamburger-btn" v-on:click='ActiveBtn=!ActiveBtn'>
      <span class="line line-01" v-bind:class="{'btn-line01':ActiveBtn}"></span>
      <span class="line line-02" v-bind:class="{'btn-line02':ActiveBtn}"></span>
      <span class="line line-03" v-bind:class="{'btn-line03':ActiveBtn}"></span>
    </div>

    <!--サイドバー-->
    <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__bounceInRight"
      leave-active-class="animate__animated animate__fadeOutRight"
      mode="out-in"
    >
      <div class="menu" v-show="ActiveBtn">

        <li v-on:click='ActiveBtn=!ActiveBtn'>
          <router-link class="eng" to="/home">
            Home
          </router-link>
        </li>

        <li v-on:click='ActiveBtn=!ActiveBtn'>
          <router-link class="eng" to="/skills">
            Skills
          </router-link>
        </li>

        <li v-on:click='ActiveBtn=!ActiveBtn'>
          <router-link class="eng" to="/works">
            Works
          </router-link>
        </li>

      </div>
    </transition>

    <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__fadeIn"
      leave-active-class="animate__animated animate__fadeOut"
      mode="out-in"
    >
      <div v-show="ActiveBtn" class="back-black"></div>
    </transition>

  </div>

</template>

<script>


export default {
  name: 'HamburgerMenu',

  data() {
    return {
      ActiveBtn: false
    }
  }
}

</script>

<style lang="scss">

.hamburger-menu {
  display: none;
}

@media screen and (max-width: 1023px) {
  .hamburger-menu {
    display: block;
  }
}

/*ボタン*/
.hamburger-btn {
  position: fixed; /*常に最上部に表示したいので固定*/
  top: 0;
  right: 0;
  width: 70px;
  height: 72px;
  cursor: pointer;
  z-index: 300;
}

.hamburger-btn {
    .line {
    position: absolute;
    top: 0;
    left: 20px;
    width: 32px;
    height: 2px;
    background: #3F8EFC;
    text-align: center;
  }
}

.hamburger-btn {
  .line-01 {
    top: 16px;
    transition: 0.4s ease;
  }
  .line-02 {
    top: 26px;
    transition: 0.4s ease;
  }
  .line-03 {
    top: 36px;
    transition: 0.4s ease;
  }
}

.hamburger-btn {
  .btn-line01 {
    transform: translateY(10px) rotate(-45deg);
    transition: 0.4s ease;
    background-color: #fff;
  }
  .btn-line02 {
    transition: 0.4s ease;
    opacity: 0;
  }
  .btn-line03 {
    transform: translateY(-10px) rotate(45deg);
    transition: 0.4s ease;
    background-color: #fff;
  }
}

.menu {
  background-color: rgba(63,142,252,0.8);
  z-index: 100;
  padding: 5% 3%;
  position: fixed;
  width: 40vw;
  height: 100vh;
  top: 0;
  right: 0;
  li {
    list-style: none;
    line-height: 1;
    padding: 50px 10px;
  }
  a {
    position: relative;
    text-decoration: none;
    z-index: 200;
    color: #fff;
    position: relative;
    &::after {
      position: absolute;
      bottom: -5px;
      left: 0;
      right: 0;
      width: 0%;
      height: 5px;
      content: '';
      background: #fff;
      transition: all .5s;
    }
    &:hover::after {
      width: 110%;
    }
  }
}

.back-black {
  position: fixed;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(197, 197, 197, 0.8);
  z-index: 10;
}

</style>