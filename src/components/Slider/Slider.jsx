import './Slider.css';
import Slide from '../Slide/Slide.jsx';
import { PROJECTS } from './dataProjects.js';
import { useState } from 'react';

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    return (
        <div className="project-slider">
            <div className="slides">
                <Slide
                    title={PROJECTS[currentSlide].title}
                    techStack={PROJECTS[currentSlide].techStack}
                    key={currentSlide}
                >
                    {PROJECTS[currentSlide].description}
                </Slide>
            </div>
            <div className="dots">
                {PROJECTS.map((_, index) => (
                    <span key={index}>
                        <input
                            type="radio"
                            name="slider"
                            id={`slide${index + 1}`}
                            checked={index === currentSlide}
                            onChange={() => setCurrentSlide(index)}
                        />
                        <label htmlFor={`slide${index + 1}`}></label>
                    </span>
                ))}
            </div>

        </div>

    );
}