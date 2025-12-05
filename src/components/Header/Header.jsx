import NavigationBar from "../NavigationBar/NavigationBar";
import './Header.css';

export default function Header() {
    return (
        <header className="site-header">
            <div className="nav-inner">
                <div className="logo">
                    <span className="logo-text">MH</span>
                </div>
                <NavigationBar />
            </div>
        </header>
    );
}