import './FilePreview.css'; 
export default function FilePreview(props){
    return (
        <iframe src={props.src} className="preview"></iframe>
    );
}