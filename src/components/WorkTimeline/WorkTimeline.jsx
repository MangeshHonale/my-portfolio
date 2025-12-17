import './WorkTimeline.css';
import WorkExperience from '../WorkExperience/WorkExperience';
import { WORK_EXPERIENCE } from './dataWorkExperience.js';

export default function WorkTimeline() {
    return (
        <section className="timeline-section">
            <div className="timeline">
                {WORK_EXPERIENCE.map((work, index) => (
                    <span key={index}>
                        <WorkExperience {...work}/>
                    </span>
                ))}
            </div>
        </section>
    );
}