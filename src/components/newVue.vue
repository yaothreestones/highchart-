<template>
<div>
  <div>{{$store.state.count}}</div>
  <div @click="$store.commit('add')">+</div>
  <div @click="$store.commit('reduce')">-</div>  
</div>
  
</template>

<script>
import { mapState } from 'vuex'
import store from "@/components/store";
export default {
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  },
  store,
  computed: mapState({
    count:state =>state.count
  }),
  created () {
    localStorage.setItem("id",2)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
