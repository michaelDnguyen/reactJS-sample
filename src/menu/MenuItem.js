import React, { Component } from "react";
import "./menu-main.css";
import { NavLink } from "react-router-dom";

export default function MenuItem(props) {
  return (
    <div
      className="single-banner"
      // onClick={() => props.listenChoiceMenu(props.menu)}
    >
      <a href="#">
        <img src={props.menu.icon} className="img-menu" />
        <div className="single-banner-cta">
          <NavLink to="/list" activeClassName="selected">
            <h4 className="cta-title">
              <p>
                <strong>{props.menu.text}</strong>
              </p>
            </h4>
          </NavLink>
          <a href="#" className="btn-explore-more">
            Explore more
          </a>
        </div>
      </a>
    </div>
  );
}
