/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 24/04/2017
 * Time: 10:51
 */
import React from 'react'
import {BottomNavigation, BottomNavigationItem} from 'material-ui/BottomNavigation'
import FontIcon from 'material-ui/FontIcon';
import Paper from 'material-ui/Paper'
import IconLocationOn from 'material-ui/svg-icons/communication/location-on'
import IconDns from 'material-ui/svg-icons/action/dns'
import {browserHistory} from 'react-router'


class Footer extends React.Component {
    constructor(){
        super()
        this.state = {
            selectedIndex: 0,
        };

        this.select = this.select.bind(this)
    }

    componentDidMount(){
        var currentLocation = this.props.location.pathname
        if(currentLocation === '/categories'){
            this.setState({selectedIndex: 1})
        }
    }

    select(index){
        browserHistory.push(index ? '/categories':'/locations')
        this.setState({selectedIndex: index})
    }
 render(){
        const style = {
            icon: {fontSize:'18px'}
        }
        const LocationsIcon =  <FontIcon style={style.icon} className="pt-icon pt-icon-map-marker"/>
        const CategoriesIcon =  <FontIcon style={style.icon}  className="pt-icon pt-icon-layers"/>

     return (
        <Paper zDepth={1} className="footer">
            <BottomNavigation selectedIndex={this.state.selectedIndex}>

                <BottomNavigationItem
                    icon={LocationsIcon}
                    label="Locations"
                    onTouchTap={() => this.select(0)}
                />
                <BottomNavigationItem
                    label="Categories"
                    icon={CategoriesIcon}
                    onTouchTap={() => this.select(1)}
                />
            </BottomNavigation>
        </Paper>
    )
 }
}

export default Footer