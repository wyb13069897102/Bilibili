<template>
  <div class="home">
    <nav-bar></nav-bar>

    <van-tabs v-model="active" swipeable sticky>
      <van-tab
        v-for="(item, index) in category"
        :key="index"
        :title="item.title"
      >
        <van-list
          v-model="item.loading"
          :finished="item.finished"
          finished-text="我也是有底线的"
          @load="onLoad"
          :immediate-check="false"
        >
          <div class="detailparent">
            <detail
              class="detailitem"
              :detailitem="categoryitem"
              v-for="(categoryitem, categoryindex) in item.list"
              :key="categoryindex"
            />
          </div>
        </van-list>
      </van-tab>
    </van-tabs>
  </div>
</template>
<script>
import NavBar from "@/components/common/NavBar.vue";
import Detail from "@/components/cover.vue";
export default {
  data() {
    return {
      category: [],
      active: 0,
    };
  },
  components: {
    NavBar,
    Detail,
  },
  methods: {
    async selectCategory() {
      const res = await this.$http.get("/category");
      this.changeCategory(res.data);
    },
    changeCategory(data) {
      const newCategory = data.map((item, index) => {
        item.list = [];
        item.page = 0;
        item.finished = false;
        item.loading = false;
        item.pagesize = 10;
        return item;
      });
      this.category = newCategory;
      this.selectArticle();
    },
    async selectArticle() {
      const categoryItem = this.categoryItem();
      const res = await this.$http.get("/detail/" + categoryItem._id, {
        params: {
          page: categoryItem.page,
          pagesize: categoryItem.pagesize,
        },
      });
      if (res.data.length < categoryItem.pagesize) {
        categoryItem.finished = true;
      }
      categoryItem.list.push(...res.data);
      categoryItem.loading = false;
    },
    categoryItem() {
      const categoryItem = this.category[this.active];
      return categoryItem;
    },
    onLoad() {
      const categoryItem = this.categoryItem();
      setTimeout(() => {
        categoryItem.page += 1;
        this.selectArticle();
      }, 500);
    },
  },
  watch: {
    active() {
      this.selectArticle();
    },
  },
  created() {
    this.selectCategory();
    console.log(this.$route);
  },
};
</script>
<style >
.detailparent {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}
.detailitem {
  width: 45%;
  margin: 1.389vw 0;
  margin-bottom: 20px;
}
.home {
  background-color: white;
}
</style>