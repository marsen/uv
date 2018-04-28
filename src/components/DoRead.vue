<template>
  <div class="wrap-margin" id="read-view">
    <div class="bgitems wrap-margin">
      <p class="bgitems-item"><i aria-hidden="true" class="fa fa-file-alt"></i></p>
      <p class="bgitems-item">Read...</p>
    </div>
    <div class="row">
      <div class="col-xs-12 col-sm-12 col-md-12 col-lg-12 btn-padding">
        <button class="btn btn-block btn-primary btn-lg" v-on:click.stop="read">讀取 </button>
        <button class="btn btn-block btn-secondary btn-lg" v-on:click.stop="goBack">取消</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    read() {
      // this.clearUV();
      // if (sessionStorage.uvJson === String("null")) {
      if (!sessionStorage.uvJson) {
        console.log("sessionStorage.uvJson null");
        alert("未發現儲存資料，請更新及存入，再進行讀取。");
      } else {
        jQuery("#read-view").addClass("hidden");

        let _time = sessionStorage.getItem("uvTime");
        this.$store.commit("setUpdateTime", _time);

        this.$store.commit("readSessionStorage");
        console.log("sessionStorage.uvJson OK");
        this.$store.commit("setUVjsons", JSON.parse(sessionStorage.uvJson));

        let _County = makeCityArray(this.uvjsons, "County");
        this.$store.commit("setCities", _County);

        jQuery(".listradio.typelist").click();
        // this.setIsListMode(true);
        jQuery("#contant-view").removeClass("hidden");
      }
    },
    goBack() {
      this.$router.push("navbar");
    }
  }
};
</script>