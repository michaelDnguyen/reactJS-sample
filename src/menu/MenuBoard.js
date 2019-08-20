import React, {Component} from "react"
import "./menu-main.css"
import MenuItem from "./MenuItem"

export default class MenuBoard extends Component{

    renderMenuItem(title,subtitle, desc){
        return <MenuItem title={title} subtitle={subtitle} description={desc}/>;
    }

    render(){
        const title = "Danh mục chức năng";

        return (
            <div>
                <div class="status">{title}</div>
                <div class="menu-rowfirst">
                    {this.renderMenuItem("Chức năng 1", "chức năng 1", "mô tả")}
                    {this.renderMenuItem("Chức năng 1", "chức năng 1", "mô tả")}
                    {this.renderMenuItem("Chức năng 1", "chức năng 1", "mô tả")}
                </div>
                <div class="menu-row">
                    {this.renderMenuItem("Chức năng 1", "chức năng 1", "mô tả")}
                    {this.renderMenuItem("Chức năng 1", "chức năng 1", "mô tả")}
                    {this.renderMenuItem("Chức năng 1", "chức năng 1", "mô tả")}                    
                </div>                
            </div>
        );
    }
}
