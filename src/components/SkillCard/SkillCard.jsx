import '../SkillSet/SkillSet.css';

export default function SkillCard(props) {
    return (
        <div class="skill-card">
            <h3 class="skill-title">{props.name}</h3>
            <ul class="skill-list">
                {props.skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}