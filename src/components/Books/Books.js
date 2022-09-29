import React from 'react';
import './Books.css';

const Books = (props) => {
    const { book } = props;
    const { picture, time, title } = book;
    return (
        <div className='books'>
            <img src={picture} alt="" />
            <h2>{title}</h2>
            <h4>Time required: {time}hours</h4>
            <button className='btn-books'>Add To List</button>
        </div>
    );
};

export default Books;