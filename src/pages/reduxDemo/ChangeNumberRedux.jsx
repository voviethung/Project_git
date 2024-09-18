//rafce
import React from 'react'
//hook dùng để lấy state từ redux về (redux store)
import { useSelector ,useDispatch} from 'react-redux'
const ChangeNumberRedux = () => {
  //hook useSelector dùng để lấy state từ redux về (redux store)
  const number = useSelector(state => state.numberReducer)
  //hook dispatch dùng để đưa dữ liệu lên redux
  const dispatch = useDispatch();

  const handleChangeState = (quantity) => {
    //Để đưa dữ liệu lên store (dùng dispatch )
    const action = {
      type:'CHANGE_QUANTITY', //bắt buộc
      payload: quantity
    }
    //Dùng dispatch để gửi action lên store 
    //Ghi chú: khi hàm dispatch thực thi thì tất cả hàm reducer đều chạy lại
    dispatch(action);

  }


  return (
    <div className='container'>
        <h1>Number: {number} </h1>
        <button className='btn btn-dark me-2' onClick={()=>{
          handleChangeState(1);
        }}>+</button>
        <span>{number}</span>
        <button className='btn btn-dark me-2' onClick={()=>{
          handleChangeState(-1)
        }}>-</button>
    </div>
  )
}

export default ChangeNumberRedux