import React, { Component } from 'react'
import { MenuItems } from  './MenuItems'

class Navbar extends Component {
    render()  {
        return(
            <nav className="NavbarItems">
                <h1 className="navnar-logo">howdy<i className=""></i></h1>
                <div className="menu-icon">

                </div>
                <ul>
                    {MenuItems.map((item,index)=>  {
                        return (
                            <li key={index}>
                                <A className={item.className} href={item.url}>
                                 {item.title} 
                                </A> 
                        </li>
                        )
                    })}

                    
                </ul>
            </nav>

        )
    }
}