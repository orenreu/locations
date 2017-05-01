/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 28/04/2017
 * Time: 11:20
 */
import React from 'react'
import PropTypes from 'prop-types'
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';

class EditCategory extends React.Component {
    constructor(){
        super()
        this.state = {
            name:""
        }

        this.init = this.init.bind(this)
    }

    componentWillMount(){
        this.init(this.props)
    }

    componentWillReceiveProps(nextProps){
        this.init(nextProps)
    }

    init(props){
        if(props.categories.selectedCategory !== null) {
            const {categories} = props.categories
            const category = categories[props.categories.selectedCategory]
            this.setState({
                name: category.name
            })
        } else {
            this.setState({
                name: ""
            })
        }
    }

 render(){

     const actions = [
         <FlatButton
             label="Cancel"
             primary={true}
             onTouchTap={this.props.handleClose}
         />,
         <FlatButton
             label="Save"
             primary={true}
             onTouchTap={() => this.props.handleSave(this.state)}
         />
     ];

     return (
        <Dialog
            title="Edit Category"
            actions={actions}
            modal={false}
            open={this.props.open}
            onRequestClose={this.props.handleClose}
        >
            <div className="row">
                <div className="col-sm-6">
                    <TextField
                        value={this.state.name}
                        onChange={(e)=> {this.setState({name: e.target.value})}}
                        hintText="Enter category name..."
                        floatingLabelText="Name"
                    />
                </div>
            </div>
        </Dialog>
    )
 }
}

EditCategory.propTypes = {
    open: PropTypes.bool,
    handleClose: PropTypes.func,
    handleSave: PropTypes.func
}

export default EditCategory