import React from 'react'

const DemoPropsChildren = (props) => {
    //props.children: là nội dung <>children</> của thẻ component (JSXElement)
  return (
    <div>
        <h3>{props.title}</h3>
        {props.children}
    </div>
  )
}

export default DemoPropsChildren