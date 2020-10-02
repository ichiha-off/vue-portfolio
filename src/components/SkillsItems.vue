<template>

<div class="skills-item">
  <img v-bind:src="langLogo" alt="lang-logo">
  <h3 class="eng">{{ langName }}</h3>
</div>

</template>

<script>

export default {
  name: 'SkillsItems',
  props: [
    'langName',
    'langLogo',
  ]
}

</script>

<style lang="scss">

.skills-item {
  display: inline-block;
  margin: 50px 10% 50px 0;
  img {
    width: min(15vw, 70px);
    height: min(15vh, 70px);
  }
  h3 {
    text-align: center;
    font-size: clamp(16px, 2vw, 24px);
  }
}

</style>
