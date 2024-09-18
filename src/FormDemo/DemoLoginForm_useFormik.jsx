import React from 'react'
import {useFormik} from 'formik'; //get value
import * as yup from 'yup'; //validation
const DemoLoginForm_useFormik = () => {
    const frmLogin = useFormik({
        initialValues: {
            email :'',
            password:'',
            phone:'',
            gender: 'male',
            server: 'sing'
        },
        validationSchema: yup.object().shape({
            email: yup.string().required('email is a required').email('email is invalid !'),
            phone: yup.string().required('phone is required').matches(/^(0[1-9]{1}[0-9]{8}|(84|0)(9[0-9]|8[1-9]|7[0-9]|6[2-9]|5[0-9]|4[0-9]|3[2-9]|2[0-9]|1[0-9])[0-9]{7})$/,'phone is invalid (ex: 0909090909)'),
            password:yup.string().required('password is required').min(6,'6-10 ký tự').max(10,'6-10 ký tự')
        }),
        onSubmit:(values) => {
            console.log(values)
        }
    })
    return (
        <form className='container' onSubmit={frmLogin.handleSubmit}>
            <div className='w-50 mx-auto card'>
                <div className='card-header bg-dark text-white text-center'>
                    <h3>Login</h3>
                </div>
                <div className='card-body'>
                    <div className='form-group'>
                        <label htmlFor='email'>Email</label>
                        <input data-type="email" className='form-control' id="email" name='email' placeholder='input email' onChange={frmLogin.handleChange} onBlur={frmLogin.handleBlur}/>
                        {frmLogin.errors.email && <p className='alert alert-danger my-1'>{frmLogin.errors.email}</p>}
                    </div>
                    <div className='form-group'>
                        <label htmlFor='phone'>phone</label>
                        <input data-type="phone" className='form-control' id="phone" name='phone' placeholder='input phone' onChange={frmLogin.handleChange} onBlur={frmLogin.handleBlur} />
                        {frmLogin.errors.phone && <p className='alert alert-danger my-1'>{frmLogin.errors.phone}</p>}
                        
                    </div>
                    <div className='form-group mt-2'>
                        <label htmlFor='password'>Password</label>
                        <input data-type="password" className='form-control' id="password" name='password' type='password' placeholder='input password'  onChange={frmLogin.handleChange} onBlur={frmLogin.handleBlur}/>
                        {frmLogin.errors.password && <p className='alert alert-danger my-1'>{frmLogin.errors.password}</p>}
                    </div>
                    <div className='form-group mt-2'>
                        <label htmlFor='gender'><b>Gender</b></label>
                        <label htmlFor='female' className='ms-2'>Female</label>
                        <input className='form-check-input mx-2' id="female" name='gender' type='radio' placeholder='' value="female"  onChange={frmLogin.handleChange}/>
                        <label htmlFor='male' className='ms-2'>Male</label>
                        <input className='form-check-input mx-2' id="male" name='gender' type='radio' placeholder='' value="male"  onChange={frmLogin.handleChange}/>
                    </div>
                    <div className='form-group'>
                        <label htmlFor='server'>Server</label>
                        <select className='form-control' name="server" onChange={frmLogin.handleChange}>
                            <option value={'sing'}>Singapore</option>
                            <option value={'VN'}>Việt Name</option>
                            <option value={'china'}>Trung Quốc</option>
                        </select>
                    </div>
                    <div className='text-center'>
                        <button type='submit' className='btn btn-success mt-2'>Login</button>
                    </div>
                </div>
            </div>

        </form>
    )
}

export default DemoLoginForm_useFormik