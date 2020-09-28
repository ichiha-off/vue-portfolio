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
    </header>
    <nav class="side-nav header-links animate__animated animate__flipInX">
      <ul>
        <li>
          <router-link class="header-link" to="/home">
            <div class="link-title eng">
              Home
            </div>
            <div class="active-link"></div>
          </router-link>
        </li>
        <li>
          <router-link class="header-link" to="/skills">
            <div class="link-title eng">
              Skills
            </div>
            <div class="active-link"></div>
          </router-link>
        </li>
        <li>
          <router-link class="header-link" to="/Works">
            <div class="link-title eng">
              Works
            </div>
            <div class="active-link"></div>
          </router-link>
        </li>
      </ul>
    </nav>

    <transition
      name="custom-classes-transition"
      enter-active-class="animate__animated animate__fadeInRight"
      leave-active-class="animate__animated animate__fadeOut"
      mode="out-in"
      >
      <router-view class="animate__animated animate__fadeInRight"/>
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

export default {
  name: 'App',
  components: {
    Top
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

.side-nav {
  position: fixed;
  top: 0;
  height: 100%;
  width: 20vw;
  background-color: #3F8EFC;
  li {
    list-style: none;
    margin: 50px 0;
  }
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

.router-link-exact-active {
  .active-link {
    background-color: #fff;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 0;
    animation: 1s fadeIn;
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

</style>
