import "./Home.css";
import AboutUs from "./AboutUs";
import Upcoming from "./Upcoming";
import Contact from "./Contact";

export default function Home() {
    return (
        <>
            <div>
                <h1>Project Emory</h1>
                <p>How are you doing today?</p>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, possimus. Eos
                    ipsa labore nihil blanditiis asperiores aspernatur autem ut esse atque aliquid
                    accusamus quo fugiat, dignissimos laboriosam voluptatum ratione fugit?
                </p>
            </div>

            <AboutUs />

            <Upcoming />

            <Contact />
        </>
    );
}
