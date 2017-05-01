/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 01/05/2017
 * Time: 7:34
 */
import React from 'react'
import FontIcon from 'material-ui/FontIcon';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

class SortBar extends React.Component {
    constructor() {
        super()
        this.handleFilterChange = this.handleFilterChange.bind(this)
    }

    handleFilterChange(e, value) {
        this.props.setCategoryFilter(value)
    }

    render() {
        const style = {
            c: {
                width: 38,
                height: 38
            },
            icon: {
                fontSize: 16
            }
        }
        const {sort, category} = this.props.locations
        const {categories} = this.props.categories
        return (
            <div className="sort-bar">
                {sort === 'category' ?
                    <IconButton
                        onClick={this.props.sortLocationsAlphabetically}
                        tooltip="Sort Alphabetically"
                        style={style.button}
                        iconStyle={style.icon}>
                        <FontIcon className="pt-icon pt-icon-sort-alphabetical"/>
                    </IconButton> :
                    <IconButton
                        onClick={this.props.sortLocationsByCategory}
                        tooltip="Sort by Category"
                        style={style.button}
                        iconStyle={style.icon}>
                        <FontIcon className="pt-icon pt-icon-sort"/>
                    </IconButton>}

                <IconMenu
                    iconButtonElement={
                        <IconButton style={style.button}
                                    iconStyle={style.icon}
                                    tooltip="Filter Category">
                            <FontIcon className="pt-icon pt-icon-filter"/>
                        </IconButton>}
                    onChange={this.handleFilterChange}
                    value={category}
                >
                    <MenuItem value="all" primaryText="All"/>
                    {categories.map((category, index) => (
                        <MenuItem value={category.name} primaryText={category.name} key={index}/>
                    ))}
                </IconMenu>
                {category !== 'all' && <span className="selected-category">{category}</span>}

            </div>
        )
    }
}

export default SortBar