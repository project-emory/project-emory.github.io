import "./Home.css";
import AboutUs from "./AboutUs";
import Upcoming from "./Upcoming";
import Contact from "./Contact";

export default function Home() {
    return (
        <>
            <div className="hero">
                <div className="hero-element-l">
                    <h1>LOGO</h1>
                </div>
                <div className="hero-element-r">
                    <h1>Project Emory</h1>
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, possimus.
                        Eos ipsa labore nihil blanditiis asperiores aspernatur autem ut esse atque
                        aliquid accusamus quo fugiat, dignissimos laboriosam voluptatum ratione
                        fugit?
                    </p>
                </div>
            </div>

            <AboutUs />

            <Upcoming />

            <Contact />
        </>
    );
}
