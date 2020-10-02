<template>

<main class="works-main">
  <h1 class="works-headline eng"><font-awesome-icon icon="briefcase"/> Works</h1>
  <ul class="work-area">
    <WorkCard
    v-for = 'work in works'
    v-bind:key="work.id"
    v-bind:title="work.title"
    v-bind:body="work.body"
    v-bind:work-image="work.image"
    v-bind:work-url="work.url"/>
  </ul>
</main>

</template>

<script>
import WorkCard from '../components/WorkCard'

export default {
  name: 'Works',
  components: {
    WorkCard,
  },
  data() {
    return {
      works: [
        {
          id: 1, 
          title: 'Daddy\'s break', 
          body: 'ログイン式の掲示板です。フォローや通知機能などSNS風な機能をつけています。', 
          image: require('../../img/Daddy-s-break.png'), 
          url: 'http://18.177.170.11/'
        },
      ]
    }
  }
}
</script>

<style lang="scss">

  .work-area {
    list-style-type: none;
    text-align: center;
    padding: 0;
  }

</style>