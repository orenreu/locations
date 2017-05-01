/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 28/04/2017
 * Time: 10:18
 */
import React from 'react'
import PropTypes from 'prop-types'
import FlatButton from 'material-ui/FlatButton'
import EditCategory from "../Categories/EditCategory"
import EditLocation from "../Locations/EditLocation"
import Message from "../Partials/Message"

class ActionBar extends React.Component {
    constructor() {
        super()

        this.state = {
            dialogOpen: false,
            messageOpen: false,
            message: ""
        }

        this.closeDialog = this.closeDialog.bind(this)
        this.openDialog = this.openDialog.bind(this)
        this.closeMessage = this.closeMessage.bind(this)
        this.openMessage = this.openMessage.bind(this)
        this.addItem = this.addItem.bind(this)
        this.removeItem = this.removeItem.bind(this)
        this.addCategory = this.addCategory.bind(this)
        this.saveCategory = this.saveCategory.bind(this)
        this.removeCategory = this.removeCategory.bind(this)
        this.addLocation = this.addLocation.bind(this)
        this.saveLocation = this.saveLocation.bind(this)
        this.removeLocation = this.removeLocation.bind(this)

    }

    closeDialog() {
        this.setState({
            dialogOpen: false,
            messageOpen: false,
            message: ""
        })
    }

    openDialog() {
        this.setState({
            dialogOpen: true
        })
    }

    addItem() {
        if (this.props.mode === 'category') {
            this.addCategory()
        } else if (this.props.mode === 'location') {
            this.addLocation()
        }
    }

    removeItem() {
        if (this.props.mode === 'category') {
            this.removeCategory()
        } else if (this.props.mode === 'location') {
            this.removeLocation()
        }
    }


    addCategory() {
        this.props.selectCategory(null)
        this.openDialog()
    }


    saveCategory(category) {
        //Validate
        if (category.name === "") {
            return this.openMessage("Please make sure all fields are full")
        }

        //Save or Update
        if (this.props.categories.selectedCategory === null) {
            this.props.createCategory(category)
        } else {
            this.props.updateCategory(category, this.props.categories.selectedCategory)
        }
        this.closeDialog()
    }

    removeCategory() {
        this.props.selectCategory(null)
        const {categories} = this.props.categories
        if(categories.length === 1){
            return this.openMessage("You must have at lease one category")
        }
        this.props.deleteCategory(this.props.categories.selectedCategory)
    }

    addLocation() {
        this.props.selectLocation(null)
        this.openDialog()
    }

    validateLocation(location) {
        var valid = true
        for (var key in location) {
            if (location[key] === "coordinates") {
                if (location[key].lat === "" || location[key].lng === "") {
                    valid = false
                    break
                }
            } else if (location[key] === "") {
                valid = false
                break
            }
        }
        return valid
    }

    saveLocation(location) {
        //Validate
        if (!this.validateLocation(location)) {
            return this.openMessage("Please make sure all fields are full")
        }

        //Save or Update
        if (this.props.locations.selectedLocation === null) {
            this.props.createLocation(location)
        } else {
            this.props.updateLocation(location, this.props.locations.selectedLocation)
        }
        this.closeDialog()
    }

    removeLocation() {
        this.props.selectLocation(null)
        this.props.deleteLocation(this.props.locations.selectedLocation)
    }

    openMessage(message) {
        this.setState({
            messageOpen: true,
            message
        })
    }

    closeMessage() {
        this.setState({
            messageOpen: false
        })
    }


    render() {
        const AddIcon = <span className="pt-icon-standard pt-icon-add"></span>
        const EditIcon = <span className="pt-icon-standard pt-icon-edit"></span>
        const RemoveIcon = <span className="pt-icon-standard pt-icon-trash"></span>

        var selected
        if (this.props.mode === 'category') {
            selected = this.props.categories.selectedCategory
        } else if (this.props.mode === 'location') {
            selected = this.props.locations.selectedLocation
        }
        return (
            <div>
                <div className="action-bar">
                    <FlatButton
                        className="action-button"
                        label="Add"
                        icon={AddIcon}
                        secondary={true}
                        onClick={this.addItem}
                    />
                    <FlatButton
                        className="action-button"
                        label="Edit"
                        icon={EditIcon}
                        disabled={selected === null}
                        onClick={this.openDialog}
                        secondary={true}
                    />
                    <FlatButton
                        className="action-button"
                        label="Remove"
                        onClick={this.removeItem}
                        icon={RemoveIcon}
                        disabled={selected === null}
                        secondary={true}
                    />
                </div>
                <EditCategory
                    {...this.props}
                    open={this.props.mode === 'category' && this.state.dialogOpen}
                    handleClose={this.closeDialog}
                    handleSave={this.saveCategory}
                />
                <EditLocation
                    {...this.props}
                    open={this.props.mode === 'location' && this.state.dialogOpen}
                    handleClose={this.closeDialog}
                    handleSave={this.saveLocation}
                />
                <Message
                    open={this.state.messageOpen}
                    message={this.state.message}
                />
            </div>
        )
    }
}

ActionBar.propTypes = {
    mode: PropTypes.string
}

export default ActionBar