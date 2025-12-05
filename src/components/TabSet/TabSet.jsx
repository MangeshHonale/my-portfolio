import { useState } from 'react';
import Tab from '../Tab/Tab.jsx';
import WorkTimeline from '../WorkTimeline/WorkTimeline.jsx';
import './TabSet.css';
import Slider from '../Slider/Slider.jsx';
import SkillSet from '../SkillSet/SkillSet.jsx';
import Credentials from '../Credentials/Credentials.jsx';

export default function TabSet() {
    const tabs = [
        { label: 'Work Experience', content: <WorkTimeline/> },
        { label: 'Projects', content: <Slider/> },
        { label: 'Skills', content: <SkillSet/> },
        { label: 'Credentials', content: <Credentials/> },
    ];

    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <div className="tabset">
            <div className="tabset-header" role="tablist" aria-label="Sections">
                {tabs.map((t, i) => (
                    <Tab
                        key={t.label}
                        label={t.label}
                        isActive={i === activeIndex}
                        onClick={() => setActiveIndex(i)}
                    >
                        {t.label}
                    </Tab>
                ))}
            </div>

            <div className="tabset-body" role="tabpanel">
                {tabs[activeIndex] && <div className="tab-panel">{tabs[activeIndex].content}</div>}
            </div>
        </div>
    );
}