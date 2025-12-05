import { useState } from 'react';
import Tab from '../Tab/Tab.jsx';
import './TabSet.css';

export default function TabSet() {
    const tabs = [
        { label: 'Work Experience', content: 'Work Experience content goes here.' },
        { label: 'Projects', content: 'Projects content goes here.' },
        { label: 'Skills', content: 'Skills content goes here.' },
        { label: 'Credentials', content: 'Credentials content goes here.' },
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