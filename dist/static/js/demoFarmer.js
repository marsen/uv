$(document).ready(function () {

	var app1 = new Vue({
		// 注意是EL
		el: "#app",
		data() {
			return {
				name: "hello word",
				vegetables: {},
				isTopMask: false,
				isCertOpen: false,
				isDebug: false,
				aaa: 0,
				buySum: 0,
				totalSum: 0,
				isUpdate: false,
				myBox: {},
				myScroll: {},
				scroll_X: 0,
				scroll_Y: 0,
			}
		},
		created() {
			this.viewInit();
			this.$nextTick(function () {
				if (!this.myScroll) {
					this.initScroll();
				} else {
					setTimeout(function () {
						this.myScroll.refresh();
					}, 10);
				}
			});
		},
		watch: {
			// vegetables發生改變，這個函數就會執行
			isUpdate: function () {
				if (this.isUpdate) {
					console.log("watch");
					this.buySum = this.totalBuy();
					this.totalSum = this.getTotalSum();
					this.isUpdate = false;
				}
			}
		},
		mounted: function () {
			// doSomeThing();
		},
		ready() {},
		methods: {
			jump: function () {
				alert("單頁Demo，無其他連結");
				console.log("methods jump");
			},
			viewInit: function () {

				this.isDebug = false;
				this.buySum = 0;
				this.totalSum = 0;
				this.isTopMask = false;
				this.isCertOpen = false;
				this.isMenuOpen = false;
				this.myScroll = null;
				this.myBox = null;
				this.testVer = null;
				this.scroll_X = 0;
				this.scroll_Y = 0;

				if (typeof (this.vegetables) === "undefined" || this.vegetables === null) {
					this.vegetables = makeVegetables();
				}

				this.vegetables = makeVegetables();
				this.buySum = this.totalBuy();
				this.totalSum = this.getTotalSum();

				this.debugMode();
			},
			add: function (vegetable) {
				if (vegetable.buy < vegetable.max) {
					vegetable.buy++;
					this.isUpdate = true;
				}
			},
			decrease: function (vegetable) {
				if (vegetable.buy > 0) {
					vegetable.buy--;
					this.isUpdate = true;
				}
			},
			addMask: function () {
				console.log("addMask");

				this.isTopMask = true;
				this.isCertOpen = true;
				this.isMenuOpen = false;
			},
			removeMask: function () {
				console.log("removeMask");

				this.isTopMask = false;
				this.isCertOpen = false;
				this.isMenuOpen = false;

				this.clearEditMode();
			},
			addMenu: function () {
				console.log("addMenu");

				this.isTopMask = true;
				this.isCertOpen = false;
				this.isMenuOpen = true;

				if (this.isDebug) {
					console.log("isTopMask :" + this.isTopMask + " / " + "isMenuOpen :" + this.isMenuOpen);
				}
			},
			removeMenu: function () {
				console.log("removeMenu");

				this.isTopMask = false;
				this.isMenuOpen = false;

				this.clearEditMode();
			},
			cleanItemBuy: function (vegetable) {
				console.log("cleanItemBuy");

				vegetable.buy = 0;
				vegetable.isEdit = false;
				this.isUpdate = true;
			},
			editMode: function (vegetable, boolean) {
				console.log("editMode");

				if (typeof (vegetable) !== "undefined" || typeof (vegetable) !== null) {
					vegetable.isEdit = boolean;
				}
			},
			clearEditMode: function () {
				console.log("clearEditMode");

				var len = this.vegetables.length;

				for (var i = 0; i < len; i++) {
					this.vegetables[i].isEdit = false;
				}
			},
			showItemInfo: function (vegetableObj) {
				if (this.isDebug) {
					console.log("vegetableObj.item = " + vegetableObj.item + " / " + "vegetableObj.sn = " + vegetableObj.sn);
				}
			},
			debugMode: function () {
				if (this.isDebug) {
					console.log("isTopMask :" + this.isTopMask + " / " + "isCertOpen :" + this.isCertOpen + " / " + "isMenuOpen :" + this.isMenuOpen + " / " + "totalSum :" + this.totalSum);
					console.log(this.vegetables);
				}
			},
			initScroll: function () {
				navEventListener();
			},

			debugAppScroll: function () {

			},
			selectMenu: function (index, event) {
				if (!event._constructed) {
					//如果不存在這個屬性，不執行下面的函數
					return;
				}
			},
			totalBuy: function () {
				console.log("totalBuy");

				var len = this.vegetables.length
				var buy = 0;

				for (var i = 0; i < len; i++) {
					buy = buy + this.vegetables[i].buy;
				}
				return buy;
			},
			getTotalSum: function () {
				console.log("getTotalSum");

				var len = this.vegetables.length
				var sum = 0;

				for (var i = 0; i < len; i++) {
					if (this.isDebug) {
						console.log(this.vegetables[i].buy);
					}
					if (this.vegetables[i].buy > 0) {
						sum = sum + (this.vegetables[i].buy * this.vegetables[i].price);
					}
				}
				if (this.isDebug) {
					if (this.isDebug) {
						console.log("totalSum =" + sum);
					}
				}
				return sum;
			}
		}
	});

	//	var app2 = new Vue({
	//		// 注意是EL
	//		el: "#app2",
	//		data: {},
	//		methods: {}
	//	});
});


