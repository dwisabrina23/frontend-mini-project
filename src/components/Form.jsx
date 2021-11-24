import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { wasValidateData } from "../store/formSlice";
import './form.css';

function Form() {
  const dispatch = useDispatch();
  const history = useHistory();

  const formKosong = {
    nama: "",
    email: "",
    phone: "",
    nationality: "",
    message: "",
  };
  const formError = {
    nama: "",
    email: "",
    phone: "",
    nationality: "",
  };

  const [data, setData] = useState(formKosong);
  const [errMsg, setErrMsg] = useState(formError);
  const isAlpha = /^[A-Za-z ]*$/;
  const isEmail=/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;  
  const isPhoneNum = /^[0-9]{10, 15}$/;

  const validateFormValue = (name, value) => {
    //validate name
    if(name === 'nama' && !isAlpha.test(value)){
      setErrMsg({...formError, nama: "nama harus berupa huruf"})
    }else if(isAlpha.test(value)){
      setErrMsg({...formError, nama: ""})
    }
    //validate email
    if(name === 'email' && !isEmail.test(value)){
      setErrMsg({...formError, email: "masukan email yang valid!"})
    }else if(isEmail.test(value)){
      setErrMsg({...formError, email: ""})
    }
    //validate phone
    if(name === 'phone' && !isPhoneNum.test(value)){
      setErrMsg({...formError, phone: "masukkan nomor hp yang valid"})
    }else if(isPhoneNum.test(value)){
      setErrMsg({...formError, phone: ""})
    }
    //validate nationality
    if(name === 'nationality' && value !== ""){
      setErrMsg({...formError, nationality: ""})
    }
  };

  const validateOnSubmit = () => {
		setErrMsg(() => {
			const errorMessageArr = Object.keys(errMsg).map((key) => {
				if (data[key] === "") {
					const err = `${
						key.charAt(0).toUpperCase() + key.slice(1)
					} cannot be empty`;

					return { [key]: err };
				}
				return { [key]: "" };
			});
			const updatedErrorMessage = errorMessageArr.reduce(
				(previousValue, currentValue) => {
					return { ...previousValue, ...currentValue };
				},
				{}
			);
			return updatedErrorMessage;
		});
	};

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    validateFormValue(name, value);
    setData({
      ...data,
      [name]: value,
    })
  }

  const handleSubmit = (event) =>{
    event.preventDefault()

    const validForm = Object.keys(data).filter(
      (key) => key !== "message" && data[key] !== ""
    )

    if(validForm.length >=4){
      const newData = {
        nama: data.nama,
        email: data.email,
        phone: data.phone,
        nationality: data.nationality,
        message: data.message
      }
      dispatch(wasValidateData(newData));
      history.push('/review');
    }else{
      validateOnSubmit();
    }
  }

  return (
      <div
        // className="col-lg col-md col-sm px-4"
        className="card form-contact-wrapper"
        style={{ marginLeft: "50px", marginTop: "2.5em" }}
      >
        {/* <h2 className="mb-3">Contact Us</h2> */}
        <form className="form needs-validation" onSubmit={handleSubmit}>
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
            <label htmlFor="nationality" className="form-label">
              Nationality
            </label>
            <select
              name="nationality"
              value={data.nationality}
              onChange={handleChange}
              className="form-select"
              aria-label="Default select example"
              id="nationality"
            >
              <option selected>Selected</option>
              <option value="Indonesia">Indonesia</option>
              <option value="Thailand">Thailand</option>
              <option value="Japan">Japan</option>
            </select>
            <span className="error-msg">{errMsg.nationality}</span>
          </div>
          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              name="message"
              value={data.message}
              onChange={handleChange}
              rows={5}
              cols={30}
              className="form-control"
              placeholder="Leave your message here"
              id="message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="submit btn btn-primary rounded-pill mb-3"
          >
            Submit
          </button>
        </form>
      </div>
  );
}

export default Form;
