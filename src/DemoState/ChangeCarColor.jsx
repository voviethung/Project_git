//rafce
import React, { useState } from 'react'

const ChangeCarColor = () => {
    const [imgCar,setImgCar] = useState('/src/assets/img/CarBasic/products/red-car.jpg')
    const handleChangeColor = (color) =>{
        let newImgSrc = `/src/assets/img/CarBasic/products/${color}-car.jpg`;
        setImgCar(newImgSrc);
    }
    return (
    <div className='container'>
        <h3>Change car color</h3>
        <div className='row'>
            <div className='col-6'>
                <img className='w-100' src={imgCar} alt='...' />
            </div>
            <div className='col-6'> 
                <button className='mx-2 btn btn-secondary' onClick={()=>{
                    // handleChangeColor('steel');
                    setImgCar('/src/assets/img/CarBasic/products/steel-car.jpg')
                }}>Steel car</button>
                <button className='mx-2 btn btn-danger' onClick={()=>{
                    handleChangeColor('red')
                }}>Red car</button>
                <button className='mx-2 btn btn-dark' onClick={()=>{
                    handleChangeColor('black')
                }}>black car</button>
                <button className='mx-2 btn btn-default text-dark border border-1' onClick={()=>{
                    handleChangeColor('silver')
                }}>silver car</button>
            </div>
        </div>
    </div>
  )
}

export default ChangeCarColor