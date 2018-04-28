<template id="nav-bar">
  <div class="">
    <div class="container-fluid">
      <div class="row">
        <ul class="fnBar">
          <li class="col-xs-6 col-sm-6 col-md-3 col-lg-3" v-on:click.stop="getUV">
            <i class="fas fa-redo-alt" aria-hidden="true"></i>更新UV資料</li>
          <li class="col-xs-6 col-sm-6 col-md-3 col-lg-3 " v-on:click.stop="write">
            <i class="far fa-save" aria-hidden="true"></i>存入</li>
          <li class="col-xs-6 col-sm-6 col-md-3 col-lg-3" v-on:click.stop="read">
            <i class="far fa-file-alt" aria-hidden="true"></i>讀取</li>
          <li class="col-xs-6 col-sm-6 col-md-3 col-lg-3" v-on:click.stop="clearUV">
            <i class="fa fa-trash" aria-hidden="true"></i>清除畫面</li>
        </ul>
      </div>
    </div>
    <router-view></router-view>
    <section>
      <div id="contant-view" class="container-fluid hidden">
        <div class="row">
          <div class="uv-contant">
            <span id="updated" class="info-text col-xs-12 col-sm-12 col-md-12 col-lg-12">{{this.updateTime}}</span>
            <!-- <input class="city-filter info-text col-xs-12 col-sm-12 col-md-12 col-lg-12" type="text" v-model.lazy="city" v-on:keyup="filterCity(city)" placeholder="過濾縣市（ＥＸ：南投市）" /> -->
            <input class="city-filter info-text col-xs-12 col-sm-12 col-md-12 col-lg-12" type="text" v-model="willGetCountyFilter" v-on:keyup="filterCounty($event.target.value)"
              placeholder="過濾縣市（ＥＸ：南投市）" />
            <div class="select-warp col-xs-12 col-sm-12 col-md-12 col-lg-12>">
              <span class="fl select-filter-text">&nbsp&nbsp&nbsp下拉過濾</span>
              <!-- <select class="fl select-filter info-select" type="text" v-model="city" v-on:Change($event.target.value)> -->
              <!-- <select id="myselectbox" class="fl select-filter" type="text" v-on:change="filterCity($event.target.value)"> -->
              <select id="myselectbox" class="fl select-filter col-xs-6 col-sm-6 col-md-6 col-lg-6" type="text" v-model="willGetCity" v-on:change="filterCity($event.target.value)">
                <option v-for="(item,index) in this.getCities" type="text" v-bind:value="item">{{item}}</option>
              </select>
            </div>
            <div>
            </div>
            <div class=" listradio-warp col-xs-12 col-sm-12 col-md-12 col-lg-12>">
              <input class="listradio typelist" type="radio" name="pagetype" checked v-on:click.stop="(setIsListMode(true))">
              <label class="listradio" for="listmode">列表模式</label>
              <input class="listradio typepage" type="radio" name="pagetype" v-on:click.stop="(setIsListMode(false))">
              <label class="listradio" for="pagemode">分頁模式</label>
            </div>
            <div class="list-nav col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <div>
                <span class="list-nav-pre" v-on:click.stop="preTablePage">上一頁</span>
                <!-- <span class="list-nav-span" v-bind:class="(index === index) ?'active':''" v-for="(box,index) in this.getTpage" v-on:click.stop="setPage(index)">{{index + 1}}</span> -->
                <span class="list-nav-span" v-bind:class="pageChange(index)" v-for="(box,index) in this.getTpage" v-on:click.stop="setPage(index)">{{index + 1}}</span>
                <span class="list-nav-next" v-on:click.stop="nextTablePage">下一頁</span>
              </div>
            </div>
            <div class="page-type-page my-table col-xs-12 col-sm-12 col-md-12 col-lg-12">
              <!-- <table class="col-xs-12 col-sm-12 col-md-12 col-lg-12">
                <tbody>
                  <tr v-for="(uv,index) in tempTable">
                    <td class="col-xs-4 col-sm-4 col-md-4 col-lg-4">{{uv.County}}</td>
                    <td class="col-xs-4 col-sm-4 col-md-4 col-lg-4">{{uv.SiteName}}</td>
                    <td class="col-xs-4 col-sm-4 col-md-4 col-lg-4">{{uv.UVI}}</td>
                  </tr>
                </tbody>
              </table> -->
              <b-table class="col-xs-12 col-sm-12 col-md-12 col-lg-12" striped @click.native="buyPageAdd" :items="tempTable" :fields="fields">
              </b-table>
            </div>
            <div class="gap col-xs-12 col-sm-12 col-md-12 col-lg-12"></div>
          </div>
        </div>
      </div>
    </section>
    <div class="ad-bar-layout">
      <div class="ad-bar-layout-close" @click="buyPageRemove">
        <i class="far fa-window-close"></i>
      </div>
      <div class="ad-bar-wrap">
        <img class="adbar-item-img" src="../../static/img/umbrella02.jpg" alt="img01">
        <div class="adbar-text-wrap">
          <p class="adbar-item-title">UV絕對防禦!</p>
          <p class="adbar-item-txt">遮陽、擋雨、抗UV、基礎防風、輕量、手開、4級防潑水。遮陽、擋雨、抗UV、防曬、超防風、防潑水功能、自動開傘手動收回機制。80 P/G傘布(防潑水、速乾、防曬銀膠)</p>
        </div>
        <button class="adbar-item-go2buy" type="button" onclick="javascript:window.open('https://sunlightsam.github.io/publicUmbrella/index.html')">
          導購</button>
      </div>
    </div>

  </div>
