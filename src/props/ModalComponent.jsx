import React from 'react'

const ModalComponent = (props) => {
  return (
    <div className='w-50 shadow shadow-lg rounded bg-default mx-auto d-block my-2' style={{minHeight:300}}>
      <h3 className='modal-title p-3'>{props.title}</h3>
      <hr />
      <div className='modal-lg p-3'>
          {props.contentJSX}
      </div>
    </div>
  )
}

export default ModalComponent