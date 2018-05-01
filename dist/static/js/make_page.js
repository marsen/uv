// console.log("make_page.js run...");

// var table = [10,20,30,40,50,70,80,90];
// var table = ["A0","A1","A2","A3","A4","B5","B6","B7","B8","B9","C10","C11","C12","C13","C14","D15","D16","D17","D18","D19","E20","E21","E22","E23","E24","F25","F26","F27","F28","F29","G30","G31","G32"];
// var table = [
//   "A0",
//   "A1",
//   "A2",
//   "A3",
//   "A4",
//   "B5",
//   "B6",
//   "B7",
//   "B8",
//   "B9",
//   "C10",
//   "C11",
//   "C12",
//   "C13",
//   "C14",
//   "D15",
//   "D16",
//   "D17",
//   "D18",
//   "D19",
//   "E20",
//   "E21",
//   "E22",
//   "E23",
//   "E24",
//   "F25",
//   "F26",
//   "F27",
//   "F28",
//   "F29"
// ];
// var mypage = new MakePage(table, 10);
// mypage.setCurrentPage(0);
// mypage.destroy();
// mypage.nextPage();
// mypage.nextPage();
// mypage.nextPage();
// mypage.nextPage();
// mypage.nextPage();
// mypage.tableUpdata();
// mypage.prePage();
// mypage.prePage();
// mypage.prePage();
// mypage.prePage();
// mypage.prePage();
// mypage.prePage();
// mypage.prePage();
// mypage.tableUpdata();

// function mySelectChange() {
// console.log("mySelectChange run...");

// var myselect2 = $("#myselectbox").select2();
// console.log($(this).val());

// myselect2.on("change", function(e) {
//   console.log("change = ", $("#myselectbox").val());
// });
// }

function MakePage(table, pageLength) {
  var self = this;
  var isDebug = false;
  this._table = JSON.parse(JSON.stringify(table));
  this._currentPage = 0;
  this._pageLength = pageLength !== (-1) ? pageLength : this._table.length;
  this._tableLength = this._table.length;
  this._totalPage = 0;
  this._startNum = 0;
  this._endlNum = this._currentPage * this._pageLength;

  this.getTotalPage = function () {

    if (self._pageLength === -1) {
      self._totalPage = 1;
      return self._totalPage;
    }

    if (
      self._tableLength / self._pageLength >
      parseInt(self._tableLength / self._pageLength)
    ) {
      self._totalPage = parseInt(self._tableLength / self._pageLength) + 1;
    } else {
      self._totalPage = parseInt(self._tableLength / self._pageLength);
    }
    // console.log("totalPage = " + self._totalPage);
    return self._totalPage;
  };

  this.setCurrentPage = function (index) {
    if (index < 0) {
      self._currentPage = 0;
    } else if (index > self._totalPage) {
      self._currentPage = self._totalPage;
    } else {
      self._currentPage = index;
    }
    // console.log("CurrentPage = " + self._currentPage);
    self.tableUpdata();
    return self._currentPage;
  };

  this.setPageLength = function (index) {
    // console.log("setPageLength index = " + index);
    self._pageLength = index !== (-1) ? index : self._tableLength;
    return self._pageLength;
  };

  this.prePage = function () {
    if (self._currentPage > 0) {
      self._currentPage = self._currentPage - 1;
      return self._currentPage;
    }
    return self._currentPage;
  };

  this.nextPage = function () {
    if (self._currentPage < self._totalPage - 1) {
      self._currentPage = self._currentPage + 1;
      return self._currentPage;
    }
    return self._currentPage;
  };

  this.tableUpdata = function () {
    // 陣列從0開始
    var start = getStartNum();
    var end = getEndNum();
    var tempArr = [];

    for (var i = start; i < end; i++) {
      tempArr.push(self._table[i]);
    }
    // console.log(" start = " + start);
    // console.log(" end  = " + end);
    return tempArr;
  };

  this.destroy = function () {
    isDebug = false;
    this._currentPage = null;
    this._pageLength = null;
    this._tableLength = null;
    this._totalPage = null;
    this._startNum = null;
    this._endlNum = null;

    for (var i = 0; i < this._table.length; i++) {
      this._table[i] = null;
    }
    console.log("destroy ......");
  };

  if (!table) {
    return false;
  }
  this._totalPage = this.getTotalPage();

  function getTableLength() {
    if (isDebug) {
      console.log("TableLength = " + _tableLength);
    }
    return _tableLength;
  }

  function getCurrentPage() {
    // console.log("CurrentPage = " + _currentPage);
    return _currentPage;
  }

  function getStartNum() {
    self._startNum = self._currentPage * self._pageLength;

    if (self._totalPage === 1 || self._pageLength === -1) {
      self._startNum = 0;
    }
    if (isDebug) {
      console.log("StartNum = " + self._startNum);
    }
    return self._startNum;
  }

  function getEndNum() {
    self._endlNum = (self._currentPage + 1) * self._pageLength;
    if (self._endlNum > self._tableLength || self._pageLength === -1) {
      self._endlNum = self._tableLength;
    }
    if (isDebug) {
      console.log("EndNum = " + self._endlNum);
    }
    return self._endlNum;
  }
}