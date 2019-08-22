import React, { Component } from "react";
import "./menu-main.css";

export default function MenuItem(props) {
  return (
    <div
      className="single-banner"
      onClick={() => props.listenChoiceMenu(props.menu)}
    >
      <a href="#">
        <img src={props.menu.icon} className="img-menu" />
        <div className="single-banner-cta">
          <h4 className="cta-title">
            <p>
              <strong>{props.menu.text}</strong>
            </p>
          </h4>
          <a href="#" className="btn-explore-more">
            Explore more
          </a>
        </div>
      </a>
    </div>
  );
}
