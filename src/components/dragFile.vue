<template>
    <div>
        <div :id='id' @drop='dropFile($event)' @dragover='dragover($event)' class='drag'>
            将图片拖拽到此处
        </div>
        <img :src="Src" alt="">
    </div>
</template>

<script>
export default {
  data() {
    return {
      Src: "",
      imgStorage: []
    };
  },
  props: {
    id: {
      type: String
    }
  },
  methods: {
    dragover(e) {
      e.preventDefault();
    },
    dropFile(ev) {
      ev.preventDefault();
      let reader = new FileReader();
      reader.readAsDataURL(ev.dataTransfer.files[0]);
      reader.onload = e => {
        console.log(this);
        this.imgStorage.push(reader.result);
        console.log(this.imgStorage.length);
        this.Src = reader.result;
      };
      console.log(ev.dataTransfer.files[0]);
    }
  }
};
</script>

<style scoped>
.drag {
  width: 50px;
  height: 50px;
  border: 1px dashed;
}
</style>
