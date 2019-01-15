import React from 'react';
import { ShowController, ShowView} from 'react-admin';
import { compose, withProps } from "recompose";
import TaskTitle from '../components/Title';
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";


export const showOnMap = compose(
  withProps({
    googleMapURL: "https://maps.googleapis.com/maps/api/js?key=AIzaSyCznykwiN2XrVTUMEjRo2CR2ICjTkjw754&v=3.exp&libraries=geometry,drawing,places",
    loadingElement: <div style={{ height: `100%` }} />,
    containerElement: <div style={{ height: `400px` }} />,
    mapElement: <div style={{ height: `100%` }} />,
  }),
  withScriptjs,
  withGoogleMap
)((props)=>(
  <ShowController title={<TaskTitle />} {...props}>
      {controllerProps => (
        <ShowView {...props} {...controllerProps}>
          {(controllerProps.fromLocation && controllerProps.toLocation)?(
            <GoogleMap
              defaultZoom={8}
              defaultCenter={{ lat: controllerProps.fromLocation, lng: controllerProps.toLocation }}
            >
              {true && <Marker position={{ lat: controllerProps.fromLocation, lng: controllerProps.toLocation }} />}
            </GoogleMap>)
            :(
            <GoogleMap
              defaultZoom={8}
              defaultCenter={{ lat: -34.397, lng: 150.644 }}
            >
              {true && <Marker position={{ lat: -34.397, lng: 150.644 }} />}
            </GoogleMap>)}
        </ShowView>
      )}
  </ShowController>
));