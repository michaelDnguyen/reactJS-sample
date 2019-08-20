import React, {Component} from "react"
import "./menu-main.css"

export default class MenuItem extends Component {

    render(){
        return (
            <div className="square">
                <h4>{this.props.title}</h4>
                <ul>
                    <li>{this.props.subtitle}</li>
                    <li>{this.props.description}</li>
                </ul>
            </div>
        );
    }
}
