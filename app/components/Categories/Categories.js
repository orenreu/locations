/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 23/04/2017
 * Time: 16:01
 */
import React from 'react'
import AppBar from 'material-ui/AppBar'
import ActionBar from '../Partials/ActionBar'
import {Card, CardHeader} from 'material-ui/Card';
import {lighten} from 'material-ui/utils/colorManipulator';
import Theme from '../../config/theme'


class Categories extends React.Component {
    constructor() {
        super()
        this.unselectCategory = this.unselectCategory.bind(this)
    }

    componentWillUnmount() {
        this.props.selectCategory(null)
    }

    render() {
        const {categories, selectedCategory} = this.props.categories
        const style = {
            selected: {
                boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
                backgroundColor: lighten(Theme.palette.primary1Color, 0.8)
            }
        }
        return (
            <div className="categories">
                <AppBar
                    title="Categories"
                    iconClassNameRight="muidocs-icon-navigation-expand-more"
                />
                <ActionBar {...this.props}
                           mode={"category"}
                />
                <div className="page-content">
                    <div className="container">
                        {categories.map((category, index) => {
                            const selected = index === selectedCategory
                            return (<Card
                                    style={selected ? style.selected : null}
                                    className={"list-card"}
                                    onClick={() => this.props.selectCategory(index)}
                                    key={index}>
                                    <CardHeader title={category.name}/>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default Categories