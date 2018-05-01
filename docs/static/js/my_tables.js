jQuery(document)
  .ready(function () {
    // console.log("rmyTables.js......");
  });

function getTime() {
  var now = new Date();
  var newTime = now.getFullYear() + "-" + now.getMonth() + "-" + now.getDate() + " " + timeFormat(now.getHours()) + ":" + timeFormat(now.getMinutes()) + ":" + timeFormat(now.getSeconds());
  return newTime;
}

function timeFormat(str) {
  if (parseInt(str) < 10 || parseInt(str) === 0) {
    return "0" + str;
  }
  return str;
}

// function findWord() { 	var word = [        "親愛的，紫外線強出門記得打傘。",
// "紫外線強，地球不能呆，快回火星呀。",        "兄弟，紫外線太強了，不打球了。",        "老師，紫外線過敏，請假一天。",
// "今日紫外線超標，白天應避免外出。"    ];
//
// 	var max = word.length - 1; 	var min = 0; 	var idx = Math.floor(Math.random()
// * (max - min + 1)) + min;
//
//	return word[idx]; }

function makeCityArray(cities, key) {
  if (cities) {
    var arr = [];
    var len = cities.length

    for (var i = 0; i < len; i++) {
      if (jQuery.inArray(cities[i][key], arr) == -1) {
        arr.push(cities[i][key]);
      }
    }

    arr.unshift("");
    return arr;
  }
}

// 排數字 sort_by('欄位名稱', false, parseInt)); 排字串 sort_by('欄位名稱', false, String));
// var sort_by = function (field, reverse, primer) {
function sort_by(field, reverse, primer) {
  reverse = (reverse) ?
    -1 :
    1;
  return function (a, b) {
    a = a[field];
    b = b[field];
    if (typeof (primer) != 'undefined') {
      a = primer(a);
      b = primer(b);
    }
    if (a < b)
      return reverse * -1;
    if (a > b)
      return reverse * 1;
    return 0;
  }
}

