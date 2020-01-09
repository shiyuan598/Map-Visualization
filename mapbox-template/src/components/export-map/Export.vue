<template>
  <div class="export-map" @click="handleClick">
    <img src="./images/export.png"
         alt="">
  </div>
</template>
<script>
import exportMap from './export-map'
export default {
  name: 'Export',
  props: {
    map: {
      required: true
    }
  },
  data () {
    return {

    }
  },
  methods: {
    handleClick () {
      exportMap(this.map, 'map')
    }
  }

}
</script>
<style scoped>
.export-map {
  height: 30px;
  width: 30px;
  position: absolute;
  right: 10px;
  top: 10px;
  z-index: 2;
  background-color: #fff;
  border: 2px solid #d3d3d3;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.export-map img {
  height: 24px;
  width: 24px;
}
</style>
