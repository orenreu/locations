/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 23/04/2017
 * Time: 16:01
 */
import React from 'react'
import AppBar from 'material-ui/AppBar'
import SortBar from './SortBar'
import ActionBar from '../Partials/ActionBar'
import Location from './Location'

class Locations extends React.Component {
    constructor() {
        super()

        this.state = {
            visibleLocations: []
        }

        this.init = this.init.bind(this)
    }

    componentWillMount() {
        this.init(this.props)
    }

    componentWillUnmount() {
        this.props.selectLocation(null)
    }

    componentWillReceiveProps(nextProps) {
        this.init(nextProps)
    }

    init(props) {
        const {locations, category} = props.locations
        const visibleLocations = locations.filter((location) => {
            if (category === 'all') return true
            return location.category === category
        })

        this.setState({
            visibleLocations
        })
    }

    render() {

        const {selectedLocation} = this.props.locations

        return (
            <div className="locations">
                <AppBar
                    title="Locations"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                <ActionBar mode="location" {...this.props} />
                <div className="page-content">
                    <div className="container">
                        <SortBar {...this.props}/>
                        <div className="locations-list">
                            {this.state.visibleLocations.map((location, index) => {
                                const selected = index === selectedLocation
                                return (
                                    <Location
                                        selected={selected}
                                        key={index}
                                        index={index}
                                        loc={location}
                                        {...this.props}/>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Locations