<template>
  <div class="my-table col-xs-12 col-sm-12 col-md-12 col-lg-12">
    <tr v-for="(uv,index) in uvjsons">
      <td class="my-table-td col-xs-4 col-sm-4 col-md-4 col-lg-4">{{uv.County}}</td>
      <td class="col-xs-4 col-sm-4 col-md-4 col-lg-4">{{uv.SiteName}}</td>
      <td class="col-xs-4 col-sm-4 col-md-4 col-lg-4">{{uv.UVI}}</td>
    </tr>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: 'myTable'
}
</script>
