import "./Hero.css";
import { Logo } from "components/Logo";

export default function Hero() {
    return (
        <div className="hero">
            <div className="hero-element-l">
                {/* this is incredibly goofy & jank but works for now */}
                <Logo
                    background="var(--pe-bg)"
                    longArcColor="var(--pe-blue)"
                    shortArcColor="var(--pe-yellow)"
                />
            </div>
            <div className="hero-element-r">
                <h1>Project Emory</h1>
                <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsam, possimus. Eos
                    ipsa labore nihil blanditiis asperiores aspernatur autem ut esse atque aliquid
                    accusamus quo fugiat, dignissimos laboriosam voluptatum ratione fugit?
                </p>
            </div>
        </div>
    );
}
