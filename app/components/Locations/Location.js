/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 01/05/2017
 * Time: 8:28
 */
import React from 'react'
import PropTypes from 'prop-types'
import {Card, CardHeader, CardText} from 'material-ui/Card';
import Map from '../Partials/GoogleMap'
import {lighten} from 'material-ui/utils/colorManipulator';
import Theme from '../../config/theme'

class Location extends React.Component {

    render() {
        const {selected, index} = this.props
        const location = this.props.loc

        const style = {
            selected: {
                boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
                backgroundColor: lighten(Theme.palette.primary1Color, 0.8)
            },
            mapContainer: {height: 200},
            map: {height: '100%'}
        }
        return (
            <Card
                style={selected ? style.selected : null}
                className={"list-card"}
                onClick={() => this.props.selectLocation(index)}
                initiallyExpanded={false}
            >
                <CardHeader
                    title={location.name}
                    subtitle={location.category}
                    showExpandableButton={true}
                />
                <CardText expandable={true}>
                    <div className="row">
                        <div className="location-text col-sm-6">
                            <div>
                                <h5>Address: <span>{location.address}</span></h5>
                                <h5>Latitude: <span>{location.coordinates.lat}</span></h5>
                                <h5>Longtitude: <span>{location.coordinates.lng}</span></h5>
                                <h5>Category: <span>{location.category}</span></h5>
                            </div>
                        </div>
                        <Map
                            center={location.coordinates}
                            markers={[{position:location.coordinates}]}
                            containerElement={<div className="col-sm-6"
                                                   style={style.mapContainer}/>}
                            mapElement={<div style={style.map}/>}
                        />
                    </div>

                </CardText>
            </Card>
        )
    }
}

Location.propTypes = {
    selected: PropTypes.bool,
    index: PropTypes.number,
    loc: PropTypes.object
}


export default Location