import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { handleChangeInputAction } from '../redux/reducers/userReducer';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const RegisterForm = () => {
  const { userRegister } = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChangeInput = (e) => {
    let { id, value } = e.target;
    const action = handleChangeInputAction({ id, value });
    dispatch(action);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('https://shop.cyberlearn.vn/api/Users/signup', userRegister);
      alert('Đăng ký thành công');
      console.log('Kết quả:', res.data.content); // Xử lý kết quả trả về từ API
      navigate('/profile');
    } catch (err) {
      console.log('Đăng ký thất bại', err);
    }
  };

  return (
    <div className='container'>
      <h2>Registration</h2>
      <form onSubmit={handleSubmit}>
        {/* ID Field (Hidden) */}
        {/* <input type="hidden" id="id" defaultValue={0} value={userRegister.id} /> */}

        {/* Email Field */}
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" className="form-control" id="email" placeholder="Enter your email" value={userRegister.email} onChange={handleChangeInput} />
        </div>

        {/* Password Field */}
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" className="form-control" id="password" placeholder="Enter your password" value={userRegister.password} onChange={handleChangeInput} />
        </div>

        {/* Name Field */}
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" className="form-control" id="name" placeholder="Enter your name" value={userRegister.name} onChange={handleChangeInput} />
        </div>

        {/* Gender Field */}
        <div className="form-group">
          <label htmlFor="gender">Gender</label>
          <select
          className="form-control" id="gender" value={userRegister.gender} onChange={(e) => {
            const value = e.target.value === 'true'; // Chuyển đổi chuỗi thành boolean
            handleChangeInput({ id: 'gender', value });
          }}>            
          <option value="true">Male</option>
          <option value="false">Female</option>
          </select>
        </div>

        {/* <select
          className="form-control" id="gender" value={userRegister.gender} onChange={(e) => {
            const value = e.target.value === 'true'; // Chuyển đổi chuỗi thành boolean
            handleChangeInput({ id: 'gender', value });
          }}>
          <option value="true">Male</option>
          <option value="false">Female</option>
        </select> */}


        {/* Phone Field */}
        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input onChange={handleChangeInput} type="text" className="form-control" id="phone" placeholder="Enter your phone number" value={userRegister.phone} />
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary mt-2">Submit</button>
      </form>
    </div>
  );
};

export default RegisterForm;
