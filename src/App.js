import { useState } from 'react';
import './App.css';
import Header from './components/header/header';
import Item from './components/item/item';
import Popup from './components/popup/popup';
import Search from './components/search/search';
import items from './data/itemData';

function App() {

    const [selectedItem, setSelectedItem] = useState(null)
    const [search, setSearch] = useState('');

    function onItemClick(theItem){
        setSelectedItem(theItem);
    }

    function onItemClose(){
        setSelectedItem(null);
    }

    const itemElements = items.filter((item) => {
        return item.title.includes(search);
    }).map((item, index) =>{
        return <Item key={index} item={item} onItemClick={onItemClick} />
    });

    let popups = null;
    if(!!selectedItem) {
        popups = <Popup item={selectedItem} onItemClose={onItemClose} />
    }

    return (
        <div className="App">
            <Header />
            <section className="section">
                <div className="container">
                    <Search value={search} onValueChange={setSearch}/>
                    <div className="app-grid">
                        {itemElements}
                    </div>
                </div>
            </section>
            {popups}
        </div>
    );
}

export default App;
