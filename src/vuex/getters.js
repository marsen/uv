
export default {
  getRefreshTime: function (state) {
    return state.updateTime;
  },
  getIsListMode: function (state) {
    return state.pages.islistMode;
  },
  getCountyFilter: state => {
    return state.pages.countyFilter;
  },
  getCities: function (state) {
    return state.pages.cities;
  },
  getCity: function (state) {
    return state.pages.city;
  },
  getTpage: function (state) {
    return state.pages.tPage;
  },
  getTpageIndex: function (state) {
    return state.pages.tPageIndex;
  },
  filterTempTable: function (state, pages) {
    return function (str) {
      let _arr = [];
      let _filterString = state.pages.city !== '' ? state.pages.city : state.pages.countyFilter;
      _arr = state.uvjsons.filter(function (el) {
        if (el.County.indexOf(_filterString) !== -1) {
          // console.log("el.County = " + el.County + " >>> "+ str);
          // return el.County === _filterString;
          return el.County;
        }
      });
      return _arr;
    };
  }
};