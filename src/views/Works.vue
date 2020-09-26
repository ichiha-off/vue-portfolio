<template>
  <main class="works-main">
    <h1 class="works-headline eng"><font-awesome-icon icon="briefcase"/> Works</h1>
    <ul class="work-area">
      <li class="work-card">
        <img src="../../img/Daddy-s-break.png" alt="Daddy-s-break-image">
        <div class="work-content">
          <h4 class="eng">Daddy's break</h4>
          <p>ログイン式の掲示板です。フォローや通知機能などSNS風な機能をつけています。</p>
          <a href="http://18.177.170.11/" class="work-link link-btn">ここからご覧ください</a>
        </div>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  name: 'Works'
}
</script>

<style lang="scss">

  .work-area {
    list-style-type: none;
    text-align: center;
    padding: 0;
  }

  .work-card {
    display: inline-block;
    width: max(200px, 30vw);
    margin:5% 5% 10% 5%;
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