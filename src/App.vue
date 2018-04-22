<template>
  <div id="app">
    <div class="tabs">
      <ul>
        <!-- 使用 router-link 指向定義的 path -->
        <router-link :to="{name: 'Home'}">
          <!-- <div><img src="./assets/images/home.svg" alt=""></div> -->
          <div>首頁</div>
        </router-link>
        <li>
          <router-link :to="{name: 'Categories'}">
            <!-- <div><img src="./assets/images/category.svg" alt=""></div> -->
            <div>分類</div>
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'ShoppingCart'}">
            <!-- <div><img src="./assets/images/cart.svg" alt=""></div> -->
            <div>購物車</div>
          </router-link>
        </li>
        <li>
          <router-link :to="{name: 'Me'}">
            <!-- <div><img src="./assets/images/me.svg" alt=""></div> -->
            <div>我</div>
          </router-link>
        </li>
      </ul>
    </div>
    <div class="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
};
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
