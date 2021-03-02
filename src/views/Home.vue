<template>

<main class="home-main">
  <h1 class="home-headline eng">Yuki Kanayama's first Vue.js</h1>
  <div class="space">>>></div>

  <div class="home-content">
    <div class="home-content-title eng">1. What about this site?</div>
    <p class="home-jp">このサイトは？</p>
    <div class="home-content-body">
      自己学習で Vue.js を用いてWebページの作成を実施しました。
      <br>見やすく整ったページにできるようがんばりたいです。
    </div>
  </div>
  <div class="space">>>></div>

  <div class="home-content">
    <div class="home-content-title eng">2. Who am i?</div>
    <p class="home-jp">わたしは誰？</p>
    <div class="home-content-body">
      高校卒業後、大学進学を検討していたが家庭の事情で断念。
      そのまま就職し、ケータイショップ店員として働くが、結婚と妻の妊娠で転職を決意。
      <br>大阪の商社に転職し、そこで複合機とその周辺機器の修理保守の部署に配属。
      そこでお客様にプログラミングの楽しさを教えていただき、自己学習を行っていく中でよりプログラミングのおもしろさに引かれて、プログラミングスクールに入学し転職する道へ。
    </div>
  </div>
  <div class="space">>>></div>

  <div class="home-content">
    <div class="home-content-title eng">3. From now on?</div>
    <p class="home-jp">今後どうしたい？</p>
    <div class="home-content-body">
      UIのデザインは楽しいです。ただデザインが美しくてもコードが汚いとそれは美しくないと考えます。
      <br>私は、まだまだ未熟でそんなことを言える立場でもないですが、デザインとコーディングはセットで考えるべきだなと自己学習を進めていく上で思いました。
      今後、デザインとコーディングの両方ができるようなエンジニア（プログラマー）になりたいです。
    </div>
  </div>
  <div class="space">>>></div>

</main>

</template>

<script>
export default {
  nama: 'Home',
}
</script>

<style lang="scss" scoped>

.home-jp {
  font-size: 24px;
}

// .home-headline-anime {
//   font-size: 32px;
//   position: relative;
//   color: transparent;
//   mix-blend-mode: multiply;
//   animation: gMotion 1s linear infinite alternate both;
//   &::before {
//     color: transparent;
//     mix-blend-mode: multiply;
//     content: attr(data-text);
//     left: 0;
//     position: absolute;
//     top: 0;
//     animation: r 1s linear infinite alternate both;
//   }
//   &::after {
//     color: transparent;
//     mix-blend-mode: multiply;
//     content: attr(data-text);
//     left: 0;
//     position: absolute;
//     top: 0;
//     animation: b 1s linear infinite alternate both;
//   }
// }

// @keyframes r {
//   0% {
//     text-shadow: 3px 1px 1px #f00;
//   }
//   10% {
//       text-shadow: -6px 1px 1px #f00;
//   }
//   20% {
//       text-shadow: 4px 0px 0px #f00;
//   }
//   30% {
//       text-shadow: -4px 1px 1px #f00;
//   }
//   40% {
//       text-shadow: 0px 0px 1px #f00;
//   }
//   50% {
//       text-shadow: 6px 1px 0px #f00;
//   }
//   60% {
//       text-shadow: 2px -1px 1px #f00;
//   }
//   70% {
//       text-shadow: -3px 0px 1px #f00;
//   }
//   80% {
//       text-shadow: 1px -1px 1px #f00;
//   }
//   90% {
//       text-shadow: -4px 1px 0px #f00;
//   }
//   100% {
//       text-shadow: -1px 1px 0px #f00;
//   }
// }

// @keyframes gMotion {
//   0% {
//     text-shadow: -3px 0px 0px #0f0;
//   }
//   10% {
//       text-shadow: -4px -1px 1px #0f0;
//   }
//   20% {
//       text-shadow: -4px 1px 0px #0f0;
//   }
//   30% {
//       text-shadow: 4px -1px 1px #0f0;
//   }
//   40% {
//       text-shadow: 4px 1px 0px #0f0;
//   }
//   50% {
//       text-shadow: -2px -1px 0px #0f0;
//   }
//   60% {
//       text-shadow: -8px -1px 1px #0f0;
//   }
//   70% {
//       text-shadow: 7px -1px 1px #0f0;
//   }
//   80% {
//       text-shadow: 5px -1px 1px #0f0;
//   }
//   90% {
//       text-shadow: 8px 1px 1px #0f0;
//   }
//   100% {
//       text-shadow: -2px 1px 0px #0f0;
//   }
// }

// @keyframes b {
//   0% {
//     text-shadow: 1px 0px 0px #00f;
//   }
//   10% {
//       text-shadow: -3px 1px 1px #00f;
//   }
//   20% {
//       text-shadow: 1px -1px 1px #00f;
//   }
//   30% {
//       text-shadow: 8px 1px 1px #00f;
//   }
//   40% {
//       text-shadow: 2px 1px 0px #00f;
//   }
//   50% {
//       text-shadow: 5px -1px 0px #00f;
//   }
//   60% {
//       text-shadow: -1px 0px 0px #00f;
//   }
//   70% {
//       text-shadow: -3px 1px 0px #00f;
//   }
//   80% {
//       text-shadow: 2px 0px 1px #00f;
//   }
//   90% {
//       text-shadow: -6px 0px 1px #00f;
//   }
//   100% {
//       text-shadow: 5px 1px 0px #00f;
//   }
// }

.home-headline {
  display: inline-block;
}

</style>
