<template>
  <div class="book-list">
    <div class="header">
      <div class="heading">{{ heading }}</div>
      <div class="more">更多...</div>
    </div>
    <div class="book-items">
      <div v-for="(book, index) in books" :key="index"
        @click="$emit('onBookSelect', book)" class="book">
        <div class="cover">
          <img :src="book.img_url">
          </div>
        <div class="title">{{ book.title }}</div>
        <div class="authors">{{ book.authors | join }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Booklist',
  props: {
    heading: String,
    books: Array,
  },
  filters: {
    join(args) {
      return args.join(',');
    },
  },
};
</script>

<style lang="less" scoped>
  .book-list {
    margin: 0 14px;
    & > .header {
      display: table;
      width: 100%;
      border-bottom: 1px solid #efefef;

      & > .heading {
        display: table-cell;
        padding: 12px;
      }

      & > .more {
        display: table-cell;
        text-align: right;
        vertical-align: middle;
        font-size: 10px;
        color: #cccccc;
        padding-right: 14px;
      }
    }

    & .book-items {
      display: table;
      width: 100%;
      padding-top: 12px;
    }

    & .book {
      font-size: 10px;
      text-align: center;
      float: left;
      width: 33%;
      margin: 12px auto;
      & .cover {
      }

      & .title, & .authors {
        margin: 5px auto;
        width: 100px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
      }

      & .authors {
        color: #898989;
        margin-top: 10px;
        text-align: left;
      }
    }
  }
</style>
