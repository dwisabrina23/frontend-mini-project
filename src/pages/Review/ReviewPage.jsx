import React from "react";
import './review.css';
import { useHistory } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { resetForm } from "../../store/formSlice";
import SubPageTitle from "../../components/SubPageTitle";
function ReviewPage() {
  const history = useHistory();
  const dispatch = useDispatch();

  //bind data form from store
  const form = useSelector((state) => state.form.forms)
  console.log(form)

  const handleClose = (event) => {
    event.preventDefault();
    dispatch(resetForm());
    history.push("/");
  }
  return (
    <div>
      <SubPageTitle title="Review Message"/>
      <div className="card col-md-8 justify-content-center card-review">
        <table className="table table-borderless col-md-9">
          <tr className="mb-3">
            <td className="label">Full Name</td>
            <td>:</td>
            <td id="fullname">{form.nama}</td>
          </tr>
          <tr>
            <td className="label">Email Adress</td>
            <td>:</td>
            <td id="email">{form.email}</td>
          </tr>
          <tr>
            <td className="label">Phone Number</td>
            <td>:</td>
            <td id="phone">{form.phone}</td>
          </tr>
          <tr>
            <td className="label">Nationality</td>
            <td>:</td>
            <td id="nationality">{form.nationality}</td>
          </tr>
          <tr id="invisible">
            <td>&nbsp;</td>
          </tr>
          <tr id="invisible">
            <td>&nbsp;</td>
          </tr>
          <tr>
            <td colSpan="3" id="message">{form.message}</td>
          </tr>
        </table>

        <div
          className="col-md-5 line justify-content-center"
          style={{"margin": "auto"}}
        ></div>
        <div className="col-md-12 mt-4">
          <div>
            <p className="fs-4 my-0">Thanks for contacting us!</p>
            <p className="fs-4">We will be in touch with you shortly.</p>
          </div>
          <form action="index.html">
            <button
              type="submit"
              onClick={handleClose}
              className="btn rounded-pill px-4 py-2 font-weight-normal button-back"
            >
              Home
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ReviewPage;
