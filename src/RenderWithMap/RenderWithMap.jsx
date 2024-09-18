import React from 'react'
import PhoneCard from './PhoneCard';

const data = [
    { id: 1, name: 'phone 1', price: 1000 },
    { id: 2, name: 'phone 2', price: 2000 },
    { id: 3, name: 'phone 3', price: 3000 }
]
const RenderWithMap = () => {


    const renderTrPhone = () => {
        const arrJSX = [];
        for (let item of data) {
            let tagJSX = <tr key={item.id}>
                <td>{item.id}</td> 
                <td>{item.name}</td> 
                <td>{item.price}</td>
            </tr>;
            arrJSX.push(tagJSX); 
        }
        return arrJSX; //output : arrJSX [<tr key={item.id}></tr>,<tr></tr>]
    }

    const renderTrMap = () => {
        const arrJSX = data.map((item)=>{
            return <tr key={item.id}>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.price}</td>
            </tr>;
        });
        console.log('arrJSX',arrJSX)
        return arrJSX; //[<tr key={1}></tr>,<tr key={2}></tr>]
    }


    const renderArrPhone = () => {
        const arrJSX = data.map((item)=> {
            return <div className='col-4' key={item.id}>
                <PhoneCard dataItem={item}/>
            </div>
        })
        return arrJSX;
    }

    return (
        <div className='container'>
            <h3>Table Product</h3>
            <table className='table w-75 mx-auto'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>name</th>
                        <th>price</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {renderTrPhone()} */}
                    {renderTrMap()}
                </tbody>
            </table>

            <h3>List phone</h3>
            <div className='row'>
                {renderArrPhone()}
            </div>
        </div>
    )
}

export default RenderWithMap