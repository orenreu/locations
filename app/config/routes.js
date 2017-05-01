/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 23/04/2017
 * Time: 15:54
 */

import React from 'react'
import {Router, Route, IndexRoute} from 'react-router'

import Categories from '../components/Categories/Categories'
import Locations from '../components/Locations/Locations'
import App from '../components/App'


export default (
    <div>
        <Route path="/" component={App}>
            <Route path="/locations" component={Locations}/>
            <Route path="/categories" component={Categories}/>
            <IndexRoute component={Locations}/>
        </Route>
    </div>
)