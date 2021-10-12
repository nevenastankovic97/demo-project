import React, { useEffect, useState } from 'react';
import '../App.css';
import axios from 'axios';


const Gallery = () => {
    const [stateList, setStateList] = useState([]);
    const [listaAlbuma, setListaAlbuma] =useState([]);
    const [listaSlika, setListaSlika] =useState([]);

    useEffect(async () => {
        const myRes = await axios.get(
            'http://jsonplaceholder.typicode.com/albums',
            { params: {_limit: 5} }
        );
        setListaAlbuma(myRes.data);
    }, []);
    
    
    
    const klikFunkcija =async (albumId) => {
        const myRes = await axios.get(
            'http://jsonplaceholder.typicode.com/photos',
            { params: { albumId:albumId, _limit:10 } }
        );
        setListaSlika(myRes.data)
    }

        

    return (
        <>
        <div className='gallery'>
            {listaAlbuma.map((album, index) => {
                return (
                    <div className="buttoni-hover" key={album.Id}>
                        <button className="dropdown-hover" onClick={() => klikFunkcija(album.id)}>
                           <a className="hoverGallery"> {album.id} </a>
                        </button>
                    </div>
                    
                );
            })}
        </div> 
        <div className="pict">
            {listaSlika.map((item, index) => {
                return (
                    <div key={item.id}>
                        <img src={item.url} id={item.id} title={item.title}  alt="blbla" />
                    </div>
                )
            })}
        </div>
        </>
    )
   
}

export default Gallery;

