import heroBanner from "../../assets/hero-banner.png";
import AboutMe from "./../AboutMe/AboutMe";
import './Hero.css';

export default function Hero() {
    return (
        <main>
            <section className="hero">
                <div className="hero-banner">
                    <img src={heroBanner} alt="Hero Background" className="hero-bg" />
                </div>
                <AboutMe />
            </section>
        </main>
    );
}