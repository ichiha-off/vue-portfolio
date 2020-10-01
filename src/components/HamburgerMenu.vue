<template>

  <div class="hamburger-menu">
    <!--ハンバーガーメニューのボタン-->
    <div class="hamburger-btn" v-on:click='ActiveBtn=!ActiveBtn'>
      <span class="line line-01" v-bind:class="{'btn-line01':ActiveBtn}"></span>
      <span class="line line-02" v-bind:class="{'btn-line02':ActiveBtn}"></span>
      <span class="line line-03" v-bind:class="{'btn-line03':ActiveBtn}"></span>
    </div>

    <!--サイドバー-->
    <transition name="menu">
      <div class="menu" v-show="ActiveBtn">

        <li>
          <router-link v-on:click='ActiveBtn=!ActiveBtn' class="eng" to="/home">
            Home
          </router-link>
        </li>

        <li>
          <router-link class="eng" to="/skills">
            Skills
          </router-link>
        </li>

        <li>
          <router-link v-on:click='ActiveBtn=!ActiveBtn' class="eng" to="/works">
            Works
          </router-link>
        </li>

      </div>
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
  z-index: 50;
}

.hamburger-btn {
    .line {
    position: absolute;
    top: 0;
    left: 20px;
    width: 32px;
    height: 2px;
    background: #333333;
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

.btn-line01 {
  transform: translateY(10px) rotate(-45deg);
  transition: 0.4s ease;
}

.btn-line02 {
  transition: 0.4s ease;
  opacity: 0;
}

.btn-line03 {
  transform: translateY(-10px) rotate(45deg);
  transition: 0.4s ease;
}

/*サイドバー*/
.menu-enter-active, .menu-leave-active {
  transition: opacity 0.4s;
}

.menu-enter, .menu-leave-to {
  opacity: 0;
}

.menu-leave, .menu-enter-to{
  opacity: 1;
}

.menu {
  li {
    list-style: none;
    line-height: 1;
    padding: 50px 10px;
    z-index: 150;
    position: relative;
  }
}

.menu {
  background-color: rgba(197, 197, 197, 0.8);
  z-index: 100;
  padding: 5% 3%;
  position: fixed;
  width: 40vw;
  height: 100vh;
  top: 0;
  right: 0;
}

.menu {
  a {
    position: relative;
    color: rgb(66, 66, 66);
    text-decoration: none;
    z-index: 200;
  }
}

</style>