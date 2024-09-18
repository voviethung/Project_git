//rafce
import React, { useState } from 'react'

const ChangeNumber = () => {
   const [state,setState] = useState(20);
   /*
    state là gì? 
     + state là giá trị thay đổi trên giao diện bởi 1 event
     + setState là hàm làm thay đổi giá trị state đồng thời gọi function component chạy lại với state mới
   */
   //res = [stateDefaut, setState(newState)]
  return (
    <div className='container'>
        <h1>Ví dụ: Tăng giảm số lượng</h1>
        <button className='btn btn-dark' onClick={()=>{
            let newState = state + 1;
            setState(newState);
         
        }}>+</button> 
        <span className='mx-2 fs-1' id="number">{state}</span>
        <button className='btn btn-dark' onClick={()=>{
            setState(state - 1);
        }}>-</button>
    </div>
  )
}

export default ChangeNumber