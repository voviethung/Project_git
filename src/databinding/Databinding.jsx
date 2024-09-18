//rafce
import React from 'react'

const Databinding = () => {
    const title = "cybersoft";
    const img = 'https://i.pravatar.cc';
    const prod = {
        id: 1,
        name: 'iphone',
        price: 1000,
        img: 'https://picsum.photos/id/1/200/200'
    }

    const renderCard = () => {

        //Để binding hàm thì giá trị return của hàm phải là string, boolean, number hoặc jsx
        return <div className='card w-25'> 
            <img alt='prodimg' src={prod.img} />
            <div className='card-body'>
                <h3>{prod.name}</h3>
                <p>{prod.price}</p>
                <button className='btn btn-dark'>Add to cart</button>
            </div>
        </div>
    }
    return (
        <div className='container'>
            <h1>Databinding - interpolation</h1>
            <p id="title">{title}</p>
            <h1>{title}</h1>
            <img className='d-block w-25' src={img} alt="..." />
            {renderCard()}
            <input className='form-control d-inline w-25' value={prod.name} />

        </div>
    )
}

export default Databinding