import { useState , useEffect } from "react";
import "../styling/ParallaxHero.scss"
export default function ParallaxHero(){

    const text = "Where Faith, Hope, and Love Grow Together";

    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let i = 0;

        const interval = setInterval(() => {
            setDisplayedText(text.slice(0, i + 1));
            i++;

            if (i === text.length) {
                clearInterval(interval);
            }
        }, 100);

        return () => clearInterval(interval);
    }, []);
    
    return(
        <div className="parallax-hero-component">
            <div className="parallax-hero-component-container">
                <div className="parallax-hero-component-hero">
                    <div className="parallax-hero-component-hero__overlay">

                        <h3 className="typing-text">{displayedText}</h3>
                    </div>
                </div>
            </div>
        </div>
    )
}