import './search.css';
function Search(props) {
    const {value, onValueChange} = props;
    return (
        <div className="search">
                <input 
                    className="search-input"
                    type="search"
                    placeholder="ค้นหารูปภาพ" 
                    value={value}
                    onChange={(event) => {onValueChange(event.target.value)}}
                />
        </div>
    );
}

export default Search;
