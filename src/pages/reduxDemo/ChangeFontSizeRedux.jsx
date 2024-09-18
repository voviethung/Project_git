import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const ChangeFontSizeRedux = () => {
    const fSize = useSelector(state => state.fontSizeReducer)
    const dispatch = useDispatch();
    // const [fSize,setFSize] = useState();

    const changeFontSize = (size) => { //size: 1 | size: -1 
        //action: type: tên action , payload: giá trị gửi lên store
        const action = {
            type: 'CHANGE_FONT_SIZE',
            payload: size
        }
        dispatch(action)

    }


  return (
    <div className='container'>
        <p style={{fontSize:fSize}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae quaerat nisi dolor molestiae? Tenetur ipsa tempore dolor harum eveniet possimus.</p>
        <button className='btn btn-dark me-2' onClick={()=>{
            changeFontSize(1);
        }}>Zoom in</button>
        <button className='btn btn-dark' onClick={()=>{
            changeFontSize(-1);
        }}>Zoom bout</button>

    </div>
  )
}

export default ChangeFontSizeRedux