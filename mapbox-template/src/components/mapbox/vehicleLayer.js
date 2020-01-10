import * as THREE from 'three'
import { Threebox } from 'threebox-map'
import constConfig from '@/common/constConfig'

export default {
  line: null,
  vehicle: null,
  threebox: null,
  origin: null,
  addVehicle (map, origin) {
    let that = this
    that.origin = origin
    let tb = null
    window.THREE = THREE
    map && map.addLayer({
      id: constConfig.layers.VEHICLE,
      type: 'custom',
      renderingMode: '3d',
      onAdd: function (map, mbxContext) {
        tb = new Threebox(
          map,
          mbxContext,
          { defaultLights: true }
        )
        that.threebox = tb
        let options = {
          obj: './static/models/Truck.obj',
          mtl: './static/models/Truck.mtl',
          scale: 0.1
        }
        tb.loadObj(options, function (model) {
          let truck = model.setCoords(origin)
          // truck.scale.set(0.05, 0.05, 0.05)
          truck.scale.set(0.5, 0.5, 0.5)
          tb.add(truck)
          that.vehicle = truck
        })
      },
      render: function (gl, matrix) {
        tb.update()
      }
    })
  },
  travelPath (destination, token) {
    let that = this
    let url = 'https://api.mapbox.com/directions/v5/mapbox/driving/' + [that.origin, destination].join(';') + '?geometries=geojson&access_token=' + token
    that.fetchFunction(url, function (data) {
      let options = {
        path: data.routes[0].geometry.coordinates,
        duration: 10000
      }

      that.threebox.remove(that.line)
      let lineGeometry = options.path.map(function (coordinate) {
        return coordinate.concat([15])
      })
      that.line = that.threebox.line({
        geometry: lineGeometry,
        width: 5,
        color: '#f40'
      })
      that.threebox.add(that.line)
      that.vehicle && that.vehicle.followPath(options, function () {
        that.threebox.remove(that.line)
      })
      that.origin = destination
    })
  },
  fetchFunction (url, callback) {
    fetch(url).then(function (response) {
      if (response.status === 200) {
        response.json().then(function (data) {
          callback(data)
        })
      }
    })
  }
}
