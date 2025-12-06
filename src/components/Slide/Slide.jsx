
import '../Slider/Slider.css';

export default function Slide({ children }) {
    return (
        <div className="slide">
            <div className="slide-inner">{children}</div>
        </div>
    );
}