//rafce
import React, { useState } from 'react'
import CarItem from './CarItem'
import ModalCar from './ModalCar'

const data = [
    {
        "id": 1,
        "name": "black car",
        "img": "./img/CarBasic/products/black-car.jpg",
        "price": 1000
    },
    {
        "id": 2,
        "name": "red car",
        "img": "./img/CarBasic/products/red-car.jpg",
        "price": 2000
    },
    {
        "id": 3,
        "name": "silver car",
        "img": "./img/CarBasic/products/silver-car.jpg",
        "price": 3000
    },
    {
        "id": 4,
        "name": "Steel car",
        "img": "./img/CarBasic/products/steel-car.jpg",
        "price": 4000
    }
]
const EXCarStore = () => {
    const [carState, setCarState] = useState({
        "id": 2,
        "name": "red car",
        "img": "./img/CarBasic/products/red-car.jpg",
        "price": 2000
    })
    return (
        <div className='container'>
            <h3 className='text-center'>Car store</h3>
            <div className='row'>
                {data.map((carItem,index)=>{
                    return <div className='col-3' key={index}>
                    <CarItem dataCarItem={carItem} handleChangeCar={setCarState}/>
                    {/* <button onClick={()=>{
              setCarState(carItem)
            }} type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modalId">
                detail
            </button> */}
           
                </div>
                })}
              
            </div>
            <ModalCar carModal={carState}/>
        </div>
    )
}

export default EXCarStore