//rafce
import React, { useState } from 'react'

const TinkerApp = () => {
    const [srcImage, setSrcImage] = useState('https://i.pravatar.cc?u=1'); //state default
    const [like,setLike] = useState(1);
    const [dislike,setDislike] = useState(1);
    const handleChangeImage = () => {
        //Tạo số ngẫu nhiên
        let ranNumber = Math.floor(Math.random() * 101);
        //Tạo link hình từ số ngẫu nhiên
        let newImage = `https://i.pravatar.cc?u=${ranNumber}`; 
        //Gọi hàm setState để thay đổi state và render lại component
        setSrcImage(newImage);
    }
    return (
        <div className='container'>
            <h3>Tinker app </h3>
            <span className='badge bg-danger'>
                {like} <i className='fa fa-heart'></i>
            </span>
            <span className='badge bg-dark mx-2'>
               {dislike} <i className='fa fa-thumbs-down'></i>
            </span>
            <div className='card w-25 mx-auto'>
                <div className='card-header bg-danger fs-3 text-white'>Tinker app </div>
                <img src={srcImage} alt='...' />
                <div className='card-body'>
                    <h3>Bob</h3>
                    <p>Love hiking and outdoors</p>
                </div>
                <div className='card-footer p-2 d-flex justify-content-between'>
                    <button className='btn btn-outline-dark' onClick={() => {
                        setDislike(dislike + 1);
                        handleChangeImage()
                    }}>Dislike</button>
                    <button className='btn btn-outline-danger' onClick={() => {
                        setLike(like+1);
                        handleChangeImage();
                    }}>Like</button>
                </div>
            </div>
        </div>
    )
}

export default TinkerApp