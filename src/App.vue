<template>

  <div v-if="urlCheck">
    <Top/>
  </div>

  <div  v-else>

    <header class="header animate__animated animate__fadeIn">
      <div class="header-inner">
        <a href="/">
          <img class='YK-logo' src="../img/YK_logo.svg" alt="YK_logo">
        </a>
      </div>
      <HamburgerMenu/>
    </header>

    <nav class="side-nav header-links animate__animated animate__flipInX">
      <SideNav/>
    </nav>

    <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__backInRight"
      leave-active-class="animate__animated animate__backOutRight"
      mode="out-in"
      >
      <router-view class="animate__animated animate__backInRight"/>
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
  font-size: 32px;
  margin-top: 30px;
  font-weight: bold; 
}

.home-content-body, .skills-content-body {
  line-height: 2;
  margin-top: 30px;
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
  width: 100%;
  box-shadow: 0 0 1px rgba(0,0,0,0.25);
}

.header-inner {
  text-align: center;
  margin-left: 20vw;
}

.header-links {
  margin: auto;
  margin-right: 0;
  a {
    padding: 10px 10px 10px 30px;
    margin: 0 30px;
    color: #fff;
    position: relative;
    display: block;
  }
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
  }
}

</style>
