/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 29/04/2017
 * Time: 9:47
 */
import React from 'react'
import PropTypes from 'prop-types'

import {withGoogleMap, GoogleMap, Marker} from "react-google-maps";

const Map = withGoogleMap(props => (
        <GoogleMap
            ref={props.onMapLoad}
            defaultZoom={14}
            defaultCenter={props.center}
            onClick={props.onMapClick}
        >
            {props.markers.map((marker, index) => (
                <Marker position={marker.position} key={index} defaultAnimation={2} />
            ))}
        </GoogleMap>
    ))
;

Map.prpTypes = {
    center: PropTypes.object,
    onMapLoad: PropTypes.func,
    onMapClick: PropTypes.func,
    markers: PropTypes.array,
}

export default Map