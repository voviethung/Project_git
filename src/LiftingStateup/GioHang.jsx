import React from 'react'

const GioHang = (props) => {
    const {gioHang,tangGiamSoLuong} = props;

    const tinhTongTien = () => {
        //reduce - cách 1
        // const tongTien = gioHang.reduce((tt,item,index) => {
        //     tt += item.soLuong * item.giaBan;
        //     return tt;
        // },0);
        //vòng for - cách 2
        let tongTien = 0;
        for(let item of gioHang){
            tongTien += item.soLuong * item.giaBan;
        }

        return tongTien.toLocaleString();
    }
    return (
        <div className='container'>
            <h3>Giỏ hàng ({gioHang.length} - Tổng tiền : {tinhTongTien()})</h3>
            <table className='table'>
                <thead>
                    <tr>
                        <th>Mã SP</th>
                        <th>Hình ảnh</th>
                        <th>Tên SP</th>
                        <th>Giá bán</th>
                        <th>Số lượng</th>
                        <th>Thành tiền</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {gioHang.map((itemGioHang)=>{
                        return <tr key={itemGioHang.maSP}>
                        <th>{itemGioHang.maSP}</th>
                        <th>
                            <img src={itemGioHang.hinhAnh} width={50} alt='...' />
                        </th>
                        <th>{itemGioHang.tenSP}</th>
                        <th>{itemGioHang.giaBan.toLocaleString()}</th>
                        <th>
                            <button className='btn btn-primary mx-2' onClick={()=>{
                                tangGiamSoLuong(itemGioHang.maSP,1)
                            }}>+</button>
                            <input className='form-control d-inline' style={{width:50}} value={itemGioHang.soLuong} onChange={(e)=>{
                                props.thayDoiSoLuong(itemGioHang.maSP, e.target.value);
                            }}/>
                            <button className='btn btn-primary mx-2' onClick={()=>{
                                tangGiamSoLuong(itemGioHang.maSP,-1)

                            }}>-</button>

                        </th>
                        <th>{(itemGioHang.soLuong * itemGioHang.giaBan).toLocaleString()}</th>
                        <th>
                            <button className='btn btn-danger me-2' onClick={()=>{
                                props.xoaGioHang(itemGioHang.maSP)
                            }}>Xoá</button>
                        </th>
                    </tr>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default GioHang