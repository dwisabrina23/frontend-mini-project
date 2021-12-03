import React, { useState } from 'react';
import { useHistory} from 'react-router-dom';
import useCreateOrder from '../Hooks/useCreateOrder';

import './form.css';

function OrderForm({user_id}) {
  const history = useHistory();
  const {createOrder, loadingCreate} = useCreateOrder();
  const formKosong = {
    nama: '',
    email: '',
    phone: '',
    address: '',
    notes: '',
    status: 'request',
    service_id: 0
  };
  const formError = {
    nama: '',
    email: '',
    phone: '',
    service_id: ''
  };

  const [data, setData] = useState(formKosong);
  const [errMsg, setErrMsg] = useState(formError);
  const isAlpha = /^[A-Za-z ]*$/;
  const isEmail =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const isPhoneNum = /^[0-9]{10, 15}$/;

  const validateFormValue = (name, value) => {
    //validate name
    if (name === 'nama' && !isAlpha.test(value)) {
      setErrMsg({ ...formError, nama: 'nama harus berupa huruf' });
    } else if (isAlpha.test(value)) {
      setErrMsg({ ...formError, nama: '' });
    }
    //validate email
    if (name === 'email' && !isEmail.test(value)) {
      setErrMsg({ ...formError, email: 'masukan email yang valid!' });
    } else if (isEmail.test(value)) {
      setErrMsg({ ...formError, email: '' });
    }
    //validate phone
    if (name === 'phone' && !isPhoneNum.test(value)) {
      setErrMsg({ ...formError, phone: 'masukkan nomor hp yang valid' });
    } else if (isPhoneNum.test(value)) {
      setErrMsg({ ...formError, phone: '' });
    }
    if (name === 'service_id' && value !== 0) {
      setErrMsg({ ...formError, service_id: '' });
    }
    if (name === 'address' && value !== "") {
      setErrMsg({ ...formError, service_id: '' });
    }
  };

  const validateOnSubmit = () => {
    setErrMsg(() => {
      const errorMessageArr = Object.keys(errMsg).map((key) => {
        if (data[key] === '') {
          const err = `${key.charAt(0).toUpperCase() + key.slice(1)} cannot be empty`;

          return { [key]: err };
        }
        return { [key]: '' };
      });
      const updatedErrorMessage = errorMessageArr.reduce((previousValue, currentValue) => {
        return { ...previousValue, ...currentValue };
      }, {});
      return updatedErrorMessage;
    });
  };

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    validateFormValue(name, value);
    setData({
      ...data,
      [name]: value
    });
  };

  const createNewOrder = (newOrder) => {
      createOrder({
          variables:{
            nama:  newOrder.nama,
            notes:  newOrder.notes,
            address: newOrder.address,
            email:  newOrder.email,
            phone:  newOrder.phone,
            user_id:  newOrder.user_id,
            service_id: newOrder.service_id
          }
      })
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    const validForm = Object.keys(data).filter((key) => key !== 'message' && data[key] !== '');

    if (validForm.length >= 3) {
      const newData = {
            nama:  data.nama,
            notes:  data.notes,
            address: data.address,
            email:  data.email,
            phone:  data.phone,
            user_id:  user_id,
            service_id: parseInt(data.service_id),
      };
      console.log(newData)
      createNewOrder(newData)
      setData(formKosong)
      history.push('/');
    } else {
      validateOnSubmit();
    }
  };

  return (
    <div className="container py-3">
      <div className="row">
        <div className="col">
          <div className="card shadow">
            <h3
              className="card-header text-center"
              style={{ fontFamily: 'monospace', fontWeight: 600, color:"white", backgroundColor:"#015351"}}>
              ORDER AND APOINTEMENT FORM
            </h3>
            <div className="card-body">
              {/* <h2 className="mb-3">Contact Us</h2> */}
              <form className="form needs-validation" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col">
                    <div className="mb-3 has-validation">
                      <label htmlFor="fullname" className="form-label">
                        Full Name<sup id="bintang">*</sup>
                      </label>
                      <input
                        name="nama"
                        value={data.nama}
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        id="fullname"
                        placeholder="Your full name here.."
                      />
                      <span className="error-msg">{errMsg.nama}</span>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="email" className="form-label">
                        Email Address<sup id="bintang">*</sup>
                      </label>
                      <input
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="example@domain.com"
                      />
                      <span className="error-msg">{errMsg.email}</span>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="phone" className="form-label">
                        Phone Number<sup id="bintang">*</sup>
                      </label>
                      <input
                        name="phone"
                        value={data.phone}
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        id="phone"
                        placeholder="085737xxxxxx"
                      />
                      <span className="error-msg">{errMsg.phone}</span>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="address" className="form-label">
                        Address
                      </label>
                      <input
                        name="address"
                        value={data.address}
                        onChange={handleChange}
                        type="text"
                        className="form-control"
                        id="address"
                        placeholder="Your full address name here.."
                      />
                      <span className="error-msg">{errMsg.address}</span>
                    </div>
                  </div>
                  <div className="col">
                    <div className="mb-3">
                      <label htmlFor="service_id" className="form-label">
                        service_id
                      </label>
                      <select
                        name="service_id"
                        value={data.service_id}
                        onChange={handleChange}
                        className="form-select"
                        aria-label="Default select example"
                        id="service_id"
                        style={{border:"1px solid #FE7C00"}}>
                        <option selected>Select Service</option>
                        <option value="1">Package Bronze</option>
                        <option value="2">Package Silver</option>
                        <option value="3">Package Gold</option>
                        <option value="5">Japanese Style</option>
                        <option value="6">Pop Art</option>
                        <option value="7">Doodle</option>
                        <option value="10">Cubism</option>
                        <option value="9">Abstract</option>
                        <option value="11">Botany and Planty</option>
                      </select>
                      <span className="error-msg">{errMsg.service_id}</span>
                    </div>
                    <div className="mb-3">
                      <label htmlFor="notes" className="form-label">
                        Notes
                      </label>
                      <textarea
                        name="notes"
                        value={data.notes}
                        onChange={handleChange}
                        rows={5}
                        cols={30}
                        className="form-control"
                        placeholder="Share your project title and ideas here.."
                        id="notes"></textarea>
                    </div>
                    <button 
                      type="submit" 
                      className="submit btn btn-primary rounded-pill mb-3 text-white" 
                      style={{
                        backgroundColor: "#FE7C00",
                        border:"1px solid #FE7C00"
                    }}>
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderForm;
