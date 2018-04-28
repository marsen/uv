<template id="mytab">
  <div>
      <div class="row">
        <ul class="fnBar">
          <router-link to="/">
            <li class="col-xs-3 col-sm-3 col-md-3 col-lg-3" v-on:click.stop="getUV">
            <i class="fa fa-repeat" aria-hidden="true"></i>Hi</li>
            </router-link>
          <router-link to="Hi1">
            <li class="col-xs-3 col-sm-3 col-md-3 col-lg-3" v-on:click.stop="write">
            <i class="fa fa-floppy-o" aria-hidden="true"></i>Hi1</li>
            </router-link>
          <router-link :to="{ name:'Hi2'}">
            <li class="col-xs-3 col-sm-3 col-md-3 col-lg-3" v-on:click.stop="read">
            <i class="fa fa-file-text" aria-hidden="true"></i>Hi2
            </li>
          </router-link>
          <router-link :to="{ name:'Hi3'}">
            <li class="col-xs-3 col-sm-3 col-md-3 col-lg-3" v-on:click.stop="clearUV">
            <i class="fa fa-trash" aria-hidden="true"></i>
            Hi3</li>
            </router-link>
        </ul>
      </div>
      <div>
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {};
</script>