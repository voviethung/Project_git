import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { NavLink, useLocation, useParams, useSearchParams } from 'react-router-dom'


//Xây dựng giao diện table chứa danh sách sản phẩm và thanh tìm kiếm
const ProductManagement = () => {
  const [arrProduct, setArrProduct] = useState([]);
  const location = useLocation();
  // console.log(location)

  const [search, setSearch] = useSearchParams();
  //Lấy param search từ url về
  const kw = search.get('prodName');
  const handleChange = (e) => {
    //Đưa dữ liệu lên url
    setSearch({
      prodName: e.target.value
    })
  }
  const handleSubmit = (e) => {
    e.preventDefault();

  }
  const getAllProductApi = async () => {
    let url = '';
    if (kw) {
      url = `https://apitraining.cybersoft.edu.vn/api/ProductApi/getall?keyword=${kw}`
    } else {
      url = `https://apitraining.cybersoft.edu.vn/api/ProductApi/getall`;
    }
    const res = await fetch(url);
    const data = await res.json();
    //setState vào arrProduct
    setArrProduct(data);
    console.log(data)

  }
  useEffect(() => {
    //Gọi api
    getAllProductApi();
  }, [kw]);

  return (
    <div className="container my-4">
      <h4>Dashboard</h4>
      <div className="card mt-4">
        <div className="card-header bg-primary text-white">
          Products
          <NavLink to="../add-product" className="btn btn-sm btn-light float-end">New product</NavLink>
        </div>
        <div className="card-body">
          <form className="input-group mb-3" onSubmit={handleSubmit}>
            <input type="text" className="form-control" placeholder="Search products..." onInput={handleChange} />
            <button type={'submit'} className="btn btn-primary" >Search</button>
          </form>
          <div className="table-responsive">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th />
                  <th>NAME</th>
                  <th>IMG</th>
                  <th>PRICE</th>
                  <th>TYPE</th>
                  <th />
                </tr>
              </thead>
              <tbody>
                {arrProduct.map((item) => {
                  return <tr key={item.id}>
                    <td><input type="checkbox" /></td>
                    <td>{item.name}</td>
                    <td><img src={item.img} className="product-img" width={50} /></td>
                    <td>{item.price}</td>
                    <td>{item.type}</td>
                    <td>
                      <NavLink to={`../product-edit/${item.id}`} className="btn btn-sm btn-primary me-1">Edit</NavLink>

                      <NavLink to={`/admin/product/${item.id}`} className="btn btn-sm btn-success me-1">Edit</NavLink>

                      <button onClick={async (e) => {
                        console.log(item.id)
                        if (window.confirm('Bạn có muốn xoá không ?')) {
                          //Gọi api xoá
                          const res = await axios.delete(`https://apitraining.cybersoft.edu.vn/api/ProductApi/delete/${item.id}`);
                          //Sau khi xoá thành công thì load lại api get all product
                          getAllProductApi();

                        }
                      }} className="btn btn-sm btn-danger me-1">Delete</button>
                      {/* <a href="#" className="btn btn-sm btn-info">View detail</a> */}
                    </td>
                  </tr>
                })}

              </tbody>
            </table>
          </div>
          <nav>
            <ul className="pagination justify-content-end">
              <li className="page-item">
                <a className="page-link" href="#">Previous</a>
              </li>
              <li className="page-item"><a className="page-link" href="#">1</a></li>
              <li className="page-item"><a className="page-link" href="#">2</a></li>
              <li className="page-item"><a className="page-link" href="#">3</a></li>
              <li className="page-item">
                <a className="page-link" href="#">Next</a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </div>

  )
}

export default ProductManagement