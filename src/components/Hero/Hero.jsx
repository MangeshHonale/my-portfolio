import heroBanner from "../../assets/hero-banner.png";
import AboutMe from "./../AboutMe/AboutMe";
import { useRef, useImperativeHandle } from 'react';
import './Hero.css';

export default function Hero({ref}) {
    const aboutMe = useRef();

    useImperativeHandle(ref, () => {
        return {
            focus(){
                aboutMe.current.focus();
            }
        }
    });
    return (
        <main>
            <section className="hero">
                <div className="hero-banner">
                    <img src={heroBanner} alt="Hero Background" className="hero-bg" />
                </div>
                <AboutMe ref={aboutMe}/>
            </section>
        </main>
    );
}