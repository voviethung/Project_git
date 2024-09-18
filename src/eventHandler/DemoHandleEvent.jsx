import React from 'react'

const DemoHandleEvent = () => {


    const handleLike = (e) => {
        e.target.style.background = 'green';
        console.log('liked')
    }

    const handleClickPage = (pageIndex) => {
        console.log(pageIndex)
    }
    return (
        <div className='container'>
            <h1>Event handler</h1>
            <button className='btn btn-dark' onClick={(e) => {
                //anonymous funcition
                alert('clicked');
            }}>Click me</button>
            <br />
            <br />
            <button className='btn btn-danger' onClick={handleLike}>Like</button>
            <button className='btn btn-danger' onClick={handleLike}>Like</button>
            <button className='btn btn-danger' onClick={handleLike}>Like</button>
            <br /><br />
            <h3>paging</h3>
            <button className='btn btn-primary me-2' onClick={(e) => {
                handleClickPage(1)
            }}>1</button>
            <button className='btn btn-primary me-2' onClick={(e) => {
                handleClickPage(2)
            }}>2</button>
            <button className='btn btn-primary me-2' onClick={(e) => {
                handleClickPage(3)
            }}>3</button>
            <button className='btn btn-primary me-2' onClick={handleClickPage.bind(this,4)}>4</button>

            <div className='border border-danger mt-2' onMouseEnter={(e)=>{
                e.target.style.background = 'red';
                e.target.style.color = 'white';
            }} onMouseLeave={(e)=> {
                e.target.style.background = 'black';
                e.target.style.color = 'green';
            }}>
                Lorem ipsum dolor sit amet.
            </div>
            
            <input className='form-control d-inline mt-5 w-25' onChange={(e)=>{
                let value = e.target.value;
                document.getElementById('tag_p').innerHTML = value;
            }} />

            <p id="tag_p" className='alert alert-danger mt-2'></p>

        </div>
    )
}

export default DemoHandleEvent
// function a(page) {
//     return function aphay (){
//         console.log(page)
//     }
// }