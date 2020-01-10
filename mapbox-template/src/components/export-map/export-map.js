import 'canvas-toBlob'
import FileSaver from 'file-saver'
import mapboxgl from 'mapbox-gl'
import icons from './icons'

function setStyles (element, styles) {
  for (const style in styles) {
    element.style[style] = styles[style]
  }
}

function loading () {
  const container = document.createElement('div')
  document.body.appendChild(container)

  setStyles(container, {
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    zIndex: 9999
  })

  const icon = document.createElement('div')
  icon.innerHTML = icons.loading

  setStyles(icon, {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: 9999,
    margin: 'auto',
    width: '120px',
    height: '120px'
  })

  container.appendChild(icon)

  return container
}

export default function (map, name) {
  const actualPixelRatio = window.devicePixelRatio
  Object.defineProperty(window, 'devicePixelRatio', {
    get: () => 300 / 96
  })

  const _loading = loading()

  const _container = document.createElement('div')
  document.body.appendChild(_container)

  const width = map.getContainer().offsetWidth
  const height = map.getContainer().offsetHeight
  // const bottomRight = map.unproject([width, height]).toArray()

  setStyles(_container, {
    visibility: 'hidden',
    position: 'absolute',
    top: 0,
    bottom: 0,
    width: `${width}px`,
    height: `${height}px`
  })

  let fontFamily = []
  if (map.style.glyphManager && map.style.glyphManager.localIdeographFontFamily) {
    fontFamily = map.style.glyphManager.localIdeographFontFamily
  }

  let MBGL = mapboxgl.Map
  const _map = new MBGL({
    container: _container,
    center: map.getCenter(),
    zoom: map.getZoom(),
    bearing: map.getBearing(),
    pitch: map.getPitch(),
    style: map.getStyle(),
    localIdeographFontFamily: fontFamily,
    hash: false,
    preserveDrawingBuffer: true,
    interactive: false,
    attributionControl: false
  })

  _map.once('load', () => {
    _map.getCanvas().toBlob((blob) => {
      FileSaver.saveAs(blob, name + '.png')
      _map.remove()
      _container.parentNode.removeChild(_container)
      _loading.parentNode.removeChild(_loading)
      Object.defineProperty(window, 'devicePixelRatio', {
        get: () => actualPixelRatio
      })
    })
  })
}
