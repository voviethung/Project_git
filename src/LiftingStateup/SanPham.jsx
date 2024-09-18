//rafce
import React from 'react'

const SanPham = (props) => {
    const {spItem,handleChangeState,themGioHang} = props;
  return (
    <div className='card'>
        <img src={spItem.hinhAnh} className='w-100' alt='...' height={350} />
        <div className='card-body'>
            <h3>{spItem.tenSP}</h3>
            <p>{spItem.giaBan.toLocaleString()}</p>
            <button className='btn btn-dark' onClick={()=>{
                handleChangeState(spItem)
            }}>Xem chi tiết</button>

            <button className='btn btn-primary ms-2' onClick={()=>{
              themGioHang(spItem)

            }}>Thêm vào giỏ hàng
              <i className='fa fa-cart-plus'></i>
            </button>
        </div>
    </div>
  )
}

export default SanPham