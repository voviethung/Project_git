import React from 'react'

const DemoPropsCallback = (props) => {
  return (
    <div className='bg-dark p-3 text-end text-white'>
        {props.renderCondition()}

    </div>
  )
}

export default DemoPropsCallback