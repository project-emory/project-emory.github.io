import "./Home.css";
import Hero from "./hero/Hero";
import AboutUs from "./about-us/AboutUs";
import Upcoming from "./upcoming/Upcoming";
import Contact from "./contact/Contact";

export default function Home() {
    return (
        <>
            <Hero />

            <AboutUs />

            <Upcoming />

            <Contact />
        </>
    );
}
