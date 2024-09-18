import React from 'react'

const CarItem = (props) => {
  const {dataCarItem,handleChangeCar} = props;
  return (
    <div className='card'>
        <img src={dataCarItem.img} alt='...' className='w-100' />
          {/* Modal trigger button */}
          <div className='card-body'>
            <h3>{dataCarItem.name}</h3>
            <p>{dataCarItem.price}</p>
            <button onClick={()=>{
              handleChangeCar(dataCarItem)
            }} type="button" className="btn btn-primary btn-lg" data-bs-toggle="modal" data-bs-target="#modalId">
                detail
            </button>
          </div>
          
    </div>
  )
}

export default CarItem