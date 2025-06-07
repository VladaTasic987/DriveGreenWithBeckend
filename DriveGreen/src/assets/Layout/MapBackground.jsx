// import React, { useRef, useEffect, useState, useImperativeHandle, forwardRef } from 'react';
// import 'ol/ol.css';
// import Map from 'ol/Map';
// import View from 'ol/View';
// import TileLayer from 'ol/layer/Tile';
// import OSM from 'ol/source/OSM';
// import { fromLonLat } from 'ol/proj';
// import VectorSource from 'ol/source/Vector';
// import VectorLayer from 'ol/layer/Vector';
// import Feature from 'ol/Feature';
// import LineString from 'ol/geom/LineString';
// import { Stroke, Style } from 'ol/style';
//
// export const MapBackground = forwardRef((props, ref) => {
//   const mapRef = useRef();
//   const mapInstance = useRef(null);
//   const routeLayerRef = useRef(null);
//   const [mapReady, setMapReady] = useState(false);
//
//   useEffect(() => {
//     const checkContainer = () => {
//       if (mapRef.current && mapRef.current.offsetWidth > 0 && mapRef.current.offsetHeight > 0) {
//         setMapReady(true);
//         return true;
//       }
//       return false;
//     };
//
//     if (!checkContainer()) {
//       const timer = setTimeout(() => {
//         if (checkContainer() && !mapInstance.current) {
//           initializeMap();
//         }
//       }, 100);
//
//       return () => clearTimeout(timer);
//     } else if (!mapInstance.current) {
//       initializeMap();
//     }
//
//     function initializeMap() {
//       const belgradeCoords = fromLonLat([20.4489, 44.7866]);
//
//       const map = new Map({
//         target: mapRef.current,
//         layers: [
//           new TileLayer({
//             source: new OSM()
//           })
//         ],
//         view: new View({
//           center: belgradeCoords,
//           zoom: 12
//         })
//       });
//
//       const vectorSource = new VectorSource();
//       const vectorLayer = new VectorLayer({
//         source: vectorSource,
//         style: new Style({
//           stroke: new Stroke({
//             color: '#465B4E', // Changed line color here
//             width: 3
//           })
//         })
//       });
//
//       map.addLayer(vectorLayer);
//       mapInstance.current = map;
//       routeLayerRef.current = vectorSource;
//     }
//
//     return () => {
//       if (mapInstance.current) {
//         mapInstance.current.setTarget(undefined);
//         mapInstance.current = null;
//       }
//     };
//   }, [mapReady]);
//
//   // expose drawRandomRoute function to parent using ref
//   useImperativeHandle(ref, () => ({
//     drawRandomRoute
//   }));
//
//   const drawRandomRoute = () => {
//     if (!mapInstance.current || !routeLayerRef.current) return;
//
//     const points = [
//       fromLonLat([20.53, 44.74]),
//       fromLonLat([20.50, 44.76]),
//       fromLonLat([20.47, 44.78]),
//       fromLonLat([20.45, 44.79]),
//       fromLonLat([20.42, 44.80]),
//       fromLonLat([20.40, 44.81])
//     ];
//
//     const line = new LineString([points[0]]);
//     const feature = new Feature({ geometry: line });
//     routeLayerRef.current.clear();
//     routeLayerRef.current.addFeature(feature);
//
//     let index = 1;
//     const interval = 3000 / (points.length - 1);
//
//     const animate = () => {
//       if (index < points.length) {
//         line.appendCoordinate(points[index]);
//         feature.setGeometry(line.clone());
//         index++;
//         setTimeout(animate, interval);
//       }
//     };
//
//     animate();
//   };
//
//   return (
//     <div id='map-background'>
//       <div
//         ref={mapRef}
//         style={{
//           width: '100%',
//           height: '100%',
//           zIndex: 0
//         }}
//       />
//     </div>
//   );
// });
//
// export default MapBackground;

