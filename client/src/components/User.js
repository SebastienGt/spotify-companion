import React from 'react';
import { token } from '../spotify';
import { logout, getUser, getCurrentPlaying, getUserInfo } from '../spotify'
const User = () => {
  return (
    <div>
      <h2>Bienvenue dans Spotify Lyrics !</h2>
      <br/>
      <a>A deux, nous avons créé ce site pour avoir les paroles des musiques Spotify que nous écoutions.</a>
      <br/>
      <a>Nous espérons que le site vous plaira !</a>
      <br/>
      <br/>
      <a>Un projet de Sébastien Friedberg et Alexandre Gomez.</a>
    </div>
  );
}


export default User;
