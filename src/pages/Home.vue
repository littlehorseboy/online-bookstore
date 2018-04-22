<template>
  <div>
    <div class="section">
      <div>
        <!-- 熱門推薦 -->
        <div class="swiper-container" ref="slider">
          <div class="swiper-wrapper">
            <div class="swiper-slide">
              <img src="../fixtures/sliders/t1.svg">
            </div>
            <div class="swiper-slide">
              <img src="../fixtures/sliders/t2.svg">
            </div>
          </div>
          <div class="swiper-pagination" ref="pagination"></div>
        </div>
        <!-- 快訊 -->
      </div>
    </div>
    <div class="section">
      <!-- 新書上架 -->
    </div>
    <div class="section">
      <!-- 編輯推薦 -->
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import '../../node_modules/swiper/dist/css/swiper.css';

export default {
  data() {
    return {
      slides: [
        { id: 1, img_url: '../fixtures/sliders/t1.svg' },
        { id: 1, img_url: '../fixtures/sliders/t2.svg' },
      ],
    };
  },
  mounted() {
    new Swiper(this.$refs.slider, {
      loop: true,
      pagination: {
        el: this.$refs.pagination,
        clickable: true,
      },
      autoplay: true,
    });
  },
};
</script>

<style scoped>
  .swiper-container {
    width: 100%;
    height: 100%;
  }

  .swiper-slide {
    text-align: center;
    background: #fff;
    /* Center slide text vertically */
    display: -webkit-box;
    display: -ms-flexbox;
    display: -webkit-flex;
    display: flex;
    -webkit-box-pack: center;
    -ms-flex-pack: center;
    -webkit-justify-content: center;
    justify-content: center;
    -webkit-box-align: center;
    -ms-flex-align: center;
    -webkit-align-items: center;
    align-items: center;
  }
</style>
