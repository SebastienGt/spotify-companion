import './App.css';
import React, { useState, useEffect } from 'react';
import { token, getCurrentPlaying } from '../spotify';
import { catchErrors } from '../utils';
import currentPlaying from './CurrentPlaying';




const CurrentPlaying = () => {
    const [Playing, setCurrentPlaying] = useState(null);

    useEffect(() => {
    const fetchData = async () => {
        const { data } = await getCurrentPlaying();
        setCurrentPlaying(data);
    };
    catchErrors(fetchData());
    }, []);

    return (
        <div>
            <h4> Current Playing song</h4>
            <div>
                { Playing ? (
                    <div>
                        <a> { Playing.item.name } </a>
                        <img src={Playing.item.album.images[2].url } alt="Album"/>
                    </div>
                ) : (
                    <h1>No current song playing</h1>
                )
                }
            </div>
        </div>
    );
}


export default CurrentPlaying;