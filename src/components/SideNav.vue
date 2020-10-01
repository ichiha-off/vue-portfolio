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
  li {
    list-style: none;
    margin: 50px 0;
  }
}

.link-title {
  width: 100%;
  height: 100%;
  &:hover {
  animation: pulse 1s;
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

</style>