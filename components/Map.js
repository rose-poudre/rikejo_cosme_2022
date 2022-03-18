// import { useState } from "react";
// import ReactMapGL from "react-map-gl";

// const Map = () => {
//   const [viewport, setViewport] = useState({
//     width: "100%",
//     height: "100%",
//     latitude: 37.7577,
//     longitude: -122.4376,
//     zoom: 11,
//   });

//   return (
//     <ReactMapGL
//       mapStyle="mapbox://styles/mayuyun/cl0rkx5v7005p15ogf0gxr0ld"
//       mapboxApiAccessToken={process.env.mapbox_key}
//       {...viewport}
//     ></ReactMapGL>
//   );
// };

// export default Map;

import * as React from "react";
import Map from "react-map-gl";

function App() {
  return (
    <Map
      initialViewState={{
        longitude: -100,
        latitude: 40,
        zoom: 3.5,
      }}
      style={{ width: 600, height: 400 }}
      mapStyle="mapbox://styles/mayuyun/cl0rkx5v7005p15ogf0gxr0ld"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
    />
  );
}

export default Map;
