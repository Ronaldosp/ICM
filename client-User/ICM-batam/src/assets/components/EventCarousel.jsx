import "../styling/EventCarousel.scss"
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function EventCarousel(){

    return (
        <div className="event-carousel-component">
            <div className="event-carousel-component-container">
                <div className="event-carousel-component__title-container">
                    <h2>What's New?</h2>
                </div>

                <div className="event-carousel-component__card-container">
                    <a>
                        <div className="event-carousel-component__card-wrapper">
                            <div className="event-carousel-component__card-thumbnail">
                                <img src="https://worshipwallpapers.com/wp-content/uploads/2016/10/heartlikeheavenfalling-laptop.jpg" alt=""/>
                            </div>
                            <div className="event-carousel-component__card-title">
                                <h3>There is no one who loves pain itself</h3>
                            </div>
                            <div className="event-carousel-component__card-sub-description">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, </p>
                            </div>
                        </div>
                    </a>
                    <a>
                        <div className="event-carousel-component__card-wrapper">
                            <div className="event-carousel-component__card-thumbnail">
                                <img src="https://worshipwallpapers.com/wp-content/uploads/2016/10/heartlikeheavenfalling-laptop.jpg" alt=""/>
                            </div>
                            <div className="event-carousel-component__card-title">
                                <h3>There is no one who loves pain itself</h3>
                            </div>
                            <div className="event-carousel-component__card-sub-description">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, </p>
                            </div>
                        </div>
                    </a>
                    <a>
                        <div className="event-carousel-component__card-wrapper">
                            <div className="event-carousel-component__card-thumbnail">
                                <img src="https://worshipwallpapers.com/wp-content/uploads/2016/10/heartlikeheavenfalling-laptop.jpg" alt=""/>
                            </div>
                            <div className="event-carousel-component__card-title">
                                <h3>There is no one who loves pain itself</h3>
                            </div>
                            <div className="event-carousel-component__card-sub-description">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, </p>
                            </div>
                        </div>
                    </a>
                    <a>
                        <div className="event-carousel-component__card-wrapper">
                            <div className="event-carousel-component__card-thumbnail">
                                <img src="https://worshipwallpapers.com/wp-content/uploads/2016/10/heartlikeheavenfalling-laptop.jpg" alt=""/>
                            </div>
                            <div className="event-carousel-component__card-title">
                                <h3>There is no one who loves pain itself</h3>
                            </div>
                            <div className="event-carousel-component__card-sub-description">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, </p>
                            </div>
                        </div>
                    </a>
                    <a>
                        <div className="event-carousel-component__card-wrapper">
                            <div className="event-carousel-component__card-thumbnail">
                                <img src="https://worshipwallpapers.com/wp-content/uploads/2016/10/heartlikeheavenfalling-laptop.jpg" alt=""/>
                            </div>
                            <div className="event-carousel-component__card-title">
                                <h3>There is no one who loves pain itself</h3>
                            </div>
                            <div className="event-carousel-component__card-sub-description">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, </p>
                            </div>
                        </div>
                    </a>
                    <a>
                        <div className="event-carousel-component__card-wrapper">
                            <div className="event-carousel-component__card-thumbnail">
                                <img src="https://worshipwallpapers.com/wp-content/uploads/2016/10/heartlikeheavenfalling-laptop.jpg" alt=""/>
                            </div>
                            <div className="event-carousel-component__card-title">
                                <h3>There is no one who loves pain itself</h3>
                            </div>
                            <div className="event-carousel-component__card-sub-description">
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, </p>
                            </div>
                        </div>
                    </a>
                </div>

            </div>
        </div>
    )
}