import { useState } from 'react';
import './App.css';
import Catalog from './Catalog';
import {list} from './list.js';
import Button from './Button.js';

function Shop(){
const [photos, setPhotos] = useState(list);
  const chosenPhotos = (searchTerm) =>{
const newPhotos =list.filter(element =>element.searchTerm === searchTerm);
setPhotos(newPhotos);
  }

  return (
    <div >
      <div className='cont'>
        <h2 className='back'>Free Standart shipping ab 100 fr</h2>
      </div>
      <Button filteredPhotos={chosenPhotos}/>
      <Catalog anyshop={photos}/>
    </div>
  );

  }

export default Shop;