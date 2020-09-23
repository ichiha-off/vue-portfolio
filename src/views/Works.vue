<template>
  <div class="works">
    <main class="works-main">
      <h1 class="works-headline"><font-awesome-icon icon="briefcase"/> Works</h1>
      <section class="works-section">
        <ul class="work-area">
          <h2 class="work-title">Daddy's break</h2>
          <li class="work-card">
            <img src="../../img/Daddy-s-break.png" alt="Daddy-s-break-image">
            <div class="work-content">
              <p>ログイン式の掲示板です。フォローや通知機能などSNS風な機能をつけています。</p>
              <a href="http://18.177.170.11/" class="work-link link-btn">ここからご覧ください</a>
            </div>
          </li>
          <h2 class="work-title">Daddy's break</h2>
          <li class="work-card">
            <img src="../../img/Daddy-s-break.png" alt="Daddy-s-break-image">
            <div class="work-content">
              <p>ログイン式の掲示板です。フォローや通知機能などSNS風な機能をつけています。</p>
              <a href="http://18.177.170.11/" class="work-link link-btn">ここからご覧ください</a>
            </div>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script>
export default {
  name: 'Works'
}
</script>

<style lang="scss">

  .works-section {
    text-align: left;
  }

  .work-title {
    display: inline-block;
    border-bottom: solid 3px #3F8EFC;
    border-left: solid 3px #D1F5FF;
    padding: 0px 10px 5px;
  }

  .work-area {
    list-style-type: none;
    text-align: center;
    padding-left: 15%;
    padding-right: 15%;
  }

  .work-card {
    display: inline-block;
    width: 100%;
    margin-bottom: 20%;
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