</template>

<script type="text/ecmascript-6">
import { mapState, mapMutations, mapGetters } from "vuex";
// import select2 from "./select2.vue";
import axios from "axios";
// import showicon from "./clearpage.vue";

export default {
  name: "navBar",
  filters: {},
  data: function() {
    return {
      fields: ["County", "SiteName", "UVI"],
      // items: [],
      sendText: ""
    };
  },
  // components: { showicon },
  // components: { showicon },
  //TODO:
  methods: {
    ...mapMutations([
      "setCity",
      "setUVjsons",
      "setUpdateTime",
      "setCountyFilter",
      "setIsRunning",
      "setIsListMode",
      "setPagesLen",
      "updataPages",
      "readSessionStorage",
      "store2oldTempTable",
      "store2TempTable",
      "mystring"
    ]),
    viewInit() {
      // console.log("viewInit......");
    },
    clearFilter() {
      this.$store.commit("setCity", "");
      this.$store.commit("setCountyFilter", "");
    },
    filterCounty(CountyName) {
      this.$store.commit("setCity", "");
      this.$store.commit("setCountyFilter", CountyName);
      this.$store.commit("store2oldTempTable", this.tempTable);
      let _temp = this.filterTempTable(CountyName);
      this.$store.commit("store2TempTable", _temp);
    },
    filterCity(cityName) {
      this.$store.commit("setCountyFilter", "");
      this.$store.commit("setCity", cityName);
      this.$store.commit("store2oldTempTable", this.tempTable);
      let _temp = this.filterTempTable(cityName);
      this.$store.commit("store2TempTable", _temp);
    },
    nextTablePage() {
      this.clearFilter();

      if (this.myTable != null) {
        let pageIndex = this.myTable.nextPage();
        this.setPage(pageIndex);
      }
    },
    preTablePage() {
      this.clearFilter();

      if (this.myTable != null) {
        let pageIndex = this.myTable.prePage();
        this.setPage(pageIndex);
      }
    },
    setPage(index) {
      this.clearFilter();

      if (this.myTable != null) {
        let _tempIndex = this.getTpageIndex;
        if (_tempIndex !== index) {
          $(".list-nav-span.active").removeClass("active");
          this.$store.commit("setTpageIndex", index);
          // this.$store.commit("updataPages");
        }
      }

      this.$store.commit("updataPages");
    },
    timeRefresh() {
      sessionStorage.uvTime = this.getRefreshTime;
    },
    pageChange(index) {
      return index === this.getTpageIndex ? "active" : "";
    },
    write() {
      if (this.uvjsons) {
        this.timeRefresh();
        sessionStorage.uvJson = JSON.stringify(this.uvjsons);

        alert("存入成功。");
      } else {
        alert("請更新UV資料後，再存入。");
      }
    },
    buyPageAdd() {
      console.log("add......");
      $(".ad-bar-layout").addClass("active");
      $(".ad-bar-layout-close").addClass("active");
    },
    buyPageRemove() {
      console.log("remove......");
      $(".ad-bar-layout").removeClass("active");
      $(".ad-bar-layout-close").removeClass("active");
    },
    read() {
      jQuery("#contant-view").addClass("hidden");
      this.$router.push("DoRead");

      // if (!sessionStorage.uvJson) {
      //   console.log("sessionStorage.uvJson null");
      //   alert("未發現儲存資料，請更新及存入，再進行讀取。");
      // } else {
      //   let _time = sessionStorage.getItem("uvTime");
      //   this.$store.commit("setUpdateTime", _time);

      //   this.$store.commit("readSessionStorage");
      //   console.log("sessionStorage.uvJson OK");
      //   this.$store.commit("setUVjsons", JSON.parse(sessionStorage.uvJson));

      //   let _County = makeCityArray(this.uvjsons, "County");
      //   this.$store.commit("setCities", _County);

      //   jQuery(".listradio.typelist").click();
      //   // this.setIsListMode(true);
      //   jQuery("#contant-view").removeClass("hidden");
      // }
    },
    getSendText() {
      this.sendText = findWord();
      jQuery(".wechat-input").val(this.sendText);
    },
    clearSession() {
      sessionStorage.removeItem("uvJson");
      sessionStorage.removeItem("uvTime");
      sessionStorage.clear();
    },
    clearUV() {
      this.$router.push("PageClear");

      this.clearSession();
      this.$store.commit("setUVjsons", null);
      this.$store.commit("setUpdateTime", "");
      this.clearFilter();
      jQuery("#contant-view").addClass("hidden");
    },
    clearScreen() {
      this.$store.commit("setUVjsons", null);
      this.$store.commit("setUpdateTime", "");
      this.clearFilter();
      jQuery("#contant-view").addClass("hidden");
    },
    getSendText() {
      this.sendText = findWord();
      jQuery(".wechat-input").val(this.sendText);
    },
    getUV() {
      this.clearScreen();

      if (this.isRunning) {
        return false;
      } else {
        console.log("getUV run......");
        this.$router.push("navBar");
        this.$store.commit("setIsRunning", true);
        this.$store.dispatch("RUN_AXIOS");
      }
    }
  },
  beforeCreate() {},
  created() {
    this.viewInit();
  },
  beforeMount() {},
  //TODO:
  computed: {
    ...mapState([
      "uvjsons",
      "uvjsonclone",
      "isRunning",
      "islistMode",
      "tempTable",
      "myTable",
      "oldTempTable",
      "updateTime"
    ]),
    // ...mapState({
    //   willGetCity : (state) => state.pages.city,
    //   uvjsons: "uvjsons",
    //   isRunning : "isRunning",
    //   islistMode: "islistMode",
    //   tempTable : "tempTable",
    //   oldTempTable : "oldTempTable",
    //   cities :"cities",
    //   city: "city",
    //   updateTime :"updateTime",
    //   countyFilter: "countyFilter"
    // }),
    //TODO:
    ...mapGetters([
      "getCountyFilter",
      "getTpage",
      "getTpageIndex",
      "getCity",
      "getCities",
      "getRefreshTime",
      "getIsListMode",
      "filterTempTable"
    ]),
    willGetCountyFilter: {
      get() {
        return this.getCountyFilter;
      },
      set() {
        // 避免錯誤訊息：was assigned to but it has no setter
        // 雙向功能自行實作於store.js的mutations，還有methods中
      }
    },
    willGetCity: {
      get() {
        return this.getCity;
      },
      set() {}
    }
  },
  watch: {
    watchIsListMode(newVal) {
      this.clearFilter();

      if (newVal === true) {
        $(".page-type-page").show();
        $(".list-nav").hide();
        this.myTable.setPageLength(-1);
        this.updataPages();
      } else {
        $(".page-type-page").show();
        $(".list-nav").show();
        this.myTable.setPageLength(10);
        this.updataPages();
      }
    }
  },
  mounted() {
    console.log("mounted......");
    // this.nextTick()
    //   .then(function() {
    //     var _self = this;
    //     var select = jQuery(this.el).select2();
    //       select.on('change', function() {
    //         console.log("this.value =>" + this.value);
    //         console.log("vm =>" + vm);
    //         _self.$emit('input', this.value);
    //       })
    //   });
  },
  beforeUpdate() {},
  updated() {},
  activated() {},
  deactivated() {},
  beforeDestroy() {},
  destroyed() {}
};
</script>