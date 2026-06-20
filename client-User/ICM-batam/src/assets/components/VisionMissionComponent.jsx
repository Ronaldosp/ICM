

export default function VisionMissionComponent(){

    const values = [
        {
            icon: "https://assets.goal.com/images/v3/blt832729c9d2ba7053/GOAL%20-%20Blank%20WEB%20-%20Facebook(3370).jpeg?auto=webp&format=pjpg&width=3840&quality=60",
            subtitle: "Statement of faith",
            title: "Innovation",
            description: "We continuously improve."
        },
        {
            icon: "https://assets.goal.com/images/v3/blt832729c9d2ba7053/GOAL%20-%20Blank%20WEB%20-%20Facebook(3370).jpeg?auto=webp&format=pjpg&width=3840&quality=60",
            subtitle: "Statement of faith",
            title: "Integrity",
            description: "We do the right thing."
        },
        {
            icon: "https://assets.goal.com/images/v3/blt832729c9d2ba7053/GOAL%20-%20Blank%20WEB%20-%20Facebook(3370).jpeg?auto=webp&format=pjpg&width=3840&quality=60",
            subtitle: "Statement of faith",
            title: "Teamwork",
            description: "We succeed together."
        }
    ];

    return (
        <div className="vision-mision-component">

                <div className="vision-mision-component-container">

                    <div className="vision-mision-component-wrapper">

                        <div className="vision-mision-component__carousel-container">

                            <Swiper
                                slidesPerView={3}
                                spaceBetween={5}
                                grabCursor
                            >
                                {values.map((value, index) => (
                                    <SwiperSlide key={index}>
                                        <div className="vision-mision-component__value-cards__card-container">

                                            <div className="vision-mision-component__value-cards__sub-title">
                                                <h5>{value.title}</h5>
                                            </div>

                                            <div className="vision-mision-component__value-cards__title">
                                                <h3>{value.title}</h3>
                                            </div>

                                            <div className="vision-mision-component__value-cards__description">
                                                <h5>{value.description}</h5>
                                            </div>

                                            <div className="vision-mision-component__value-cards__icon">
                                                <img src={value.icon} alt={value.title} />
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                ))}
                            </Swiper>
                        </div>
                    </div>
                </div>
        </div>
    )
}