import React, { useRef, useEffect, useState, useImperativeHandle, forwardRef } from 'react';
import 'ol/ol.css';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import OSM from 'ol/source/OSM';
import { fromLonLat } from 'ol/proj';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import Feature from 'ol/Feature';
import LineString from 'ol/geom/LineString';
import Point from 'ol/geom/Point';
import { Stroke, Style } from 'ol/style';
import Icon from 'ol/style/Icon';
import blackThunder from "../Images/BlackThunder.png";
import carLocation from "../Images/CarLocation.png";
import locationSmall from "../Images/LocationSmall.png"; // Added missing import
import { PopUp } from './PopUp';
import {MapHeader} from "./MapHeader.jsx";
import {useUser} from "../Context.jsx";

export const MapBackground = forwardRef((props, ref) => {
  const mapRef = useRef();
  const mapInstance = useRef(null);
  const routeLayerRef = useRef(null);
  const iconLayerRef = useRef(null);
  const carLayerRef = useRef(null);
  const [mapReady, setMapReady] = useState(false);
  const [iconCoords, setIconCoords] = useState(null);
  const [carCoords, setCarCoords] = useState(null);
  const [locationOn, setLocationOn] = useState(false);



  const [showPopup, setShowPopup] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const {partners} = useUser()

  // Array of random image URLs
  const randomImages = [
    blackThunder
  ];

  const addRandomIcon = (map, source) => {
    const randomImage = randomImages[Math.floor(Math.random() * randomImages.length)];
    const noviBeogradCoords = fromLonLat([20.4046, 44.8126]);
    setIconCoords(noviBeogradCoords);

    const marker = new Feature({
      geometry: new Point(noviBeogradCoords),
      name: 'RandomIcon'
    });

    marker.setStyle(new Style({
      image: new Icon({
        src: randomImage,
        scale: 1,
        anchor: [0.5, 1],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction'
      })
    }));

    source.addFeature(marker);


    map.on('click', function(evt) {
      const feature = map.forEachFeatureAtPixel(evt.pixel, function(feature) {
        return feature;
      });

      if (feature && feature.get('name') === 'RandomIcon') {
        
        // setShowDetails(true);
          setShowDetails(newDetails => !newDetails);
      }
    });

    map.on('pointermove', function(e) {
      const hit = map.hasFeatureAtPixel(e.pixel);
      map.getTargetElement().style.cursor = hit ? 'pointer' : '';
    });
  };

  const addCarIcon = (map, source) => {
    const carCoords = fromLonLat([20.499574, 44.714088]);
    setCarCoords(carCoords);

    const carMarker = new Feature({
      geometry: new Point(carCoords),
      name: 'CarLocation'
    });

    carMarker.setStyle(new Style({
      image: new Icon({
        src: carLocation,
        scale: 0.5,
        anchor: [0.5, 0.5],
        anchorXUnits: 'fraction',
        anchorYUnits: 'fraction',
        size: [260, 220],
        imgSize: [260, 220]
      })
    }));

    source.addFeature(carMarker);
  };

  const initializeMap = () => {
    const belgradeCoords = fromLonLat([20.4489, 44.7866]);

    const map = new Map({
      target: mapRef.current,
      layers: [
        new TileLayer({
          source: new OSM()
        })
      ],
      view: new View({
        center: belgradeCoords,
        zoom: 12
      })
    });

    const routeSource = new VectorSource();
    const routeLayer = new VectorLayer({
      source: routeSource,
      style: new Style({
        stroke: new Stroke({
          color: '#465B4E',
          width: 3
        })
      })
    });

    const iconSource = new VectorSource();
    const iconLayer = new VectorLayer({
      source: iconSource
    });

    const carSource = new VectorSource();
    const carLayer = new VectorLayer({
      source: carSource
    });

    map.addLayer(routeLayer);
    map.addLayer(iconLayer);
    map.addLayer(carLayer);
    mapInstance.current = map;
    routeLayerRef.current = routeSource;
    iconLayerRef.current = iconSource;
    carLayerRef.current = carSource;

    addRandomIcon(map, iconSource);
    addCarIcon(map, carSource);
  };

  useEffect(() => {
    const checkContainer = () => {
      if (mapRef.current && mapRef.current.offsetWidth > 0 && mapRef.current.offsetHeight > 0) {
        setMapReady(true);
        return true;
      }
      return false;
    };

    if (!checkContainer()) {
      const timer = setTimeout(() => {
        if (checkContainer() && !mapInstance.current) {
          initializeMap();
        }
      }, 100);

      return () => clearTimeout(timer);
    } else if (!mapInstance.current) {
      initializeMap();
    }

    return () => {
      if (mapInstance.current) {
        mapInstance.current.setTarget(undefined);
        mapInstance.current = null;
      }
    };
  }, [mapReady]);

  const drawRandomRoute = () => {
    if (!mapInstance.current || !routeLayerRef.current || !iconCoords || !carCoords) return;

    // Start with car coordinates and end with thunder icon coordinates
    const points = [
      carCoords, // Start at car location
      fromLonLat([20.48, 44.72]), // Intermediate point 1
      fromLonLat([20.45, 44.75]), // Intermediate point 2
      fromLonLat([20.42, 44.78]), // Intermediate point 3
      iconCoords // End at thunder icon location
    ];

    const line = new LineString([points[0]]);
    const feature = new Feature({ geometry: line });
    routeLayerRef.current.clear();
    routeLayerRef.current.addFeature(feature);

    let index = 1;
    const interval = 3000 / (points.length - 1);

    const animate = () => {
      if (index < points.length) {
        line.appendCoordinate(points[index]);
        feature.setGeometry(line.clone());
        index++;
        setTimeout(animate, interval);
      }
    };

    animate();
  };

  useImperativeHandle(ref, () => ({
    drawRandomRoute
  }));

  function OnShowPopUp(e) {
    e.preventDefault();
    setShowPopup(newPopup => !newPopup);
  }

  function OnShowDetails(e) {
    e.preventDefault();
    setShowDetails(newDetails => !newDetails);
  }
  const focusOnCarLocation = () => {
    console.log('Focus on car location');

    if (mapInstance.current && carCoords) {
      mapInstance.current.getView().animate({
        center: carCoords,
        zoom: 13,
        duration: 1500
      });
      setLocationOn(true)
    }
  };
  // pracenje da li je pomerena mapa
  useEffect(() => {
    console.log('promena se desila');
    let handleMapMove;
    const view = mapInstance.current.getView();

    const timeout = setTimeout(() => {

    handleMapMove = () => {
      if (!locationOn) return;

      const center = view.getCenter();
      const threshold = 10;
      const dx = Math.abs(center[0] - carCoords[0]);
      const dy = Math.abs(center[1] - carCoords[1]);

      const isCentered = dx < threshold && dy < threshold;

      if (!isCentered) {
        setLocationOn(false); // isključi praćenje
      }
    };

    view.on('change:center', handleMapMove);


    }, 1500);
    return () => {
      clearTimeout(timeout);
      if (handleMapMove) {
        view.un('change:center', handleMapMove);
      }
    };
  }, [locationOn, carCoords]);

  return (
      <>
        <div id='map-background'>
          <div
              ref={mapRef}
              style={{
                width: '100%',
                height: '100%',
                zIndex: 0
              }}
          />
        </div>

        {showDetails ?
            <button className={'popup-button'} onClick={OnShowPopUp}>
            <span className={'charger-location-text'}>
              <div className={'first'}> {partners.length ? partners[0].name : 'Robert Bosch'}</div>
              <div> <img src={locationSmall} alt="location" /> 2,5 km / 5 min</div>
            </span>
            </button> : null}
        {showPopup ? <PopUp showPopup={showPopup} /> : null }
        <MapHeader
          focusOnCarLocation={focusOnCarLocation}
          locationOn={locationOn}
        />
      </>
  );
});

export default MapBackground;