function clickListItem() {

	$(".nav2 .list-item").click(function () {
		console.log("click");
		$(".nav2 .list-item.active").removeClass("active");
		$(this).addClass("active")
		return false;
	});
}

function navEventListener() {
	//	var _offset = document.getElementById("mynav");
	var elementInfo = {};
	elementInfo.myClientHeight = 0;
	elementInfo.myActualTop = 0;
	elementInfo.actualTopMax = 0;
	elementInfo.myScrollTop = 0;
	elementInfo.myOffset = 0;
	elementInfo.parentOffsetTop = 0;
	elementInfo.lastScroll = 0;
	elementInfo.isDivTop = false;
	elementInfo.isScrollUp = false;

	var _Fn = function () {

		var _div = document.getElementById("my-nav");
		getElementViewTop(_div, elementInfo);

		//		if (elementInfo.myActualTop > 0 && elementInfo.actualTopMax == 0) {
		//			elementInfo.actualTopMax = elementInfo.myActualTop;
		//		}

		// 物件已貼合視窗上邊緣，附加fixed
		if (elementInfo.myScrollTop >= elementInfo.parentOffsetTop) {
			_div.classList.add("fixed-div");
			elementInfo.isDivTop = true;
		}

		// 貼和視窗成立
		if (elementInfo.isDivTop) {

			// 向下捲動，即將離開fixed物件的時候，移除fixed
			if (elementInfo.myScrollTop < elementInfo.parentOffsetTop) {
				_div.classList.remove("fixed-div");
				elementInfo.isDivTop = false;
			}
		}
	}

	var _delayFn = debounce(_Fn, 50);

	window.addEventListener('scroll', _delayFn);

}
// 獲取滾輪滾動的距離，適合所有的瀏覽器
function getScrollY() {
	return window.pageYOffset || document.documentElement.scrollTop;
}

function getElementViewTop(element, objInfo) {

	// _clientHeight物件高度
	objInfo.myClientHeight = element.clientHeight;

	// element的parent距離視窗上邊界的距離
	objInfo.parentOffsetTop = element.parentNode.offsetTop;

	// elementScrollTop當無法捲動=0,當捲動到底=最大的正數
	objInfo.myScrollTop = document.documentElement.scrollTop || document.body.scrollTop || 0;

	objInfo.myOffset = (objInfo.myActualTop - objInfo.myScrollTop);

	// 往上捲動 or 往下捲動
	if (objInfo.myScrollTop > objInfo.lastScroll) {
		objInfo.isScrollUp = true;
	} else {
		objInfo.isScrollUp = false;
	}
	objInfo.lastScroll = objInfo.myScrollTop;

	if (this.isDebug) {
		console.log("actualTop = " + objInfo.myActualTop + " / " + "scrollTop = " + objInfo.myScrollTop + " / " + "offset = " + objInfo.myOffset + " / " + "clientHeight = " + objInfo.myClientHeight + " / " + "isScrollUp = " + objInfo.isScrollUp);

		console.log("objInfo.parentOffsetTop = " + objInfo.parentOffsetTop);
	}

}

function makeVegetables() {
	var _vegetables = [
		{
			place: "旺來御菜園有機農場",
			item: "空心菜",
			sn: 103,
			type: "有機蔬菜",
			pathName: "../img/",
			fileName: "17.jpg",
			buyimg: "eat01.jpg",
			price: 40,
			buy: 3,
			max: 5,
			isEdit: false,
			weight: "",
			origin: "雲林縣西螺鎮",
			features: "有機無毒耕作",
			age: 4,
			description: "“ 無藥生菜種植 化不可能為可能 ”"
        }, {
			place: "小農有機農場",
			item: "牛番茄",
			sn: 205,
			type: "優質水果",
			pathName: "../img/",
			fileName: "18.jpg",
			buyimg: "eat02.jpg",
			price: 130,
			buy: 0,
			max: 9,
			isEdit: false,
			weight: "520克",
			origin: "新竹新埔鎮",
			features: "有機無毒耕作",
			age: 17,
			description: "“ 無藥生菜種植 化不可能為可能 ”"
        }, {
			place: "天廚有機農場",
			item: "黒美人紅肉西瓜",
			sn: 307,
			type: "優質水果",
			pathName: "../img/",
			fileName: "24.jpg",
			buyimg: "eat03.jpg",
			price: 320,
			buy: 1,
			max: 3,
			isEdit: false,
			weight: "2585克",
			origin: "雲林縣西螺鎮",
			features: "有機無毒耕作",
			age: 4,
			description: "“ 不讓耕作的土地，遭受化學肥料或農藥的影響 ”"
        }, {
			place: "小廚師有機農場",
			item: "地瓜葉",
			sn: 517,
			type: "根莖",
			pathName: "../img/",
			fileName: "25.jpg",
			buyimg: "eat04.jpg",
			price: 90,
			buy: 3,
			max: 8,
			isEdit: false,
			weight: "800克",
			origin: "雲林縣斗六市",
			features: "有機無毒耕作",
			age: 5,
			description: "“ 無機，更愛這片土地 ”"
        }
    ];
	return _vegetables;
};


//	Vue.directive('flexslider-min', function () {
//		$('flexslider').flexslider({    
//				animation: "slide",
//				controlNav: "thumbnails"  
//			});
//	})
