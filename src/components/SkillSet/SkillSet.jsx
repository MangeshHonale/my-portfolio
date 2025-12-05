import './SkillSet.css';
import SkillCard from '../SkillCard/SkillCard.jsx';
import { SKILLSET } from './dataSkillSet.js';

export default function SkillSet() {
    return (
        <div class="skills-container">
            {SKILLSET.map((skill, index) => (
                <SkillCard {...skill}
                    key={index}></SkillCard>)
                )}
        </div>

    );
}