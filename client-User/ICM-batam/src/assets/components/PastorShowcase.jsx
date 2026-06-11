import pastor from '../asset/pastor-1.jpg'
import pastor2 from '../asset/pastor-2.jpg'
import pastor3 from '../asset/pastor-3.jpg'
import "../styling/PastorShowcase.scss"
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function PastorShowcase(){

    useEffect(() => {
        const interval = setInterval(() => {
            setPastors(prev => {
                const updated = [...prev];

                const first = updated.shift();

                updated.push(first);

                return updated;
            });
        }, 7000);

        return () => clearInterval(interval);
    }, []);

    const [pastors, setPastors] = useState([
        {
            name: "Ps. Roy Untu",
            position: "Senior Pastor",
            image: pastor,
        },
        {
            name: "Ps. Theis G.P",
            position: "Associate Pastor",
            image: pastor2,
        },
        {
            name: "Ps. Ananto hantoro",
            position: "Senior Pastor",
            image: pastor3,
        }
    ]);

    return (
        <div className="pastor-showcase-component">
            <div className="pastor-showcase-component-wrapper">
                <div className="pastor-showcase-component-container">
                    <div className="pastor-showcase-component-content">
                        
                        {pastors.map((pastorData, index) => {

                            const sizeClass =
                                index === 0
                                    ? "pastor-card--large"
                                    : index === 1
                                    ? "pastor-card--medium"
                                    : "pastor-card--small";

                            return (
                                <motion.div
                                    key={pastorData.name}
                                    layout
                                    transition={{
                                        duration: 1.5,
                                        ease: [0.25, 0.1, 0.25, 1]
                                    }}
                                    className={`pastor-card ${sizeClass}`}
                                >
                                    <div className="pastor-showcase-component-thumbnail">
                                        <motion.img
                                            layout
                                            src={pastorData.image}
                                            alt=""
                                        />
                                    </div>

                                    <motion.div
                                        layout
                                        className="pastor-showcase-component-text"
                                    >
                                        <div className="pastor-showcase-component-name">
                                            <h1>{pastorData.name}</h1>
                                        </div>

                                        <div className="pastor-showcase-component-position">
                                            <h5>{pastorData.position}</h5>
                                        </div>
                                    </motion.div>
                                </motion.div>
                            );
                        })}

                        {/* <div className="pastor-card pastor-card--large">
                            <div className="pastor-showcase-component-thumbnail">
                                <img src={pastor} alt=""/>
                            </div>
                            <div className="pastor-showcase-component-text">
                                <div className="pastor-showcase-component-name">
                                    <h1>Ps. Roy Untu</h1>
                                </div>

                                <div className="pastor-showcase-component-position">
                                    <h5>Senior Pastor</h5>
                                </div>
                            </div>
                        </div>
                        <div className="pastor-card pastor-card--medium">
                            <div className="pastor-showcase-component-thumbnail">
                                <img src={pastor} alt=""/>
                            </div>
                            <div className="pastor-showcase-component-text">
                                <div className="pastor-showcase-component-name">
                                    <h1>Ps. Roy Untu</h1>
                                </div>

                                <div className="pastor-showcase-component-position">
                                    <h5>Senior Pastor</h5>
                                </div>
                            </div>
                        </div>
                        <div className="pastor-card pastor-card--small">
                            <div className="pastor-showcase-component-thumbnail">
                                <img src={pastor} alt=""/>
                            </div>
                            <div className="pastor-showcase-component-text">
                                <div className="pastor-showcase-component-name">
                                    <h1>Ps. Roy Untu</h1>
                                </div>

                                <div className="pastor-showcase-component-position">
                                    <h5>Senior Pastor</h5>
                                </div>
                            </div>
                        </div> */}
                    </div>
                    <div className="pastor-showcase-component-top">
                        <div className="pastor-showcase-component-top-title">
                            <h1>Our Leaders</h1>
                        </div>
                    </div>
                    <div className="pastor-showcase-container-bottom">

                    </div>
                </div>
            </div>
        </div>
    )
}