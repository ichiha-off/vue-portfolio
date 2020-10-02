<template>

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
    <router-link class="header-link" to="/works">
      <div class="link-title eng">
        Works
      </div>
      <div class="active-link"></div>
    </router-link>
  </li>
  
</ul>

</template>

<script>

export default {
  name: 'SideNav'
}

</script>

<style lang="scss">

.side-nav {
  position: fixed;
  top: 0;
  height: 100%;
  width: 20vw;
  background-color: #3F8EFC;
  ul {
    margin-top: 68px;
  }
  li {
    list-style: none;
    margin-bottom: 100px;
  }
}

.header-link {
  font-size: 20px;
  width: 50%;
  margin: 10px 30px;
  color: #fff;
  position: relative;
  display: block;
  &::after {
    position: absolute;
    margin-left: 30px;
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
    width: 50%;
  }
}

.link-title {
  height: 100%;
  margin-left: 30px;
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

</style>