<template>

<div class="app-views" v-if="urlCheck">
  <Top/>
</div>

<div class="app-views" v-else>

  <header class="header animate__animated animate__fadeIn">
    <div class="header-inner">
      <a href="/">
        <img class='YK-logo' src="../img/YK_logo.svg" alt="YK_logo">
      </a>
    </div>
  </header>

  <HamburgerMenu/>

  <nav class="side-nav header-links animate__animated animate__flipInX">
    <SideNav/>
  </nav>

  <transition
    appear
    name="custom-classes-transition"
    enter-active-class="animate__animated animate__backInRight"
    leave-active-class="animate__animated animate__backOutRight"
    mode="out-in"
    >
    <router-view/>
  </transition>

  <footer class="footer">
    <div class="footer-inner">
      <div class="eng">created by Yuki Kanayama</div>
    </div>
  </footer>

</div>

</template>

<script>

import 'normalize.css'
import Top from './views/Top'
import HamburgerMenu from './components/HamburgerMenu'
import SideNav from './components/SideNav'

export default {
  name: 'App',
  components: {
    Top,
    HamburgerMenu,
    SideNav,
  },
  computed: {
    urlCheck() {
      return location.pathname.match(/^\/$/);
    }
  },
};

</script>

<style lang="scss">

// 各Viewsの共通CSS
a {
  color: #3F8EFC;
  text-decoration: none;
}

body {
  font-family: 'Noto Serif JP', serif;
}

.eng {
  font-family: 'Josefin Sans', sans-serif;
}

.app-views {
  overflow: hidden;
}

.skills-main, .works-main, .home-main {
  text-align: left;
  padding: 0 10%;
  margin-left: 20vw;
}

.skills-headline, .works-headline, .home-headline {
  margin-top: 50px;
  padding-bottom: 30px;
}

.link-btn {
  max-width: 50%;
  padding: 10px;
  border-radius: 25px;
  background: #3F8EFC;
  font-size: min(2vw, 16px);
  color: #fff;
  text-align: center;
  margin: 30px auto 50px;
  box-shadow: 3px 3px 5px #ccc;
}

.home-content-title, .skills-content-title {
  margin-top: 30px;
  font-weight: bold; 
  font-size: clamp(24px, 2vw, 32px);
}

.home-content-body, .skills-content-body {
  line-height: 2;
  margin-top: 30px;
  font-size: clamp(12px, 2vw, 16px);
}

.space {
  margin: 100px 0;
}

.YK-logo {
  height: 60px;
}

.header {
  background-color: #fff;
  top: 0;
  width: 100vw;
  box-shadow: 0 0 1px rgba(0,0,0,0.25);
}

.header-inner {
  text-align: center;
  margin-left: 20vw;
}

.header-links {
  margin: auto;
  margin-right: 0;
}

.footer {
  height: 100px;
  margin-top: 100px;
}

.footer-inner {
  margin-left: 20vw;
  padding: 0 10%;
}

@media screen and (max-width: 1023px) {

  .side-nav {
    display: none;
  }

  .skills-main, .works-main, .home-main, .footer-inner, .header-inner {
    margin: 0;
  }

  .skills-main, .works-main, .home-main {
    margin-top: 100px;
  }

  .header {
    position: fixed;
    z-index: 1;
  }
}

</style>
