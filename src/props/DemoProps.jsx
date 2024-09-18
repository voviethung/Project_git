//rafce
import React, { useState } from 'react'
import CardProduct from './CardProduct'
import ArticleItem from './ArticleItem'
import ModalComponent from './ModalComponent'
import ChangeCarColor from '../DemoState/ChangeCarColor'
import ChangeFontSize from '../DemoState/ChangeFontSize'
import DemoPropsChildren from './DemoPropsChildren'
import TinkerApp from '../DemoState/TinkerApp'
import DemoPropsCallback from './DemoPropsCallback'
const DemoProps = () => {
    const data1 = {title:'ABC',content:'abc123',like:1000,dislike:1,view:1000};
    const data2 = {title:'XYZ',content:'321321',like:50,dislike:21,view:200};
    const [login,setLogin] = useState(false);

    const renderLogin = () => {
        if(login) {
            return <h3>Hello Nam</h3>
        }else {
            return <button className='btn btn-success' onClick={()=>{
                setLogin(true)
            }}>Login</button>
        }
    }

  return (
    <div className='container'>
        <>
        <h3>Danh sách sản phẩm</h3>
        <div className='row'>
            <div className='col-3'>
                <CardProduct tenSanPham="Sản phầm A" gia={1000} />
            </div>
            <div className='col-3'>
                <CardProduct tenSanPham="Sản phẩm B"  />
            </div>
            <div className='col-3'>
                <CardProduct tenSanPham="Sản phẩm C" />
            </div>
        </div>
        <h3>Danh mục bài viết</h3>
        <ArticleItem contentArticle={data1}/>
        <ArticleItem contentArticle={data2}/>
        <hr />
        <h3>Props: {`<JSXElement />`}</h3>
        <ModalComponent title="LoginForm" contentJSX={
            <>
                <div className='form-group'>
                    <input className='form-control' placeholder="username" />
                </div>
                <div className='form-group mt-2'>
                    <input className='form-control' placeholder="password" />
                </div>
            </>
        }/>
        <ModalComponent title="ChangeColorApp" contentJSX={
            <ChangeCarColor />
        }/>
        <ModalComponent title="changeFonSize" contentJSX={
            <ChangeFontSize />
        }/>

        <DemoPropsChildren title="jsxElement Children">
            <h3>ABC</h3>
            <ChangeCarColor />
        </DemoPropsChildren>
        <ModalComponent title="Apptiker" contentJSX={<TinkerApp/>} />
         <hr />
         </>
         <h3>Demo callback</h3>
    
         <DemoPropsCallback renderCondition={renderLogin} />
    </div>
  )
}

export default DemoProps