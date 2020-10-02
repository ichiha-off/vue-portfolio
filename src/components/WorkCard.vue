<template>

<li class="work-card">
  <img v-bind:src="workImage" alt="work-image">
  <div class="work-content">
    <h4 class="eng">{{ title }}</h4>
    <p>{{ body }}</p>
    <a v-bind:href="workUrl" class="work-link link-btn">ここからご覧ください</a>
  </div>
</li>

</template>

<script>

export default {
  name: 'WorkCard',
  props: [
    'title',
    'body',
    'workImage',
    'workUrl',
  ]
}

</script>

<style lang="scss">

.work-card {
  display: inline-block;
  width: max(300px, 25vw);
  margin:5% 3% 10% 3%;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
  img {
    border-radius: 5px 5px 0 0;
    width: 100%;
    height: auto;
  }
}

.work-content {
  padding: 5%;
}

.work-link {
  display: inline-block;
  margin: 5% 10px 0;
}

</style>