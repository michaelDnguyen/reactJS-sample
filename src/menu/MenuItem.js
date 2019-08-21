import React, {Component} from "react"
import "./menu-main.css"

export default function MenuItem(props) {
            
        return (
            <div className="single-banner" onClick={()=>props.listenChoiceMenu(props.menu)}>
                <a href="#">
                    <img src={props.menu.icon} class="img-menu"></img>
                    <div class="single-banner--cta">
                    <h4 class="cta-title"><a href="#">
                    <p>{props.menu.text}</p></a></h4>
                    <a href="#" class="btn-explore-more">Explore more</a>
                    </div>
                </a>                        
            </div>
        );
}
