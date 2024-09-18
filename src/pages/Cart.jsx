import React from 'react'
import { Table } from 'antd'
import { useSelector, useDispatch } from 'react-redux'
import { deleteProductAction, changeQuantityProductAction } from '../redux/reducers/cartReducer';


const Cart = () => {
  //selector: lấy dữ liệu về
  const cartStore = useSelector(state => state.cartSliceReducer.cart);

  // const state = useSelector(state => state);
  // console.log(state)

  //dispatch: gửi dữ liệu lên redux (handleEvent)
  const dispatch = useDispatch();

  const columns = [
    {
      title: '', // Tiêu đề cột, có thể để trống hoặc đặt tên tùy ý
      dataIndex: 'checkbox', // Tên dataIndex để xác định cột này
      render: (value, record) => (
        <input type="checkbox" /> // Hiển thị checkbox trong cột
      )
    },
    {
      title: 'id',
      dataIndex: 'id'
    },
    {
      title: 'img',
      dataIndex: 'image',
      render: (value, record) => {
        return <img src={record.image} width={50} alt="..." />
      }
    },
    {
      title: 'name',
      dataIndex: 'name'
    },

    {
      title: 'price',
      dataIndex: 'price'
    },
    {
      title: 'quantity',
      dataIndex: 'quantity',
      render: (value, record) => {
        return <>
          <button className={'btn btn-dark me-2'} onClick={() => {
            //Tạo ra action bằng hàm action được export từ reducer (rxslice)
            const payload = {
              id: record.id,
              quantity: 1
            }
            const action = changeQuantityProductAction(payload);
            //Đưa action lên reducer
            dispatch(action);
          }}>+</button>
          {value}
          <button className={'btn btn-dark ms-2'} onClick={() => {
            //Tạo ra action bằng hàm action được export từ reducer (rxslice)
            const payload = {
              id: record.id,
              quantity: -1
            }
            const action = changeQuantityProductAction(payload);
            //Đưa action lên reducer
            dispatch(action);
          }}>-</button>
        </>
      }
    },
    {
      title: 'total',
      render: (value, record) => {
        return (record.price * record.quantity).toLocaleString();
      }
    },
    {
      title: 'action',
      render: (value, record) => {
        return <>
          <button className="btn btn-primary" onClick={() => {
            //Tạo ra action
            const action = prodEditForm(record.id);
            /*
              const action = {
                type:'cartReducer/deleteProductAction',
                payload:record.id
              }
            */
            //Dispatch action
            dispatch(action)
          }}>
            EDIT
          </button>
          <button className="btn btn-danger" onClick={() => {
            //Tạo ra action
            const action = deleteProductAction(record.id);
            /*
              const action = {
                type:'cartReducer/deleteProductAction',
                payload:record.id
              }
            */
            //Dispatch action
            dispatch(action)
          }}>
            DELETE
          </button>
        </>
      }
    }
  ]

  console.log(cartStore);
  return (
    <div className='container'>
      <h3>Cart</h3>
      <Table rowKey={'id'} dataSource={cartStore} columns={columns} />
<button className='bg-warning text-white fw-bold'>SUBMIT ORDER</button>
    </div>
  )
}

export default Cart