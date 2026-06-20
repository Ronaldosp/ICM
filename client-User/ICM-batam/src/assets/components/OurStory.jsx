import "../styling/OurStory.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/free-mode";
import { FreeMode } from "swiper/modules";

export default function OurStory(){

    const values = [
        {
            icon: "https://assets.goal.com/images/v3/blt832729c9d2ba7053/GOAL%20-%20Blank%20WEB%20-%20Facebook(3370).jpeg?auto=webp&format=pjpg&width=3840&quality=60",
            title: "Innovation",
            description: "We continuously improve."
        },
        {
            icon: "https://assets.goal.com/images/v3/blt832729c9d2ba7053/GOAL%20-%20Blank%20WEB%20-%20Facebook(3370).jpeg?auto=webp&format=pjpg&width=3840&quality=60",
            title: "Integrity",
            description: "We do the right thing."
        },
        {
            icon: "https://assets.goal.com/images/v3/blt832729c9d2ba7053/GOAL%20-%20Blank%20WEB%20-%20Facebook(3370).jpeg?auto=webp&format=pjpg&width=3840&quality=60",
            title: "Teamwork",
            description: "We succeed together. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        },
        {
            icon: "https://assets.goal.com/images/v3/blt832729c9d2ba7053/GOAL%20-%20Blank%20WEB%20-%20Facebook(3370).jpeg?auto=webp&format=pjpg&width=3840&quality=60",
            title: "Teamwork",
            description: "We succeed together. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. . It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        },
        {
            icon: "https://assets.goal.com/images/v3/blt832729c9d2ba7053/GOAL%20-%20Blank%20WEB%20-%20Facebook(3370).jpeg?auto=webp&format=pjpg&width=3840&quality=60",
            title: "Teamwork",
            description: "We succeed together. It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout."
        }
    ];


    return(
        <div className="our-story-component">
            <div className="our-story-component-container">
                <div className="our-story-component-wrapper">

                    <div className="our-story-component-content">
                        <div className="our-story-component-content__title">
                            <h1>Our Story</h1>
                        </div>
                        <div className="our-story-component-content__description">
                            <h5>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since 1966, when designers at Letraset and James Mosley, the librarian at St Bride Printing Library in London, took a 1914 Cicero translation and scrambled it to make dummy text for Letraset's Body Type sheets. It has survived not only many decades, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised thanks to these sheets and more recently with desktop publishing software including versions of Lorem Ipsum.

                            Why do we use it?
                            It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).


                            Where does it come from?
                            Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</h5>
                        </div>
                    </div>

                    <div className="our-story-component-divider"></div>

                    <div className="our-story-component-value-cards">

                        <div className="our-story-component-value-cards__container">

                            <div className="our-story-component-value-cards__title-container">
                                <h2>Our Values</h2>
                            </div>

                            <Swiper
                                modules={[FreeMode]}
                                slidesPerView="auto"
                                spaceBetween={24}
                                grabCursor
                                resistanceRatio={0}
                            >
                                {values.map((value, index) => (
                                    <SwiperSlide key={index} style={{ width: "540px" }}>
                                        <div className="our-story-component-value-cards__card-container">
                                            <div className="our-story-component-value-cards__icon">
                                                <img src={value.icon} alt={value.title} />
                                            </div>

                                            <div className="our-story-component-value-cards__title">
                                                <h3>{value.title}</h3>
                                            </div>

                                            <div className="our-story-component-value-cards__description">
                                                <p>{value.description}</p>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}