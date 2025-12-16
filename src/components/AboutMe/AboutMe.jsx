import profilePic from "../../assets/profile-pic.jpeg";
import QuickIntro from "../QuickIntro/QuickIntro";
import ContactMe from "../ContactMe/ContactMe.jsx";
import resumeLink from '../../assets/Mangesh Honale_SF_Resume.pdf';
import Modal from "../Modal/Modal.jsx";
import FilePreview from "../FilePreview/FilePreview.jsx";
import './AboutMe.css';
import { useState, useRef, useImperativeHandle } from "react";

export default function AboutMe({ref}) {
    const ele = useRef();
    const [isContactMeModalOpen, setIsContactMeModalOpen] = useState(false);
    const [isResumePreviewOpen, setIsResumePreviewOpen] = useState(false);

    function handleContactMeModalClose() {
        setIsContactMeModalOpen(false);
    }

    function handleResumePreviewClose(){
        setIsResumePreviewOpen(false);
    }

    useImperativeHandle(ref, () => {
        return{
            focus(){
                ele.current.scrollIntoView();
            }
        }
    });
    return (
        <span id="about-me" ref={ele}>
            <div className="hero-inner">
                <div className="hero-main">
                    <div className="profile-pic box">
                        <img src={profilePic} alt="Mangesh Honale" />
                    </div>
                    <div className="title-section box">
                        <h1 className="hero-title">Mangesh Honale</h1>
                        <p className="hero-subtitle">Salesforce Architect & Developer</p>
                    </div>

                    <div className="hero-content box">

                        <p className="hero-intro">
                            I am a Salesforce certified Application Architect and Developer with extensive experience architecting and delivering scalable CRM solutions for enterprise environments. Over the years I have worked across multiple domains of the Salesforce ecosystem to deliver high impact projects. My work is focused on solving complex business challenges through clean, maintainable engineering practices and high-performance system design.
                            <br /><br />I hold a B.Tech in Computer Science from Vishwakarma Institute of Technology, Pune, where I built a strong foundation in software engineering and problem-solving. I am driven by precision, scalability, and the pursuit of continuous learning, and I am committed to delivering high-impact technology that enables organizations to operate efficiently and grow confidently.
                        </p>
                        <div className="hero-actions">  
                            <button type="button" className="btn btn-primary" onClick={() => setIsResumePreviewOpen(true)}>View Resume</button>
                            <button type="button" className="btn btn-ghost" onClick={() => setIsContactMeModalOpen(true)}>Contact Me</button>
                        </div>
                    </div>
                </div>
                <QuickIntro />
            </div>
            {isContactMeModalOpen && <ContactMe onClick={() => setIsContactMeModalOpen(false)}
                onClose={handleContactMeModalClose} />}
            {isResumePreviewOpen && <Modal headerTitle="Mangesh Honale Resume"
                                onClose={handleResumePreviewClose}><FilePreview src={resumeLink}/></Modal>}
        </span>
    );
}