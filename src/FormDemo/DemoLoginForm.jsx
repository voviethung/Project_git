import React, { useState } from 'react'

const DemoLoginForm = () => {
    const [userLogin, setUserLogin] = useState({
        email: '',
        password: '',
        phone:''
    });
    const [error, setError] = useState({
        email: '',
        password: '',
        phone:''
    })
    console.log(userLogin);
    const handleSubmit = (e) => {
        e.preventDefault();//Chặn reload browser
        // Chặn submit khi form không hợp lệ 
        // Hợp lệ khi (các error bằng rỗng và form đã nhập liệu)
        for(let key in error){
            if(error[key] !== '') { //Chỉ cần 1 lỗi xảy ra (objectError có ít nhất 1 trường có giá trị)
                alert('Dữ liệu không hợp lệ !');
                return; //Dừng hàm submit
            }
        }
        for(let key in userLogin) {
            if(userLogin[key] === '' && key !== 'phone' ) {
                alert('Dữ liệu không hợp lệ !');
                return;
            }
        }
        //Xử lý submit
        console.log('submit');

    }

    const handleChangeInput = (e) => {
        //state value
        const { name, value } = e.target;
        let attrType = e.target.getAttribute('data-type');
        //state error
        let messError = '';
        if(value === ''){ //nếu value rỗng thì lỗi 
            messError = `${name} is required !`;
        }else {
            //xét lỗi nếu như đã nhập liệu thì xét lỗi regex
            switch(attrType){
                case 'email' :{
                    const regexEmail =  /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
                    if(!regexEmail.test(value)) {
                        messError = `${name} is invalid! (ex: abc@gmail.com)`;
                    }
                };break;
                case 'phone': {
                    const regexPhone = /^(0[1-9]{1}[0-9]{8}|(84|0)(9[0-9]|8[1-9]|7[0-9]|6[2-9]|5[0-9]|4[0-9]|3[2-9]|2[0-9]|1[0-9])[0-9]{7})$/;
                    if(!regexPhone.test(value)){
                        messError = `${name} is invalid (ex: 0909090909)`
                    }
                }break;
            }
            

        }
        setError({
            ...error,
            [name]: messError
        })
        //setState(cuối cùng)
        setUserLogin({
            ...userLogin,
            [name]: value
        });
        
    }

    return (
        <form className='container' onSubmit={handleSubmit}>
            <div className='w-50 mx-auto card'>
                <div className='card-header bg-dark text-white text-center'>
                    <h3>Login</h3>
                </div>
                <div className='card-body'>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input data-type="email" className='form-control' id="email" name='email' placeholder='input email' onChange={handleChangeInput} />
                        {error.email && <p className='text text-danger'>{error.email}</p> }
                    </div>
                    <div className='form-group'>
                        <label htmlFor='phone'>phone</label>
                        <input data-type="phone" className='form-control' id="phone" name='phone' placeholder='input phone' onChange={handleChangeInput} />
                        {error.phone && <p className='text text-danger'>{error.phone}</p> }
                    </div>
                    <div className='form-group mt-2'>
                        <label htmlFor='password'>Password</label>
                        <input data-type="password" className='form-control' id="password" name='password' type='password' placeholder='input password' onChange={handleChangeInput} />
                        {error.password && <p className='text text-danger'>{error.password}</p> }

                    </div>
                    <div className='text-center'>
                        <button type='submit' className='btn btn-success mt-2'>Login</button>
                    </div>
                </div>
            </div>

        </form>
    )
}

export default DemoLoginForm