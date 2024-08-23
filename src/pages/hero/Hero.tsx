import { useEffect, useState } from "react";
import "./Hero.css";
import { Logo } from "components/Logo";

export default function Hero() {
    const [loaded, setLoaded] = useState(true);

    useEffect(() => {
        setLoaded(false);
    }, []);

    return (
        <div className="hero">
            <div className={`hero-element-l ${loaded ? "tilted centered-l" : ""}`}>
                <a href="http://github.com/project-emory" target="_blank" rel="noopener noreferrer">
                    {/* this is incredibly goofy & jank but works for now */}
                    <Logo
                        background="var(--bg-base)"
                        longArcColor="var(--pe-blue-muted)"
                        shortArcColor="var(--pe-yellow-muted)"
                    />
                </a>
            </div>
            <div className={`hero-element-r ${loaded ? "centered-r" : ""}`}>
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
