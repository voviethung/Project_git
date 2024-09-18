import React from 'react'

const PhoneCard = (props) => {
    const {dataItem} = props;
  return (
    <div className='card'>
        <img src={`https://picsum.photos/id/${dataItem.id}/200/200`} alt='...' />
        <div className='card-body'>
            <h3>{dataItem.name}</h3>
            <p>{dataItem.price}</p>
            <button className='btn btn-dark'>Add to cart</button>
        </div>
    </div>
  )
}

export default PhoneCard