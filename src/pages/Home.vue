<template>
  <div>
    <div class="section">
      <div>
        <!-- 熱門推薦 -->
        <div class="swiper-container" ref="slider">
          <div class="swiper-wrapper">
            <div v-for="(slide, index) in slides" :key="index" class="swiper-slide">
              <router-link :to="{ name: 'BookDetail', params: { id: slide.id } }">
                <img :src="slide.img_url">
              </router-link>
            </div>
          </div>
          <div class="swiper-pagination" ref="pagination"></div>
        </div>

        <!-- 快訊 -->
        <div class="announcement">
          <label>快訊</label>
          <span>{{ announcement }}</span>
        </div>
      </div>
    </div>
    <div class="section">
      <!-- 新書上架 -->
      <book-list heading="新書上架" :books="latestUpdated"
        @onBookSelect="preview($event)"></book-list>
    </div>
    <div class="section">
      <!-- 編輯推薦 -->
      <book-list heading="編輯推薦" :books="recommended"
        @onBookSelect="preview($event)"></book-list>
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper';
import '../../node_modules/swiper/dist/css/swiper.css';
import BookList from '../components/BookList';

export default {
  components: {
    BookList,
  },
  data() {
    return {
      announcement: '',
      slides: [],
      latestUpdated: [],
      recommended: [],
    };
  },
  methods: {
    preview() {
      alert('顯示圖書詳情');
    },
  },
  created() {
    const self = this;
    this.$http.get('../../static/fixtures/home/home.json').then((res) => {
      // self.announcement = res.data.announcement;
      // self.slides = res.data.slides;
      // self.latestUpdated = res.data.latestUpdated;
      // self.recommended = res.data.recommended;
      Object.keys(res.data).forEach((keys) => {
        self[keys] = res.data[keys];
      });
    }, (error) => {
      console.log(`取得資料失敗: ${error}`);
    });
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

<style lang="less" scoped>
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

  .announcement {
    font-size: 12px;
    padding:5px;
    background:#fff;
  }
  .announcement > label {
    padding: 3px 10px;
    margin: 3px 10px;
    background: #FACCB7;
    border-radius: 3px;
    color: #FF5102;
  }
  .announcement > span {
    padding: 3px 10px;
    color: #333;
    display:inline-block;
  }
</style>