function make_datas() {
  console.log("make_datas......");
  return ([{
    "County": "新北市",
    "PublishAgency": "環境保護署",
    "PublishTime": "2017-10-20 10:00",
    "SiteName": "淡水",
    "UVI": "2",
    "WGS84Lat": "25,09,52.20",
    "WGS84Lon": "121,26,57.26"
  }, {
    "County": "新北市",
    "PublishAgency": "環境保護署",
    "PublishTime": "2017-10-20 10:00",
    "SiteName": "板橋",
    "UVI": "1",
    "WGS84Lat": "25,00,46.7",
    "WGS84Lon": "121,27,31.2"
  }, {
    "County": "桃園市",
    "PublishAgency": "環境保護署",
    "PublishTime": "2017-10-20 10:00",
    "SiteName": "桃園",
    "UVI": "1",
    "WGS84Lat": "24,59,41.24",
    "WGS84Lon": "121,19,11.87"
  }, {
    "County": "苗栗縣",
    "PublishAgency": "環境保護署",
    "PublishTime": "2017-10-20 10:00",
    "SiteName": "苗栗",
    "UVI": "6",
    "WGS84Lat": "24,33,54.97",
    "WGS84Lon": "120,49,12.72"
  }, {
    "County": "臺中市",
    "PublishAgency": "環境保護署",
    "PublishTime": "2017-10-20 10:00",
    "SiteName": "沙鹿",
    "UVI": "7",
    "WGS84Lat": "24,13,32.26",
    "WGS84Lon": "120,34,7.66"
  }, {
    "County": "彰化縣",
    "PublishAgency": "環境保護署",
    "PublishTime": "2017-10-20 10:00",
    "SiteName": "彰化",
    "UVI": "7",
    "WGS84Lat": "24,03,57.60",
    "WGS84Lon": "120,32,29.47"
  }, {
    "County": "南投縣",
    "PublishAgency": "環境保護署",
    "PublishTime": "2017-10-20 10:00",
    "SiteName": "南投",
    "UVI": "5",
    "WGS84Lat": "23,54,46.8",
    "WGS84Lon": "120,41,7.1"
  }, {
    "County": "雲林縣",
    "PublishAgency": "環境保護署",
    "PublishTime": "2017-10-20 10:00",
    "SiteName": "斗六",
    "UVI": "4",
    "WGS84Lat": "23,42,42.67",
    "WGS84Lon": "120,32,41.98"
  }, {
    "County": "嘉義縣",
    "PublishAgency": "環境保護署",
    "PublishTime": "2017-10-20 10:00",
    "SiteName": "阿里山",
    "UVI": "4",
    "WGS84Lat": "23,30,30.82",
    "WGS84Lon": "120,48,05.02"
  }, {
    "County": "嘉義縣",
    "PublishAgency": "環境保護署",
    "PublishTime": "2017-10-20 10:00",
    "SiteName": "塔塔加",
    "UVI": "8",
    "WGS84Lat": "23,28,14.19",
    "WGS84Lon": "120,52,50.06"
  }, {
    "County": "嘉義縣",
    "PublishAgency": "環境保護署",
    "PublishTime": "2017-10-20 10:00",
    "SiteName": "朴子",
    "UVI": "5",
    "WGS84Lat": "23,27,55.11",
    "WGS84Lon": "120,14,50.46"
  }, {
    "County": "臺南市",
    "PublishAgency": "環境保護署",
    "PublishTime": "2017-10-20 10:00",
    "SiteName": "新營",
    "UVI": "5",
    "WGS84Lat": "23,18,20.28",
    "WGS84Lon": "120,19,2.10"
  }, {
    "County": "高雄市",
    "PublishAgency": "環境保護署",
    "PublishTime": "2017-10-20 10:00",
    "SiteName": "橋頭",
    "UVI": "5",
    "WGS84Lat": "22,45,27.02",
    "WGS84Lon": "120,18,20.48"
  }, {
    "County": "屏東縣",
    "PublishAgency": "環境保護署",
    "PublishTime": "2017-10-20 10:00",
    "SiteName": "屏東",
    "UVI": "4",
    "WGS84Lat": "22,40,23.09",
    "WGS84Lon": "120,29,16.92"
  }, {
    "County": "嘉義市",
    "PublishAgency": "中央氣象局",
    "PublishTime": "2017-10-20 10:00",
    "SiteName": "嘉義",
    "UVI": "4.48",
    "WGS84Lat": "23,29,45",
    "WGS84Lon": "120,25,58"
  }, {
    "County": "臺中市",
    "PublishAgency": "中央氣象局",
    "PublishTime": "2017-10-20 10:00",
    "SiteName": "臺中",
    "UVI": "4.24",
    "WGS84Lat": "24,08,45",
    "WGS84Lon": "120,41,03"
  }, {
    "County": "澎湖縣",
    "PublishAgency": "中央氣象局",
    "PublishTime": "2017-10-20 10:00",
    "SiteName": "澎湖",
    "UVI": "2.02",
    "WGS84Lat": "23,33,56",
    "WGS84Lon": "119,33,47"
  }, {
    "County": "宜蘭縣",
    "PublishAgency": "中央氣象局",
    "PublishTime": "2017-10-20 10:00",
    "SiteName": "宜蘭",
    "UVI": "0.88",
    "WGS84Lat": "24,45,50",
    "WGS84Lon": "121,45,24"
  }, {
    "County": "金門縣",
    "PublishAgency": "中央氣象局",
    "PublishTime": "2017-10-20 10:00",
    "SiteName": "金門",
    "UVI": "3.21",
    "WGS84Lat": "24,24,26",
    "WGS84Lon": "118,17,21"
  }, {
    "County": "南投縣",
    "PublishAgency": "中央氣象局",
    "PublishTime": "2017-10-20 10:00",
    "SiteName": "日月潭",
    "UVI": "3.98",
    "WGS84Lat": "23,52,53",
    "WGS84Lon": "120,54,29"
  }, {
    "County": "臺東縣",
    "PublishAgency": "中央氣象局",
    "PublishTime": "2017-10-20 10:00",
    "SiteName": "臺東",
    "UVI": "5.56",
    "WGS84Lat": "22,45,08",
    "WGS84Lon": "121,09,17"
  }, {
    "County": "臺東縣",
    "PublishAgency": "中央氣象局",
    "PublishTime": "2017-10-20 10:00",
    "SiteName": "蘭嶼",
    "UVI": "2.65",
    "WGS84Lat": "22,02,13",
    "WGS84Lon": "121,33,30"
  }, {
    "County": "桃園市",
    "PublishAgency": "中央氣象局",
    "PublishTime": "2017-10-20 10:00",
    "SiteName": "新屋",
    "UVI": "0.55",
    "WGS84Lat": "25,00,24",
    "WGS84Lon": "121,02,51"
  }, {
    "County": "基隆市",
    "PublishAgency": "中央氣象局",
    "PublishTime": "2017-10-20 10:00",
    "SiteName": "基隆",
    "UVI": "1.38",
    "WGS84Lat": "25,07,60",
    "WGS84Lon": "121,44,26"
  }, {
    "County": "臺東縣",
    "PublishAgency": "中央氣象局",
    "PublishTime": "2017-10-20 10:00",
    "SiteName": "成功",
    "UVI": "5.87",
    "WGS84Lat": "23,05,51",
    "WGS84Lon": "121,22,24"
  }, {
    "County": "臺北市",
    "PublishAgency": "中央氣象局",
    "PublishTime": "2017-10-20 10:00",
    "SiteName": "臺北",
    "UVI": "1.41",
    "WGS84Lat": "25,02,16",
    "WGS84Lon": "121,30,53"
  }, {
    "County": "屏東縣",
    "PublishAgency": "中央氣象局",
    "PublishTime": "2017-10-20 10:00",
    "SiteName": "恆春",
    "UVI": "6.10",
    "WGS84Lat": "22,00,14",
    "WGS84Lon": "120,44,47"
  }, {
    "County": "臺北市",
    "PublishAgency": "中央氣象局",
    "PublishTime": "2017-10-20 10:00",
    "SiteName": "鞍部",
    "UVI": "1.52",
    "WGS84Lat": "25,10,57",
    "WGS84Lon": "121,31,47"
  }, {
    "County": "新竹縣",
    "PublishAgency": "中央氣象局",
    "PublishTime": "2017-10-20 10:00",
    "SiteName": "新竹",
    "UVI": "2.77",
    "WGS84Lat": "24,49,40",
    "WGS84Lon": "121,00,51"
  }, {
    "County": "臺南市",
    "PublishAgency": "中央氣象局",
    "PublishTime": "2017-10-20 10:00",
    "SiteName": "臺南",
    "UVI": "4.74",
    "WGS84Lat": "22,59,36",
    "WGS84Lon": "120,12,17"
  }, {
    "County": "南投縣",
    "PublishAgency": "中央氣象局",
    "PublishTime": "2017-10-20 10:00",
    "SiteName": "玉山",
    "UVI": "7.67",
    "WGS84Lat": "23,29,15",
    "WGS84Lon": "120,57,34"
  }, {
    "County": "高雄市",
    "PublishAgency": "中央氣象局",
    "PublishTime": "2017-10-20 10:00",
    "SiteName": "高雄",
    "UVI": "3.39",
    "WGS84Lat": "22,33,58",
    "WGS84Lon": "120,18,57"
  }, {
    "County": "連江縣",
    "PublishAgency": "中央氣象局",
    "PublishTime": "2017-10-20 10:00",
    "SiteName": "馬祖",
    "UVI": "3.92",
    "WGS84Lat": "26,10,09",
    "WGS84Lon": "119,55,24"
  }, {
    "County": "花蓮縣",
    "PublishAgency": "中央氣象局",
    "PublishTime": "2017-10-20 10:00",
    "SiteName": "花蓮",
    "UVI": "5.73",
    "WGS84Lat": "23,58,30",
    "WGS84Lon": "121,36,48"
  }]);
}