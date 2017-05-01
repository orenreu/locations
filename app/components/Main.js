/**
 * Created by Benzo Media.
 * http://www.benzomedia.com
 * User: Oren Reuveni
 * Date: 24/04/2017
 * Time: 9:29
 */
import React from 'react'
import Footer from './Partials/Footer'

class Main extends React.Component {

 render(){
    return (
    <div id="main" className="main" onClick={this.handleClick}>
        {React.cloneElement(this.props.children, {...this.props})}
        <Footer {...this.props}/>
    </div>
    )
 }
}

export default Main