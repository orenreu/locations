/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 28/04/2017
 * Time: 20:40
 */
import React from 'react'
import PropTypes from 'prop-types'
import Dialog from 'material-ui/Dialog';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import MapDialog from "./MapDialog";


class EditLocation extends React.Component {
    constructor() {
        super()
        this.state = {
            dirty: false,
            location: {
                name: "",
                address: "",
                coordinates: {lat: "", lng: ""},
                category: ""
            },
            mapDialogOpen: false
        }

        this.init = this.init.bind(this)
        this.closeMapDialog = this.closeMapDialog.bind(this)
        this.setCoordinates = this.setCoordinates.bind(this)
        this.closeDialog = this.closeDialog.bind(this)
    }

    componentWillMount() {
        this.init(this.props)
    }

    componentWillReceiveProps(nextProps) {
        this.init(nextProps)
    }

    closeMapDialog() {
        this.setState({
            mapDialogOpen: false
        })
    }

    setCoordinates(coordinates) {
        this.setState({
            location: {
                ...this.state.location,
                coordinates
            }
        })
        this.closeMapDialog()
    }

    init(props) {
        if (props.locations.selectedLocation !== null) {
            const {locations} = props.locations
            const location = locations[props.locations.selectedLocation]
            this.setState({
                dirty: false,
                location: {
                    name: location.name,
                    address: location.address,
                    coordinates: location.coordinates,
                    category: location.category
                }
            })
        } else if (!this.state.dirty) {
            this.setState({
                location: {
                    name: "",
                    address: "",
                    coordinates: {lat: "", lng: ""},
                    category: ""
                }
            })
        }
    }

    closeDialog() {
        this.setState({
            dirty: false,
            location: {
                name: "",
                address: "",
                coordinates: {lat: "", lng: ""},
                category: ""
            }
        })
        this.props.handleClose()
    }


    render() {
        const {categories} = this.props.categories
        const actions = [
            <FlatButton
                label="Cancel"
                primary={true}
                onTouchTap={this.closeDialog}
            />,
            <FlatButton
                label="Save"
                primary={true}
                onTouchTap={() => {this.props.handleSave(this.state.location)}}
            />
        ];

        return (
            <Dialog
                title={this.props.locations.selectedLocation !== null ? "Edit Location": "Add Location"}
                actions={actions}
                modal={true}
                open={this.props.open}
            >
                <div className="row">
                    <div className="col-sm-6">
                        <TextField
                            value={this.state.location.name}
                            onChange={(e) => {
                                this.setState({
                                    dirty: true,
                                    location: {
                                        ...this.state.location,
                                        name: e.target.value
                                    }
                                })
                            }}
                            hintText="Enter location name..."
                            floatingLabelText="Name"
                        />
                        <TextField
                            value={this.state.location.address}
                            onChange={(e) => {
                                this.setState({
                                    dirty: true,
                                    location: {
                                        ...this.state.location,
                                        address: e.target.value
                                    }
                                })
                            }}
                            hintText="Enter location address..."
                            floatingLabelText="Address"
                        />
                        <SelectField
                            floatingLabelText="Category"
                            value={this.state.location.category}
                            onChange={(e, k, value) => {
                                this.setState({
                                    dirty: true,
                                    location: {
                                        ...this.state.location,
                                        category: value
                                    }
                                })
                            }}
                        >
                            {categories.map((category, index) => (
                                <MenuItem key={index} value={category.name} primaryText={category.name}/>
                            ))}

                        </SelectField>
                    </div>
                    <div className="col-sm-6">

                        <TextField
                            type="number"
                            value={this.state.location.coordinates.lat}
                            onChange={(e) => {
                                this.setState({
                                    dirty: true,
                                    location: {
                                        ...this.state.location,
                                        coordinates: {
                                            ...this.state.location.coordinates,
                                            lng: parseFloat(e.target.value)
                                        }
                                    }
                                })
                            }}
                            hintText="Enter location latitude..."
                            floatingLabelText="Latitude"
                        />
                        <TextField
                            type="number"
                            value={this.state.location.coordinates.lng}
                            onChange={(e) => {
                                this.setState({
                                    dirty: true,
                                    location: {
                                        ...this.state.location,
                                        coordinates: {
                                            ...this.state.location.coordinates,
                                            lng: parseFloat(e.target.value)
                                        }
                                    }
                                })
                            }}
                            hintText="Enter location longtitude..."
                            floatingLabelText="Longtitude"
                        />
                        <div className="search-location-button">
                            <RaisedButton
                                onClick={() => this.setState({mapDialogOpen: true})}
                                label="Search Location"
                                secondary={true}
                                icon={<FontIcon className="pt-icon pt-icon-path-search"/>}
                            />
                        </div>
                    </div>
                </div>
                <MapDialog
                    open={this.state.mapDialogOpen}
                    handleClose={this.closeMapDialog}
                    handleSave={this.setCoordinates}
                />
            </Dialog>
        )
    }
}

EditLocation.propTypes = {
    open: PropTypes.bool,
    handleClose: PropTypes.func,
    handleSave: PropTypes.func
}


export default EditLocation