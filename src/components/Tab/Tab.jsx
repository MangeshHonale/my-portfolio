import './Tab.css';

export default function Tab({ children, label, isActive = false, onClick }) {
    return (
        <button
            className={`tab ${isActive ? 'is-active' : ''}`}
            name={label}
            onClick={onClick}
            type="button"
        >
            {children}
        </button>
    );
}