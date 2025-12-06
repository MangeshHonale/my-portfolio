import './Slider.css';
import Slide from '../Slide/Slide.jsx';
import { PROJECTS } from './dataProjects.js';
import { useState } from 'react';
import Project from '../Project/Project.jsx';

export default function Slider() {
    const [currentSlide, setCurrentSlide] = useState(0);
    return (
        <div className="project-slider" style={{ ['--slides']: PROJECTS.length, ['--current']: currentSlide }}>
            {/* radio inputs must come before .slides for CSS sibling selectors to work */}
            {PROJECTS.map((_, index) => (
                <input
                    key={`input-${index}`}
                    type="radio"
                    name="slider"
                    id={`slide${index + 1}`}
                    checked={index === currentSlide}
                    onChange={() => setCurrentSlide(index)}
                    aria-hidden="true"
                />
            ))}

            <div className="slides">
                {PROJECTS.map((p, i) => (
                    <Slide key={i}>
                        <Project title={p.title} techStack={p.techStack}>
                            {p.description}
                        </Project>
                    </Slide>
                ))}
            </div>

            <div className="dots">
                {PROJECTS.map((_, index) => (
                    <label key={`label-${index}`} htmlFor={`slide${index + 1}`} className={index === currentSlide ? 'is-active' : ''}></label>
                ))}
            </div>

        </div>

    );
}