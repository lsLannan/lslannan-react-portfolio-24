import '../styles/Experience.css';

export default function Experience() {
    return (
        <div>
            <h1>EXPERIENCE</h1>
            <img className='timeline' src={require('../images/experience-timeline-v2.png')} alt="experience timeline"/>
            <img className='mobile-timeline' src={require('../images/mobile-timeline.png')} alt="experience timeline"/>
        </div>
    );
}