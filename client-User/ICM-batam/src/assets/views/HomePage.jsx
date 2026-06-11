import ParallaxHero from "../components/ParallaxHero.jsx";
import EventCarousel from "../components/EventCarousel.jsx";
import PastorShowcase from "../components/PastorShowcase.jsx";

export default function HomePage(){

    return(
        <div>
            <ParallaxHero/>
            <EventCarousel/>
            <PastorShowcase/>
        </div>
    )
}