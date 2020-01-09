// 为了StandardMap和FineMap的过渡，有如下设置：
// 1.背景有两个 zoom 3-17,  'background-color': '#9addff', zoom 16-17时透明度渐变为0
//  zoom 16-17,  'background-color': '#333', zoom 16-17时透明度渐变为1
// 2.StandardMap的bg_country_boundary_polygon、
// bg_characteristic_area_polygon、
// bg_park_polygon、
// bg_golf_course_polygon、
// bg_lake_polygon、
// bg_building_polygon
// 图层的透明度在zoom 16-17时透明度渐变为0，（注意一些是从0.7 or 0.8渐变到0）
var zoomMin = 15.4
var zoomMax = 16.5
export default {
  getStyle (rootUrl, token, solu) {
    return {
      'layers': [{
        'layout': {
          'visibility': 'visible'
        },
        'paint': {
          'background-color': '#333',
          'background-opacity': [
            'interpolate', ['linear'],
            ['zoom'],
            zoomMin, 0,
            zoomMax, 1
          ]
        },
        'source': '',
        'source-layer': '',
        'minzoom': zoomMin,
        'id': '96dfdef6e9da4af4b506',
        'type': 'background'
      }, {
        'layout': {
          'visibility': 'visible'
        },
        'paint': {
          'background-color': '#9addff',
          'background-opacity': [
            'interpolate', ['linear'],
            ['zoom'],
            zoomMin, 1,
            zoomMax, 0
          ]
        },
        'source': '',
        'source-layer': '',
        'id': '96dfdef6e9da4af4b506b24165fedb7d',
        'type': 'background',
        'maxzoom': zoomMax,
        'minzoom': 3.0
      }, {
        'id': 'bg_park_polygon_2',
        'type': 'fill',
        'source': 'sg_ni_park',
        'source-layer': 'sg_ni_park',
        'maxzoom': 22.0,
        'minZoom': zoomMax,
        'layout': {
          'visibility': 'visible'
        },
        'paint': {
          'fill-opacity': [
            'interpolate', ['linear'],
            ['zoom'],
            zoomMax, 0.2,
            zoomMax + 1, 0.5
          ],
          'fill-outline-color': '#d2e7bf',
          'fill-color': '#d2e7bf'
        }
      }, {
        'id': 'bg_lake_polygon_2',
        'type': 'fill',
        'source': 'sg_ni_water',
        'source-layer': 'sg_ni_water',
        'maxzoom': 22.0,
        'minZoom': zoomMax,
        'layout': {
          'visibility': 'visible'
        },
        'paint': {
          'fill-opacity': [
            'interpolate', ['linear'],
            ['zoom'],
            zoomMax, 0.2,
            zoomMax + 1, 0.8
          ],
          'fill-antialias': true,
          'fill-color': '#9addff',
          'fill-outline-color': '#9addff',
          'fill-translate-anchor': 'viewport'
        }
      }, {
        'id': 'sg_ni_object_warning_area_line',
        'type': 'line',
        'source': 'sg_ni_object_warning_area_line',
        'source-layer': 'sg_ni_object_warning_area_line',
        'maxzoom': 22.0,
        'minzoom': zoomMin,
        'paint': {
          'line-opacity': 0.8,
          'line-color': '#FFD200',
          'line-width': 3
        }
      }, {
        'id': 'sg_ni_stop_line',
        'type': 'line',
        'source': 'sg_ni_stop_line',
        'source-layer': 'sg_ni_stop_line',
        'maxzoom': 22.0,
        'minzoom': zoomMin,
        'paint': {
          'line-opacity': 0.8,
          'line-color': '#ffffff',
          'line-width': 3
        }
      }, {
        'id': 'sg_ni_object_arrow',
        'type': 'fill',
        'source': 'sg_ni_object_arrow',
        'source-layer': 'sg_ni_object_arrow',
        'maxzoom': 22.0,
        'minzoom': zoomMin,
        'paint': {
          'fill-opacity': 0.8,
          'fill-color': ['case',
            ['==', ['get', 'color'], '2'], '#FFD200',
            ['==', ['get', 'color'], '1'], '#fff',
            '#fff'
          ]
        }
      }, {
        'id': 'sg_ni_object_bump_area',
        'type': 'fill',
        'source': 'sg_ni_object_bump_area',
        'source-layer': 'sg_ni_object_bump_area',
        'maxzoom': 22.0,
        'minzoom': zoomMin,
        'paint': {
          'fill-outline-color': '#dcdcdc',
          'fill-color': ['case',
            ['==', ['get', 'color'], '3'], '#FF0000',
            ['==', ['get', 'color'], '2'], '#FFD200',
            ['==', ['get', 'color'], '1'], '#fff',
            '#fff'
          ],
          'fill-opacity': 0.8,
          'fill-antialias': true
        }
      }, {
        'id': 'sg_ni_lane_link',
        'type': 'line',
        'source': 'sg_ni_lane_link',
        'source-layer': 'sg_ni_lane_link',
        'layout': {
          'visibility': 'visible'
        },
        'maxzoom': 22.0,
        'minzoom': zoomMin,
        'paint': {
          'line-opacity': 0.1,
          'line-color': '#fff',
          'line-width': 1
        }
      }, {
        'id': 'sg_ni_mark_link_1_2_3_4_7_8',
        'type': 'line',
        'source': 'sg_ni_mark_link',
        'source-layer': 'sg_ni_mark_link',
        'layout': {
          'visibility': 'visible'
        },
        'maxzoom': 22.0,
        'minzoom': zoomMin,
        'paint': {
          'line-opacity': ['case',
            ['==', ['get', 'line_type'], '28'], 0.1,
            0.8
          ],
          'line-color': ['case',
            ['==', ['get', 'color'], '3'], '#FF0000',
            ['==', ['get', 'color'], '2'], '#FFD200',
            ['==', ['get', 'color'], '1'], '#fff',
            '#fff'
          ],
          'line-width': ['case',
            ['==', ['get', 'width'], '200'], 2,
            ['==', ['get', 'width'], '100'], 1,
            2
          ],
          'line-dasharray': [20, 5]
        },
        'filter': ['match',
          ['get', 'line_type'],
          ['1', '2', '3', '4', '7', '8', '10', '11', '14'], true,
          ['5', '9'], false,
          false
        ]
      }, {
        'id': 'sg_ni_mark_link_5_9',
        'type': 'line',
        'source': 'sg_ni_mark_link',
        'source-layer': 'sg_ni_mark_link',
        'maxzoom': 22.0,
        'minzoom': zoomMin,
        'paint': {
          'line-opacity': ['case',
            ['==', ['get', 'line_type'], '28'], 0.1,
            0.8
          ],
          'line-color': ['case',
            ['==', ['get', 'color'], '3'], '#FF0000',
            ['==', ['get', 'color'], '2'], '#FFD200',
            ['==', ['get', 'color'], '1'], '#fff',
            '#fff'
          ],
          'line-width': ['case',
            ['==', ['get', 'width'], '200'], 2,
            ['==', ['get', 'width'], '100'], 1,
            2
          ],
          'line-dasharray': [5, 5]
        },
        'filter': ['match',
          ['get', 'line_type'],
          ['1', '2', '3', '4', '7', '8', '10', '11', '14'], false,
          ['5', '9'], true,
          false
        ]
      }, {
        'id': 'sg_ni_mark_link_other',
        'type': 'line',
        'source': 'sg_ni_mark_link',
        'source-layer': 'sg_ni_mark_link',
        'maxzoom': 22.0,
        'minzoom': zoomMin,
        'paint': {
          'line-opacity': ['case',
            ['==', ['get', 'line_type'], '28'], 0.1,
            0.8
          ],
          'line-color': ['case',
            ['==', ['get', 'color'], '3'], '#FF0000',
            ['==', ['get', 'color'], '2'], '#FFD200',
            ['==', ['get', 'color'], '1'], '#fff',
            '#fff'
          ],
          'line-width': ['case',
            ['==', ['get', 'width'], '200'], 2,
            ['==', ['get', 'width'], '100'], 1,
            2
          ],
          'line-dasharray': [5, 0]
        },
        'filter': ['match',
          ['get', 'line_type'],
          ['1', '2', '3', '4', '7', '8', '10', '11', '14'], false,
          ['5', '9'], false,
          true
        ]
      }, {
        'id': 'sg_ni_object_zebra_polygon',
        'type': 'fill',
        'source-layer': 'sg_ni_object_zebra_polygon',
        'source': 'sg_ni_object_zebra_polygon',
        'maxzoom': 22.0,
        'minzoom': zoomMin,
        'paint': {
          'fill-opacity': 0.8,
          'fill-color': '#fff'
        }
      }, {
        'id': 'sg_ni_object_zebra_line',
        'type': 'line',
        'source-layer': 'sg_ni_object_zebra_line',
        'source': 'sg_ni_object_zebra_line',
        'maxzoom': 22.0,
        'minzoom': zoomMin,
        'paint': {
          'line-opacity': 0.8,
          'line-color': '#aaa',
          'line-width': 1,
          'line-dasharray': [5, 5]
        }
      }, {
        'id': 'sg_ni_object_text_polygon',
        'type': 'fill',
        'source-layer': 'sg_ni_object_text_polygon',
        'source': 'sg_ni_object_text_polygon',
        'layout': {
          'visibility': 'visible'
        },
        'maxzoom': 22.0,
        'minzoom': zoomMin,
        'paint': {
          'fill-opacity': 0.8,
          'fill-color': ['case',
            ['==', ['get', 'color'], '2'], '#FFD200',
            ['==', ['get', 'color'], '1'], '#fff',
            ['==', ['get', 'color'], '0'], '#333',
            '#fff'
          ]
        },
        'filter': ['!=', ['get', 'color'], '0']
      }, {
        'id': 'sg_ni_object_fill_area_polygon',
        'type': 'fill',
        'source-layer': 'sg_ni_object_fill_area_polygon',
        'source': 'sg_ni_object_fill_area_polygon',
        'maxzoom': 22.0,
        'minzoom': zoomMin,
        'paint': {
          'fill-opacity': 0.8,
          'fill-color': '#fff'
        }
      }, {
        'id': 'sg_ni_object_fill_area_line',
        'type': 'line',
        'source-layer': 'sg_ni_object_fill_area_line',
        'source': 'sg_ni_object_fill_area_line',
        'maxzoom': 22.0,
        'minzoom': zoomMin,
        'paint': {
          'line-opacity': 0.8,
          'line-color': '#fff',
          'line-width': 3
        }
      }, {
        'id': 'sg_ni_object_bus_station',
        'type': 'line',
        'source-layer': 'sg_ni_object_bus_station',
        'source': 'sg_ni_object_bus_station',
        'maxzoom': 22.0,
        'minzoom': zoomMin,
        'paint': {
          'line-color': ['case',
            ['==', ['get', 'color'], '2'], '#FFD200',
            ['==', ['get', 'color'], '1'], '#fff',
            ['==', ['get', 'color'], '0'], '#fff',
            '#fff'
          ],
          'line-opacity': 0.8,
          'line-width': 1.5
        }
      }, {
        'id': 'sg_ni_object_parking_area_line',
        'type': 'line',
        'source-layer': 'sg_ni_object_parking_area_line',
        'source': 'sg_ni_object_parking_area_line',
        'maxzoom': 22.0,
        'minzoom': zoomMin,
        'paint': {
          'line-opacity': 0.8,
          'line-color': '#fff',
          'line-width': 3
        }
      }, {
        'id': 'sg_ni_object_building',
        'type': 'extrusion',
        'source': 'sg_ni_building',
        'source-layer': 'sg_ni_building',
        'layout': {
          'visibility': 'visible'
        },
        'maxzoom': 17.0,
        'minzoom': zoomMin + 1,
        'paint': {
          'extrusion-color': '#ccc',
          'extrusion-height': 5,
          'extrusion-base': 0,
          'extrusion-opacity': 0.2
        }
      }, {
        'id': 'bg_country_boundary_polygon',
        'type': 'fill',
        'source': 'sg_ni_boundary',
        'source-layer': 'sg_ni_boundary',
        'maxzoom': zoomMax,
        'paint': {
          'fill-opacity': [
            'interpolate', ['linear'],
            ['zoom'],
            zoomMin, 1,
            zoomMax, 0
          ],
          'fill-color': '#f5f5f5'
        }
      }, {
        'id': 'bg_characteristic_area_polygon',
        'type': 'fill',
        'source': 'sg_ni_landuse',
        'source-layer': 'sg_ni_landuse',
        'maxzoom': zoomMax,
        'paint': {
          'fill-opacity': [
            'interpolate', ['linear'],
            ['zoom'],
            zoomMin, 1,
            zoomMax, 0
          ],
          'fill-color': '#E6D3E9'
        }
      }, {
        'id': 'bg_park_polygon',
        'type': 'fill',
        'source': 'sg_ni_park',
        'source-layer': 'sg_ni_park',
        'maxzoom': zoomMax,
        'paint': {
          // 'fill-opacity': 0.7, 注意原来就是0.7
          'fill-opacity': [
            'interpolate', ['linear'],
            ['zoom'],
            zoomMin, 0.7,
            zoomMax, 0.2
          ],
          'fill-color': '#d2e7bf'
        }
      }, {
        'id': 'bg_golf_course_polygon',
        'type': 'fill',
        'source': 'sg_ni_park',
        'source-layer': 'sg_ni_park',
        'paint': {
          'fill-opacity': [
            'interpolate', ['linear'],
            ['zoom'],
            zoomMin, 1,
            zoomMax, 0
          ],
          'fill-color': '#B7E59F'
        },
        'maxzoom': zoomMax,
        'filter': ['all', ['==', 'subtype', 'golf']]
      }, {
        'id': 'bg_lake_polygon',
        'type': 'fill',
        'source': 'sg_ni_water',
        'source-layer': 'sg_ni_water',
        'maxzoom': zoomMax,
        'minzoom': 8,
        'layout': {
          'visibility': 'visible'
        },
        'paint': {
          'fill-opacity': [
            'interpolate', ['linear'],
            ['zoom'],
            zoomMin, 1,
            zoomMax, 0.2
          ],
          'fill-antialias': true,
          'fill-color': '#9addff',
          'fill-outline-color': '#9addff',
          'fill-translate-anchor': 'viewport'
        }
      }, {
        'id': 'bg_building_polygon',
        'type': 'fill',
        'source': 'sg_ni_building',
        'source-layer': 'sg_ni_building',
        'maxzoom': zoomMin + 1,
        'minzoom': 15.5,
        'layout': {
          'visibility': 'visible'
        },
        'paint': {
          'fill-opacity': 0.2,
          'fill-color': '#ccc',
          'fill-antialias': true,
          'fill-translate-anchor': 'viewport'
        }
      }, {
        'id': 'road_route_fc5_2',
        'type': 'line',
        'source': 'sg_ni_route',
        'source-layer': 'sg_ni_route',
        'layout': {
          'line-join': 'round',
          'visibility': 'visible',
          'line-cap': 'butt'
        },
        'paint': {
          'line-translate-anchor': 'viewport',
          'line-gap-width': {
            'stops': [
              [14, 1.4],
              [15, 2.8],
              [16, 6.4],
              [17, 10]
            ],
            'base': 1
          },
          'line-color': '#dfdada',
          'line-width': 1.0
        },
        'filter': ['all', ['==', 'funcclass', '5']],
        'maxzoom': zoomMin,
        'minzoom': 14.0
      }, {
        'id': 'road_route_fc5_1',
        'type': 'line',
        'source': 'sg_ni_route',
        'source-layer': 'sg_ni_route',
        'layout': {
          'line-join': 'round',
          'visibility': 'visible',
          'line-cap': 'butt'
        },
        'paint': {
          'line-translate-anchor': 'viewport',
          'line-gap-width': 0.0,
          'line-color': '#ffffff',
          'line-width': {
            'stops': [
              [14, 1.4],
              [15, 2.8],
              [16, 6.4],
              [17, 10]
            ],
            'base': 1
          }
        },
        'filter': ['all', ['==', 'funcclass', '5']],
        'maxzoom': zoomMin,
        'minzoom': 14.0
      }, {
        'id': 'road_route_fc4_2',
        'type': 'line',
        'source': 'sg_ni_route',
        'source-layer': 'sg_ni_route',
        'layout': {
          'line-join': 'miter',
          'visibility': 'visible',
          'line-cap': 'butt'
        },
        'paint': {
          'line-gap-width': {
            'stops': [
              [5, 0.3],
              [8, 0.4],
              [10, 2],
              [18, 8]
            ],
            'base': 1.2
          },
          'line-translate-anchor': 'viewport',
          'line-color': '#c0bebe',
          'line-width': 2.3
        },
        'filter': ['all', ['==', 'funcclass', '4']],
        'maxzoom': zoomMin,
        'minzoom': 14.0
      }, {
        'id': 'road_route_fc4_1',
        'type': 'line',
        'source': 'sg_ni_route',
        'source-layer': 'sg_ni_route',
        'layout': {
          'line-join': 'miter',
          'visibility': 'visible',
          'line-cap': 'butt'
        },
        'paint': {
          'line-translate-anchor': 'viewport',
          'line-color': '#ffffff',
          'line-width': {
            'stops': [
              [5, 0.5],
              [8, 0.7],
              [10, 1],
              [18, 12]
            ],
            'base': 1
          }
        },
        'filter': ['all', ['==', 'funcclass', '4']],
        'maxzoom': zoomMin,
        'minzoom': 14.0
      }, {
        'id': 'road_route_fc3_2',
        'type': 'line',
        'source': 'sg_ni_route',
        'source-layer': 'sg_ni_route',
        'layout': {
          'line-join': 'bevel',
          'visibility': 'visible',
          'line-cap': 'butt'
        },
        'paint': {
          'line-translate-anchor': 'viewport',
          'line-gap-width': {
            'stops': [
              [5, 0.3],
              [8, 0.4],
              [10, 1.3],
              [18, 18]
            ],
            'base': 1.2
          },
          'line-color': '#c0bebe',
          'line-width': 1.0
        },
        'filter': ['all', ['==', 'funcclass', '3']],
        'maxzoom': zoomMin,
        'minzoom': 11.0
      }, {
        'id': 'road_route_fc3_1',
        'type': 'line',
        'source': 'sg_ni_route',
        'source-layer': 'sg_ni_route',
        'layout': {
          'line-join': 'bevel',
          'visibility': 'visible',
          'line-cap': 'butt'
        },
        'paint': {
          'line-translate-anchor': 'viewport',
          'line-color': '#ffffff',
          'line-width': {
            'stops': [
              [5, 0.5],
              [8, 0.7],
              [10, 1.4],
              [18, 20]
            ],
            'base': 1.2
          }
        },
        'filter': ['all', ['==', 'funcclass', '3']],
        'maxzoom': zoomMin,
        'minzoom': 11.0
      }, {
        'id': 'road_route_fc2_2',
        'maxzoom': zoomMin,
        'minzoom': 8.0,
        'type': 'line',
        'source': 'sg_ni_route',
        'source-layer': 'sg_ni_route',
        'layout': {
          'line-join': 'round',
          'visibility': 'visible',
          'line-cap': 'butt'
        },
        'paint': {
          'line-gap-width': {
            'stops': [
              [5, 0.5],
              [8, 0.7],
              [10, 1.4],
              [18, 20]
            ],
            'base': 1.2
          },
          'line-offset': 0.0,
          'line-color': '#c0bebe',
          'line-opacity': 1.0,
          'line-width': {
            'stops': [
              [5, 0.2],
              [19, 1.6]
            ],
            'base': 1.2
          }
        },
        'filter': ['all', ['==', 'funcclass', '2']]
      }, {
        'id': 'road_route_fc2_1',
        'type': 'line',
        'maxzoom': zoomMin,
        'minzoom': 8.0,
        'source': 'sg_ni_route',
        'source-layer': 'sg_ni_route',
        'layout': {
          'line-join': 'round',
          'visibility': 'visible',
          'line-cap': 'butt'
        },
        'paint': {
          'line-translate-anchor': 'viewport',
          'line-offset': 0.0,
          'line-color': '#ffffff',
          'line-width': {
            'stops': [
              [5, 0.5],
              [8, 0.7],
              [10, 1.4],
              [18, 20]
            ],
            'base': 1.2
          }
        },
        'filter': ['all', ['==', 'funcclass', '2']]
      }, {
        'id': 'road_route_link_fc1_border',
        'source': 'sg_ni_route',
        'layout': {
          'line-join': 'round',
          'visibility': 'visible',
          'line-cap': 'butt'
        },
        'layerInfo': {
          'source': 'sg_ni_route',
          'describe': '道路sin',
          'name': '高速边线',
          'sourceminzoom': 3.0,
          'groupname': 'road',
          'groupid': '390d48fd',
          'datatype': 'line',
          'sourcemaxzoom': 17.5,
          'zindex': 20
        },
        'source-layer': 'sg_ni_route',
        'paint': {
          'line-gap-width': {
            'stops': [
              [5, 0.5],
              [8, 0.7],
              [10, 1.4],
              [18, 20]
            ],
            'base': 1.2
          },
          'line-translate-anchor': 'viewport',
          'line-opacity': 0.98,
          'line-color': '#fbce5e',
          'line-width': {
            'stops': [
              [5, 0.4],
              [18, 2]
            ],
            'base': 1
          }
        },
        'maxzoom': zoomMin,
        'minzoom': 8.0,
        'type': 'line',
        'filter': ['all', ['==', 'funcclass', '1']]
      }, {
        'id': 'road_route_link_fc1_fill',
        'source': 'sg_ni_route',
        'layout': {
          'line-join': 'bevel',
          'visibility': 'visible',
          'line-cap': 'round'
        },
        'layerInfo': {
          'source': 'sg_ni_route',
          'describe': '道路sin',
          'name': '高速',
          'sourceminzoom': 3.0,
          'groupname': 'road',
          'groupid': '390d48fd',
          'datatype': 'line',
          'sourcemaxzoom': 17.5,
          'zindex': 29
        },
        'source-layer': 'sg_ni_route',
        'paint': {
          'line-translate-anchor': 'viewport',
          'line-color': '#ffeb99',
          'line-width': {
            'stops': [
              [5, 0.5],
              [8, 0.7],
              [10, 1.4],
              [18, 20]
            ],
            'base': 1.2
          }
        },
        'maxzoom': zoomMin,
        'minzoom': 5.0,
        'type': 'line',
        'filter': ['all', ['==', 'funcclass', '1']]
      }, {
        'id': 'road_route_fc5_name',
        'type': 'symbol',
        'source': 'sg_ni_route',
        'source-layer': 'sg_ni_route',
        'layout': {
          'text-size': 9.0,
          'text-pitch-alignment': 'viewport',
          'visibility': 'visible',
          'text-field': '{name}',
          'symbol-placement': 'line'
        },
        'paint': {
          'text-halo-color': '#ffffff',
          'text-halo-width': 1.0,
          'icon-color': '#ff0000',
          'text-translate-anchor': 'viewport'
        },
        'filter': ['all', ['==', 'funcclass', '5']],
        'maxzoom': zoomMin,
        'minzoom': 14.0
      }, {
        'id': 'road_route_fc4_name',
        'type': 'symbol',
        'source': 'sg_ni_route',
        'source-layer': 'sg_ni_route',
        'layout': {
          'text-size': 9.0,
          'text-pitch-alignment': 'viewport',
          'visibility': 'visible',
          'text-field': '{name}',
          'symbol-placement': 'line'
        },
        'paint': {
          'text-halo-color': '#ffffff',
          'text-halo-width': 1.0,
          'icon-color': '#ff0000',
          'text-translate-anchor': 'viewport'
        },
        'filter': ['all', ['==', 'funcclass', '4']],
        'maxzoom': zoomMin,
        'minzoom': 14.0
      }, {
        'id': 'road_route_fc3_name',
        'type': 'symbol',
        'source': 'sg_ni_route',
        'source-layer': 'sg_ni_route',
        'layout': {
          'text-size': 9.0,
          'text-pitch-alignment': 'viewport',
          'visibility': 'visible',
          'text-field': '{name}',
          'symbol-placement': 'line'
        },
        'paint': {
          'text-halo-color': '#ffffff',
          'text-halo-width': 1.0,
          'icon-color': '#ff0000',
          'text-translate-anchor': 'viewport'
        },
        'filter': ['all', ['==', 'funcclass', '3']],
        'maxzoom': zoomMin,
        'minzoom': 11.0
      }, {
        'id': 'road_route_fc2_name',
        'type': 'symbol',
        'source': 'sg_ni_route',
        'source-layer': 'sg_ni_route',
        'maxzoom': zoomMin,
        'minzoom': 9.0,
        'layout': {
          'visibility': 'visible',
          'text-size': 11.0,
          'text-max-width': 11.0,
          'text-field': '{name}',
          'symbol-placement': 'line'
        },
        'layerInfo': {
          'sourceminzoom': 0.0,
          'name': '道路名',
          'zindex': 0
        },
        'paint': {
          'text-halo-color': '#ffffff',
          'text-translate-anchor': 'viewport',
          'icon-color': '#CD5C5C',
          'text-halo-width': 1
        },
        'filter': ['all', ['==', 'funcclass', '2']]
      }, {
        'id': 'road_route_link_fc1_name',
        'maxzoom': zoomMin,
        'source': 'sg_ni_route',
        'layout': {
          'text-size': {
            'stops': [
              [9, 10],
              [18, 16]
            ],
            'base': 1
          },
          'text-pitch-alignment': 'viewport',
          'visibility': 'visible',
          'text-field': '{name}',
          'symbol-placement': 'line'
        },
        'layerInfo': {
          'source': 'sg_ni_route',
          'describe': '道路名sin',
          'name': '高速名',
          'sourceminzoom': 8.0,
          'groupname': '道路名',
          'groupid': 'b7674982',
          'datatype': 'symbol',
          'sourcemaxzoom': 17.5,
          'zindex': 41
        },
        'paint': {
          'text-halo-color': '#ffffff',
          'text-halo-width': 1.0,
          'icon-color': '#ff0000',
          'text-translate-anchor': 'viewport'
        },
        'source-layer': 'sg_ni_route',
        'minzoom': 8.0,
        'type': 'symbol',
        'filter': ['all', ['==', 'funcclass', '1']]
      }, {
        'id': 'poi_all',
        'type': 'symbol',
        'source': 'sg_ni_poi',
        'source-layer': 'sg_ni_poi',
        'maxzoom': zoomMin,
        'layout': {
          'visibility': 'visible',
          'text-size': 11.0,
          'text-max-width': 11.0,
          'text-field': '{name}',
          'text-offset': [0, 2],
          'icon-image': '{sprite}'
        },
        'layerInfo': {
          'sourceminzoom': 0.0,
          'name': 'POI',
          'datatype': 'symbol',
          'zindex': 0
        },
        'paint': {
          'text-halo-color': '#ffffff',
          'text-halo-width': 0.8,
          'text-color': '#7d400b'
        }
      }],
      'sources': {
        'sg_ni_route': {
          'type': 'vector',
          'tiles': [rootUrl + '/sg_ni_route/{z}/{x}/{y}?token=' + token + '&solu=' + solu]
        },
        'sg_ni_road_link': {
          'type': 'vector',
          'tiles': [rootUrl + '/sg_ni_road_link/{z}/{x}/{y}?token=' + token + '&solu=' + solu]
        },
        'sg_ni_mark_link': {
          'type': 'vector',
          'tiles': [rootUrl + '/sg_ni_mark_link/{z}/{x}/{y}?token=' + token + '&solu=' + solu]
        },
        'sg_ni_lane_link': {
          'type': 'vector',
          'tiles': [rootUrl + '/sg_ni_lane_link/{z}/{x}/{y}?token=' + token + '&solu=' + solu]
        },
        'sg_ni_stop_line': {
          'type': 'vector',
          'tiles': [rootUrl + '/sg_ni_stop_line/{z}/{x}/{y}?token=' + token + '&solu=' + solu]
        },
        'sg_ni_object_arrow': {
          'type': 'vector',
          'tiles': [rootUrl + '/sg_ni_object_arrow/{z}/{x}/{y}?token=' + token + '&solu=' + solu]
        },
        'sg_ni_object_text': {
          'type': 'vector',
          'tiles': [rootUrl + '/sg_ni_object_text/{z}/{x}/{y}?token=' + token + '&solu=' + solu]
        },
        'sg_ni_object_zebra': {
          'type': 'vector',
          'tiles': [rootUrl + '/sg_ni_object_zebra/{z}/{x}/{y}?token=' + token + '&solu=' + solu]
        },
        'sg_ni_object_warning_area': {
          'type': 'vector',
          'tiles': [rootUrl + '/sg_ni_object_warning_area/{z}/{x}/{y}?token=' + token + '&solu=' + solu]
        },
        'sg_ni_object_traffic_light': {
          'type': 'vector',
          'tiles': [rootUrl + '/sg_ni_object_traffic_light/{z}/{x}/{y}?token=' + token + '&solu=' + solu]
        },
        'sg_ni_object_road_lamp': {
          'type': 'vector',
          'tiles': [rootUrl + '/sg_ni_object_road_lamp/{z}/{x}/{y}?token=' + token + '&solu=' + solu]
        },
        'sg_ni_object_bump_area': {
          'type': 'vector',
          'tiles': [rootUrl + '/sg_ni_object_bump_area/{z}/{x}/{y}?token=' + token + '&solu=' + solu]
        },
        'sg_ni_object_sign_prohibitory': {
          'type': 'vector',
          'tiles': [rootUrl + '/sg_ni_object_sign_prohibitory/{z}/{x}/{y}?token=' + token + '&solu=' + solu]
        },
        'sg_ni_object_sign_warning': {
          'type': 'vector',
          'tiles': [rootUrl + '/sg_ni_object_sign_warning/{z}/{x}/{y}?token=' + token + '&solu=' + solu]
        },
        'sg_ni_object_sign_information': {
          'type': 'vector',
          'tiles': [rootUrl + '/sg_ni_object_sign_information/{z}/{x}/{y}?token=' + token + '&solu=' + solu]
        },
        'sg_ni_object_sign_direction': {
          'type': 'vector',
          'tiles': [rootUrl + '/sg_ni_object_sign_direction/{z}/{x}/{y}?token=' + token + '&solu=' + solu]
        },
        'sg_ni_object_warning_area_line': {
          'type': 'vector',
          'tiles': [rootUrl + '/sg_ni_object_warning_area_line/{z}/{x}/{y}?token=' + token + '&solu=' + solu]
        },
        'sg_ni_object_parking_area_line': {
          'type': 'vector',
          'tiles': [rootUrl + '/sg_ni_object_parking_area_line/{z}/{x}/{y}?token=' + token + '&solu=' + solu]
        },
        'sg_ni_object_zebra_polygon': {
          'type': 'vector',
          'tiles': [rootUrl + '/sg_ni_object_zebra_polygon/{z}/{x}/{y}?token=' + token + '&solu=' + solu]
        },
        'sg_ni_object_zebra_line': {
          'type': 'vector',
          'tiles': [rootUrl + '/sg_ni_object_zebra_line/{z}/{x}/{y}?token=' + token + '&solu=' + solu]
        },
        'sg_ni_object_text_polygon': {
          'type': 'vector',
          'tiles': [rootUrl + '/sg_ni_object_text_polygon/{z}/{x}/{y}?token=' + token + '&solu=' + solu]
        },
        'sg_ni_object_fill_area_line': {
          'type': 'vector',
          'tiles': [rootUrl + '/sg_ni_object_fill_area_line/{z}/{x}/{y}?token=' + token + '&solu=' + solu]
        },
        'sg_ni_object_fill_area_polygon': {
          'type': 'vector',
          'tiles': [rootUrl + '/sg_ni_object_fill_area_polygon/{z}/{x}/{y}?token=' + token + '&solu=' + solu]
        },
        'sg_ni_object_bus_station': {
          'type': 'vector',
          'tiles': [rootUrl + '/sg_ni_object_bus_station/{z}/{x}/{y}?token=' + token + '&solu=' + solu]
        },
        'sg_ni_boundary': {
          'type': 'vector',
          'tiles': [rootUrl + '/sg_ni_boundary/{z}/{x}/{y}?token=' + token + '&solu=' + solu]
        },
        'sg_ni_park': {
          'type': 'vector',
          'tiles': [rootUrl + '/sg_ni_park/{z}/{x}/{y}?token=' + token + '&solu=' + solu]
        },
        'sg_ni_landuse': {
          'type': 'vector',
          'tiles': [rootUrl + '/sg_ni_landuse/{z}/{x}/{y}?token=' + token + '&solu=' + solu]
        },
        'sg_ni_building': {
          'type': 'vector',
          'tiles': [rootUrl + '/sg_ni_building/{z}/{x}/{y}?token=' + token + '&solu=' + solu]
        },
        'sg_ni_water': {
          'type': 'vector',
          'tiles': [rootUrl + '/sg_ni_water/{z}/{x}/{y}?token=' + token + '&solu=' + solu]
        },
        'sg_ni_poi': {
          'type': 'vector',
          'tiles': [rootUrl + '/sg_ni_poi/{z}/{x}/{y}?token=' + token + '&solu=' + solu]
        }
      },
      'sprite': 'minemapdata://sprite/sprite',
      'glyphs': 'minemap://fonts/{fontstack}/{range}',
      'version': 8
    }
  }
}
