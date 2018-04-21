<template>
<div>
<div :id='id' :option='option' class='chart' ></div>
<button type="button" @click='recreate'>重置</button>
<button @click='adddata'>添加数据</button>
</div>
    
</template>

<script>
import Highchart from "highcharts";
export default {
  data() {
    return {
      data: this.option.series
    };
  },
  props: {
    id: {
      type: String
    },
    option: {
      type: Object
    }
  },
  methods: {
    recreate() {
      var a = new Highchart.chart(this.id, this.option);
      console.log(a)
    },
    adddata() {
      this.$emit("add");
    }
  },
  mounted() {},
  watch: {
    data: {
      handler: function(newV, oldV) {
        new Highchart.chart(this.id, this.option);
      },
      deep: true
    }
  }
};
</script>

<style scoped>
.chart {
  height: 400px;
  min-width: 400px;
}
</style>
