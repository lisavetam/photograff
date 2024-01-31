import './App.css';
import { data } from './data';
import { useState } from 'react';

function Gallery (){
    const [foto, setFoto] =useState (0);
    const { name, image} = data[foto];
  
  
    const previousFoto =() =>{
      setFoto (foto =>{
  foto --;
  if (foto <0) {
    foto =data.length -1;
  }
  return foto;
      })
      }
  
  
  const nextFoto =() =>{
  setFoto (foto =>{
    foto ++;
    if (foto > data.length -1){
  foto= 0
    }
    return foto;
  })
  }


    return (
  
<div>
    <div className='container header'>
<h1>Gallery</h1>
</div>
<div className='container'>

     <img src={image} width="1000px" alt='Art'/>
     </div>
      <div className='container'>
     <h3>{name}</h3>
     </div>

<div className='btn container'>
<button onClick={previousFoto}>Previous</button>
<button onClick={nextFoto}>Next</button>
</div>
 </div>

)}

export default Gallery;