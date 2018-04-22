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
      <book-list heading="新書上架" :books="latestUpdated"></book-list>
    </div>
    <div class="section">
      <!-- 編輯推薦 -->
      <book-list heading="編輯推薦" :books="recommended"></book-list>
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
      announcement: '今日上架的圖書全部8折',
      slides: [
        { id: 1, img_url: '../../static/fixtures/sliders/t1.svg' },
        { id: 2, img_url: '../../static/fixtures/sliders/t2.svg' },
      ],
      latestUpdated: [
        {
          id: 1,
          title: '揭开数据真相：从小白到数据分析达人',
          authors: [
            'Edward Zaccaro, Daniel Zaccaro',
          ],
          img_url: '../../static/fixtures/covers/1.svg',
        },
        {
          id: 2,
          title: 'Android 高级进阶',
          authors: [
            '顾浩鑫',
          ],
          img_url: '../../static/fixtures/covers/2.svg',
        },
        {
          id: 3,
          title: '淘宝天猫电商运营与数据化选品完全手册',
          authors: [
            '老夏',
          ],
          img_url: '../../static/fixtures/covers/3.svg',
        },
        {
          id: 4,
          title: '大数据架构详解：从数据获取到深度学习',
          authors: [
            '朱洁',
            '罗华霖',
          ],
          img_url: '../../static/fixtures/covers/4.svg',
        },
        {
          id: 5,
          title: 'Meteor全栈开发',
          authors: [
            '杜亦舒',
          ],
          img_url: '../../static/fixtures/covers/5.svg',
        },
        {
          id: 6,
          title: 'Kubernetes权威指南：从Docker到Kubernetes实践全接触（第2版）',
          authors: [
            '龚正',
            '吴治辉',
            '王伟',
            '崔秀龙',
            '闫健勇',
          ],
          img_url: '../../static/fixtures/covers/6.svg',
        },
      ],
      recommended: [
        {
          id: 1,
          title: '揭开数据真相：从小白到数据分析达人',
          authors: [
            'Edward Zaccaro, Daniel Zaccaro',
          ],
          img_url: '../../static/fixtures/covers/1.svg',
        },
        {
          id: 2,
          title: 'Android 高级进阶',
          authors: [
            '顾浩鑫',
          ],
          img_url: '../../static/fixtures/covers/2.svg',
        },
        {
          id: 3,
          title: '淘宝天猫电商运营与数据化选品完全手册',
          authors: [
            '老夏',
          ],
          img_url: '../../static/fixtures/covers/3.svg',
        },
        {
          id: 4,
          title: '大数据架构详解：从数据获取到深度学习',
          authors: [
            '朱洁',
            '罗华霖',
          ],
          img_url: '../../static/fixtures/covers/4.svg',
        },
        {
          id: 5,
          title: 'Meteor全栈开发',
          authors: [
            '杜亦舒',
          ],
          img_url: '../../static/fixtures/covers/5.svg',
        },
        {
          id: 6,
          title: 'Kubernetes权威指南：从Docker到Kubernetes实践全接触（第2版）',
          authors: [
            '龚正',
            '吴治辉',
            '王伟',
            '崔秀龙',
            '闫健勇',
          ],
          img_url: '../../static/fixtures/covers/6.svg',
        },
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
