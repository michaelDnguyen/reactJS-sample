import React, {Component} from "react"
import "./menu-main.css"
import MenuItem from "./MenuItem"
import menuData from "./MenuData"

export default class MenuBoard extends Component{

    constructor(props){
        super(props);
        this.state = {
            menus: menuData
        };
    }

    listenChoiceMenu(menu){
        alert('On Choice Menu ' + menu.text)
    }

    render(){
        const menuConst = this.state.menus.map(menu => {
            return(
                <MenuItem
                    menu={menu}
                    key={menu.id}
                    listenChoiceMenu={this.listenChoiceMenu}
                />
            )
        });

        return (
            <div>
                {menuConst}
            </div>
        );
    }
}
