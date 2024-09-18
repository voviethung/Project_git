//rafce
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const ShoesPage = () => {
    const [arrProduct, setArrProduct] = useState([]);
    const getAllProductApi = async () => {
        //Gọi api và setState
        const res = await fetch('https://apistore.cybersoft.edu.vn/api/Product');
        const data = await res.json();
        //sau khi có dữ liệu từ api thì ta setState arrProduct
        setArrProduct(data.content);
    }
    const getAllProductAxios = async () =>{
        const res = await axios.get('https://apistore.cybersoft.edu.vn/api/Product');
        //Dữ liệu axios trả về thông res.data
        setArrProduct(res.data.content);
    }

    // useEffect(()=>{
    //     //hàm này sẽ chạy sau khi html render và mỗi khi bất kì hàm setState nào được gọi
    //     getAllProductApi();
    // });

    useEffect(()=>{
        //dependency List: [] thì hàm này chỉ chạy 1 lần sau khi component render
        // getAllProductApi();
        getAllProductAxios();
    },[])


    console.log('mouting');
    return (
        <div className='container'>
            {/* <button className='btn btn-primary' onClick={() => {
                getAllProductApi();
            }}>Get api</button> */}
    
            <h3 className='text-center'>Shoes shop</h3>
            <div className='row'>
                {arrProduct.map((item) => {
                    return <div className='col-4 mt-2' key={item.id}>
                        <div className='card'>
                            <img src={item.image} alt='...' />
                            <div className='card-body'>
                                <h3>{item.name}</h3>
                                <p>{item.price}</p>
                                <button className='btn btn-dark'>
                                    Detail
                                </button>
                            </div>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}

export default ShoesPage