/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 29/04/2017
 * Time: 16:01
 */
import React from 'react'
import PropTypes from 'prop-types'
import Snackbar from 'material-ui/Snackbar'

class Message extends React.Component {

    render() {
        return (
            <Snackbar
                open={this.props.open}
                action="OK"
                message={this.props.message}
                autoHideDuration={3000}
                onRequestClose={this.props.handleClose}
            />
        );
    }
}

Message.propTypes = {
    open: PropTypes.bool,
    close: PropTypes.func,
    message: PropTypes.string
}


export default Message