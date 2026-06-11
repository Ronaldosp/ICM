import "../styling/EventCarousel.scss"
import { useState , useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

export default function EventCarousel(){

    const carouselRef = useRef(null);
    const [isDragging, setIsDragging] = useState(false);

    const startX = useRef(0);
    const scrollPosition = useRef(0);
    

    const scrollLeft = () => {
        carouselRef.current?.scrollBy({
            left: -450,
            behavior: "smooth"
        });
    };

    const scrollRight = () => {
        carouselRef.current?.scrollBy({
            left: 450,
            behavior: "smooth"
        });
    };

    const handleMouseDown = (e) => {
        setIsDragging(true);

        startX.current = e.pageX;
        scrollPosition.current = carouselRef.current.scrollLeft;
    };

    const handleMouseLeave = () => {
        setIsDragging(false);
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    const handleMouseMove = (e) => {
        if (!isDragging) return;

        e.preventDefault();

        const walk = (e.pageX - startX.current) * 2;

        carouselRef.current.scrollLeft = scrollPosition.current - walk;
    };

    const handleTouchStart = (e) => {
        startX.current = e.touches[0].pageX;
        scrollPosition.current = carouselRef.current.scrollLeft;
    };

    const handleTouchMove = (e) => {
        const walk =
            (e.touches[0].pageX - startX.current) * 2;

        carouselRef.current.scrollLeft = scrollPosition.current - walk;
    };
    return (
        <div className="event-carousel-component">
            <div className="event-carousel-component-container">
                <div className="event-carousel-component__title-container">
                    <h2>What's New?</h2>
                </div>
                <div className="event-carousel-component__carousel-wrapper">
                    <button
                        className="event-carousel-component__arrow event-carousel-component__arrow--left"
                        onClick={scrollLeft}
                    >
                        ❮
                    </button>
                    <div 
                        ref={carouselRef} 
                        onMouseDown={handleMouseDown}
                        onMouseLeave={handleMouseLeave}
                        onMouseUp={handleMouseUp}
                        onMouseMove={handleMouseMove}

                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        className={`event-carousel-component__card-container ${
                                        isDragging ? "active" : ""
                                    }`}
                    >
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
                    <button
                        className="event-carousel-component__arrow event-carousel-component__arrow--right"
                        onClick={scrollRight}
                    >
                        ❯
                    </button>
                </div>

            </div>
        </div>
    )
}