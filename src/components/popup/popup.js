import './popup.css';
function Popup(props) {
    const {item, onItemClose} = props;
    return (
        <div className="popup">
            <div className="popup-bg" onClick={onItemClose}>
                <div className="popup-content">
                    <img src={item.thumbnailURL}/>
                    <h4>{item.title}</h4>
                </div>
            </div>
        </div>
    );
}

export default Popup;
