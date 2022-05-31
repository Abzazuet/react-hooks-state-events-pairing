import React from "react";
import { AiFillLike, AiFillDislike } from 'react-icons/ai';
function Header({ title, views, date, likes, dislikes }) {

    return (
        <header>
            <h1>{title}</h1>
            <p>{views} Views | Uploaded {date}</p>
            <button>{likes} <AiFillLike /></button>
            <button>{dislikes} <AiFillDislike /></button>
        </header>
    )
}

export default Header;