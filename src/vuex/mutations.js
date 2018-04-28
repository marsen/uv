export default {
  setRefreshTime(state) {
    console.log("mutations setRefreshTime ......");
    let _newTime = "更新時間：" + getTime();
    state.updateTime = _newTime;
  },
  setUpdateTime(state, str) {
    console.log("mutations setUpdateTime ......");
    state.updateTime = str;
  },
  setUVjsons(state, obj) {
    state.uvjsons = obj;
  },
  setCountyFilter(state, str) {
    state.pages.countyFilter = str;
  },
  setCities(state, arr) {
    state.pages.cities = arr;
  },
  setCity(state, str) {
    state.pages.city = str;
  },
  setIsRunning(state, boolean) {
    state.isRunning = boolean;
    return state.isRunning;
  },
  setIsListMode(state, boolean) {
    state.pages.islistMode = boolean;
    state.pages.city = '';

    if (boolean) {
      state.myTable.setPageLength(-1);
      jQuery('.list-nav').hide();
    } else {
      state.myTable.setPageLength(10);
      jQuery('.list-nav').show();
    }
    state.pages.tPage = state.myTable.getTotalPage();
    state.tempTable = state.myTable.tableUpdata();

    return state.pages.islistMode;
  },
  setTpageIndex(state, index) {
    state.pages.tPageIndex = index;
    state.myTable.setCurrentPage(index);
  },
  setPagesLen(state, index) {
    state.pages.tPageLen = state.myTable.setPageLength(index);
  },
  updataPages(state) {
    state.pages.tPage = state.myTable.getTotalPage();
    state.tempTable = state.myTable.tableUpdata();
  },
  readSessionStorage(state) {
    state.uvjsons = JSON.parse(sessionStorage.uvJson);
  },
  store2TempTable(state, arr) {
    state.tempTable = Object.assign([], arr);
  },
  store2oldTempTable(state, arr) {
    state.oldTempTable = Object.assign([], arr);
  },
  SAVE_AXIOS_RESPONSE: function (state, response) {
    state.uvjsons = response.data;
  }
};