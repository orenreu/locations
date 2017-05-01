/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 29/04/2017
 * Time: 11:40
 */
import React from 'react'
import PropTypes from 'prop-types'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import Map from '../Partials/GoogleMap'

class MapDialog extends React.Component {
    constructor() {
        super()

        this.state = {
            center: {lat: 32.085300, lng: 34.781768}
        }

        this.onMapClick = this.onMapClick.bind(this)
    }

    onMapClick(e) {
        const center = {
            lat: e.latLng.lat(),
            lng: e.latLng.lng(),
        }
        this.setState({
            center
        })
    }

    render() {
        const style = {
            mapContainer: {height: 300},
            map: {height: '100%'}
        }
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.props.handleClose}
            />,
            <FlatButton
                label="Save"
                primary={true}
                onTouchTap={() => this.props.handleSave(this.state.center)}
            />
        ];

        return (
            <Dialog
                title="Click on the map to choose a location"
                actions={actions}
                modal={false}
                open={this.props.open}
                onRequestClose={this.props.handleClose}
            >
                <Map
                    center={this.state.center}
                    markers={[{position: this.state.center}]}
                    containerElement={<div style={style.mapContainer}/>}
                    mapElement={<div style={style.map}/>}
                    onMapClick={this.onMapClick}
                />
            </Dialog>
        )
    }
}

MapDialog.propTypes = {
    open: PropTypes.bool,
    handleClose: PropTypes.func,
    handleSave: PropTypes.func
}

export default MapDialog