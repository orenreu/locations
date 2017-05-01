/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 24/04/2017
 * Time: 9:29
 */
import {bindActionCreators} from 'redux'
import {connect} from 'react-redux'
import actions from '../actions'
import Main from './Main'

function mapStateToProps(state) {
    return {
        locations: state.locations,
        categories: state.categories
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch)
}


const App = connect(mapStateToProps, mapDispatchToProps)(Main)


export default App