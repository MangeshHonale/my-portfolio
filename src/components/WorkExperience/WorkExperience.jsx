import '../WorkTimeline/WorkTimeline.css';

export default function WorkExperience(props) {
    return (
        <article className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
                <header className="timeline-header">
                    <div>
                        <h3 className="role">{props.title}</h3>
                        <p className="company">{props.company}</p>
                    </div>
                    <div className="meta">
                        <span className="duration">{props.duration}</span>
                        <span className="location">{props.location}</span>
                    </div>
                </header>

                <div className="timeline-body">
                    <h4 className="section-heading">Roles & Responsibilities</h4>
                    <ul className="responsibilities">
                        {props.responsibilities.map((responsibility, index) => (
                            <li key={index}>{responsibility}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </article>
    );
}