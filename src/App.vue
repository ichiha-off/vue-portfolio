<template>
  <div>
    <header class="header">
      <div class="header-inner">
        <a id="logo" href="/">
          <span>title</span>
        </a>
        <div class="header-links">
          <router-link class="header-link" to="/">Home</router-link>
          <router-link class="header-link" to="/skills">Skills</router-link>
          <router-link class="header-link" to="/Works">Works</router-link>
        </div>
      </div>
    </header>
    <transition mode='out-in'>
      <router-view/>
    </transition>
  </div>
</template>

<script>
import 'normalize.css'

export default {
  
}
</script>

<style lang="scss">

a {
  color: #3F8EFC;
  text-decoration: none;
}

// 各Viewsの共通CSS
.skills-main, .works-main, .home-main {
  text-align: center;
  padding: 0 10%;
}

.skills-headline, .works-headline, .home-headline {
  border-bottom: solid 3px #3F8EFC;
  margin-top: 50px;
  padding-bottom: 30px;
}

.link-btn {
  max-width: 50%;
  padding: 10px;
  border-radius: 25px;
  background: #3F8EFC;
  font-size: min(2vw, 20px);
  color: #fff;
  text-align: center;
  margin: 30px auto 50px;
  box-shadow: 3px 3px 5px #ccc;
}

// ページ偏移アニメーション
.v-enter {
  transform: translate(-100px, 0);
  opacity: 0;
}
.v-enter-to {
  opacity: 1;
}
.v-enter-active {
  transition: all 1s 0s ease;
}
.v-leave {
  transform: translate(0, 0);
  opacity: 1;
}
.v-leave-to {
  transform: translate(100px, 0);
  opacity: 0;
}
.v-leave-active {
  transition: all .5s 0s ease;
}

#logo {
  display: inline-block;
  font-size: 1.5em;
  line-height: 60px;
  font-weight: 500;
}

.header {
  position: sticky;
  z-index: 1;
  background-color: #fff;
  top: 0;
  width: 100%;
  box-shadow: 0 0 1px rgba(0,0,0,0.25);
}

.header-inner {
  display: flex;
  margin: 0 5%;
}

.header-links {
  margin: auto;
  margin-right: 0;
  display: inline-block;
  a {
    padding: 10px;
    margin: 0 10px;
    border-radius: 50px;
  }
}

.router-link-exact-active {
  background-color: #3F8EFC;
  color: #fff;
}
</style>
