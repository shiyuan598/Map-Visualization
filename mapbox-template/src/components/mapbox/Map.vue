<template>
  <div id='map'>
    <export-map :map=map></export-map>
  </div>
</template>

<script>
import mapboxgl from 'mapbox-gl'
import exportMap from '@/components/export-map/Export'
import vehicleLayer from './vehicleLayer'
import axios from 'axios'
import '@/mock/mock'

export default {
  name: 'Map',
  components: {
    exportMap
  },
  data () {
    return {
      map: null
    }
  },
  mounted () {
    this.initMap()
    this.mockTest()
  },
  methods: {
    mockTest () {
      axios.get('/api/login')
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })

      axios.get('/api/user')
        .then(res => {
          console.log(res.data)
        })
        .catch(err => {
          console.log(err)
        })
    },
    initMap () {
      let that = this
      let config = that.$baseConfig
      mapboxgl.accessToken = config.accessToken
      let center = config.center
      let map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/dark-v9',
        center: center,
        zoom: config.zoom,
        pitch: config.pitch,
        bearing: config.bearing,
        maxZoom: 21.5,
        minZoom: 8
      })
      map.addControl(new mapboxgl.NavigationControl(), 'top-left')
      map.on('click', function (event) {
        let lng = event.lngLat.lng.toFixed(6)
        let lat = event.lngLat.lat.toFixed(6)
        // log the click position
        let zoom = map.getZoom()
        console.log('lngLat: ' + lng + ', ' + lat + '. Zoom: ' + zoom.toFixed(3))
        // vehicle travel
        vehicleLayer.travelPath([lng, lat], config.accessToken)

        axios.get('/api/data', function (res) {
          console.info(res)
        })
      })
      map.on('style.load', function () {
        vehicleLayer.addVehicle(map, center)
      })
      that.map = map
    }
  }
}
</script>

<style scoped>
#map {
  height: 100vh;
  width: 100vw;
}
</style>>
