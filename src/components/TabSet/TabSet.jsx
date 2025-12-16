import { useState } from 'react';
import Tab from '../Tab/Tab.jsx';
import WorkTimeline from '../WorkTimeline/WorkTimeline.jsx';
import './TabSet.css';
import Slider from '../Slider/Slider.jsx';
import SkillSet from '../SkillSet/SkillSet.jsx';
import Credentials from '../Credentials/Credentials.jsx';
import { useRef, useImperativeHandle  } from 'react';

export default function TabSet({ref}) {
    const tabs = [
        { label: 'Work Experience', key:"experience", content: <WorkTimeline/> },
        { label: 'Projects', key:"projects", content: <Slider/> },
        { label: 'Credentials', key:"credentials", content: <Credentials/> },
        { label: 'Skills', key:"skills", content: <SkillSet/> }
    ];

    const [activeIndex, setActiveIndex] = useState(0);
    const tabSet = useRef();
    useImperativeHandle(ref, () => {
        return {
            selectTab(tabId){
                tabSet.current.scrollIntoView();
                setActiveIndex(tabs.findIndex((tab) => tab.key === tabId));
            }
        }
    });

    return (
        <div className="tabset" ref={tabSet}>
            <div className="tabset-header" role="tablist" aria-label="Sections">
                {tabs.map((t, i) => (
                    <Tab
                        key={t.key}
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