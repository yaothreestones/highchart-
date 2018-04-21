<template>
<div>
  <chart :id='id' :option='option' @add="adddata"></chart>
  <file-drag :id='id1'></file-drag>
</div>
  
</template>

<script>
import chart from "@/components/highchart";
import { mapState } from "vuex";
import store from "@/components/store";
import option from "@/components/option";
import axios from "axios";
import fileDrag from "@/components/dragFile";
export default {
  data() {
    return {
      id: "text",
      option: option,
      id1: "a"
    };
  },
  mounted() {
    this.adddata();
  },
  methods: {
    adddata() {
      axios.get("http://localhost:8080/static/data.json").then(res => {
        console.log(res);
        this.$set(this.option.series[0], "data", res.data);
      });
    }
  },
  components: {
    chart,
    fileDrag
  },
  store,
  computed: {
    ...mapState({
      count: state => state.count
    })
  },
  created() {
    localStorage.setItem("id", 1);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
