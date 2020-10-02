<template>

<main class="skills-main">

  <h1 class="skills-headline eng"><font-awesome-icon icon="code"/> Learning Skills</h1>

  <div class="skills-items">
    <SkillsItems
      v-for = 'SkillsItem in SkillsItems'
      v-bind:key="SkillsItem.id"
      v-bind:lang-name="SkillsItem.langName"
      v-bind:lang-logo="SkillsItem.langLogo"
    />
  </div>

  <div class="space">>>></div>

  <SkillsContent
    v-for = 'SkillsContent in SkillsContents'
    v-bind:key='SkillsContent.id'
    v-bind:skills-content-title="SkillsContent.title"
    v-bind:skills-content-body="SkillsContent.body"
  />

</main>

</template>

<script>

import SkillsItems from '../components/SkillsItems'
import SkillsContent from '../components/SkillsContent'

export default {
  name: 'Skills',
  components: {
    SkillsItems,
    SkillsContent
  },
  data() {
    return {
      SkillsItems: [
        {
          id: 1,
          langName: 'Ruby',
          langLogo: require('../../img/ruby_logo.svg'),
        },
        {
          id: 2,
          langName: 'Rails',
          langLogo: require('../../img/rails_logo.svg')
        },
        {
          id: 3,
          langName: 'HTML',
          langLogo: require('../../img/html_logo.svg')
        },
        {
          id: 4,
          langName: 'CSS',
          langLogo: require('../../img/css_logo.svg')
        },
        {
          id: 5,
          langName: 'Javascript',
          langLogo: require('../../img/js_logo.svg')
        },
        {
          id: 6,
          langName: 'Vue',
          langLogo: require('../../img/vue_logo.svg')
        }
      ],
      SkillsContents: [
        {
          id: 1,
          title: '1. Ruby on Rails',
          body: '入学したスクールでは、Ruby on Rails を中心に学習を行いました。まずは指定されたサイトをコーディングし、Ruby on Rails の理解を深めてからチーム開発に移行し、GitHubを駆使してECサイトの開発を行いました。チームのメンバーとを密接にコミュニケーションと取りながら協力して開発するという経験が、実際の現場で働く前に経験できたのことがよかったです。'
        },
        {
          id: 2,
          title: '2. HTML/CSS',
          body: '自己学習期間はHTML/CSSを学習していました。おそらく、プログラミングを初めてやってみる人はまずここから通ることが多いかなと思うのですが、私もここからはじめて<br><b class="hello-world">"Hello Wolrd!"</b>の文字を表示させるところから始めました。'
        },
        {
          id: 3,
          title: '3. Javascript & Vue.js',
          body: '自己学習期間も少し学習していましたが、より深く学習し始めたのはスクールの課題が全て終了した後からでした。そして、Javascriptのフレームワークを利用して、Webページを作りたいと思い、React系かVue系のフレームワークとどちらで始めるか悩んだ結果、比較的始めやすいという理由でVueを選択しました。海外だとReact系のフレームワークが人気ということなので、そちらも学習したいです。<br>中途半端にReact系を始めると器用貧乏になる恐れがあるので、ある程度Vue.jsを極めたいです。<br>プログラミングの学習をしている友人Aが、いろいろできるより1個特化したものがあるほうがいい言っていたのでそうできるようにしたいです。'
        }
      ]
    }
  }
}

</script>

<style lang="scss">

.skills-headline {
  font-size: clamp(24px, 2vw, 32px);
}

.hello-world {
  display: block;
  margin: 30px 0;
  font-size: clamp(16px, 2vw, 24px);
  color: red;
}

</style>
