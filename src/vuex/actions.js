import axios from "axios";
require("promise.prototype.finally").shim();

export default {
  ACTIONS_UPDATA_PAGES: function ({
    commit,
    getters
  }, pages) {
    commit('setPagesLen', pages.tPageLen);
    commit('updataPages');
  },
  RUN_AXIOS: function ({
    commit,
    state,
    getters
  }, payload) {
    let self = this;
    axios.defaults.timeout = 5000;

    axios.interceptors.request.use(
      function (config) {
        // console.log("before axios run...");
        jQuery(".uv-table").empty();
        jQuery(".load-container").css("display", "block");

        return config;
      },
      function (error) {
        return Promise.reject(error);
      }
    );

    let _tiemstamp = Date.parse(new Date());

    axios({
        methods: "get",
        url: "http://opendata2.epa.gov.tw/UV/UV.json?$format=json" + "?" + _tiemstamp
      })
      .then(function (response) {
        // alert("axios成功，線上資料");
        console.log("axios成功，線上資料......");

        // console.log("axios data => " + response.data);
        // console.log("axios status => " + response.status);
        // console.log("axios status.text => " + response.text);
        // console.log("axios headers => " + response.headers);
        // console.log("axios config => " + response.config);


        commit("SAVE_AXIOS_RESPONSE", response);

        let _json = response.data;
        _json.sort(sort_by("County", false, String));

        state.myTable = new MakePage(_json, -1);

        commit('setPagesLen', -1);
        commit('updataPages');
        commit("setIsListMode", true);

        // state.uvjsonclone = JSON.parse(JSON.stringify(_json));
        state.uvjsons = _json;

        let _arr = makeCityArray(_json, "County");
        commit('setCities', _arr);

        jQuery(".load-container").css("display", "none");
        jQuery("#contant-view").removeClass("hidden");
      })
      .catch(function (error) {
        if (error.response) {
          // 有錯誤訊息的錯誤
          console.log("有錯誤訊息的錯誤 A known => " + error);
          console.log(error.response.data);
          console.log(error.response.status);
          console.log(error.response.headers);
        } else {
          // 發生未知的錯誤
          console.log("發生未知的錯誤 unknow error =>" + error);
        }
        console.log(error.config);
        console.log("axios 讀取假資料");
        // alert("Error，讀取假資料");
        state.uvjsons = make_datas();
        state.myTable = new MakePage(state.uvjsons, -1);

        let _arr = makeCityArray(state.uvjsons, "County");
        commit('setCities', _arr);

        // jQuery('.load-container').css('display', 'none');
        // jQuery('#contant-view').removeClass('hidden');
      })
      .then(function () {
        // jQuery('.load-container').css('display', 'none');
        // commit('setIsRunning', false);
        // self.$store.commit('setIsRunning', false);
        // self.$forceUpdate();
        // self.tempArr = self.uvjsons.slice(0);
      })
      .finally(function (state) {
        console.log("finally......");
        commit('setRefreshTime');
        
        jQuery(".load-container").css("display", "none");
        jQuery("#contant-view").removeClass("hidden");
        commit("setIsRunning", false);
      });
  }
};