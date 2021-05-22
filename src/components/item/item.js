import items from '../../data/itemData';
import './item.css';
function Item(props) {
    const {item, onItemClick} = props;
    return (
        <div className="card-img">
            <img src={item.thumbnailURL} onClick={() => {onItemClick(item)}} />
            <h4>{item.title}</h4>
        </div>
    );
}
export default Item;
