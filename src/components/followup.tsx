import React from "react";
import { Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import * as api from "../api";
const Followup = () => {
  const history = useHistory();
  if (!window.localStorage.getItem("phone")) {
    history.push("/");
  }
  const [datas, setData] = React.useState({
    FistName: "",
    LastName: "",
    RFT: "",
    SIP: "",
    number: "",
    city: "",
    date: "",
    type: "",
    Result: "",
    ftf: "",
  });
  const subs = (e: any) => {
    e.preventDefault();
    api.what(datas).then((r) => {
      if (!r.error || r.error === undefined) {
        window.alert("data is send");
        setData({
          FistName: "",
          LastName: "",
          RFT: "",
          SIP: "",
          number: "",
          city: "",
          date: "",
          type: "",
          Result: "",
          ftf: "",
        });
      }
    });
  };
  return (
    <form onSubmit={subs}>
      <div className="row">
        <div className="col-sm-6">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            type="text"
            value={datas.FistName}
            onChange={(e) => setData({ ...datas, FistName: e.target.value })}
          />
          <div className="invalid-feedback"> first name is required</div>
        </div>
        <div className="col-sm-6">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            type="text"
            value={datas.LastName}
            onChange={(e) => setData({ ...datas, LastName: e.target.value })}
          />
          <div className="invalid-feedback"> last name is required</div>
        </div>
        <div className="col-sm-12">
          <Form.Label>Invalid By (RFT)</Form.Label>
          <Form.Control
            type="text"
            value={datas.RFT}
            onChange={(e) => setData({ ...datas, RFT: e.target.value })}
          />
          <div className="invalid-feedback">Your Name is required</div>
        </div>
        <div className="col-sm-12">
          <Form.Label>SIP (121)</Form.Label>
          <Form.Control
            type="text"
            value={datas.SIP}
            onChange={(e) => setData({ ...datas, SIP: e.target.value })}
          />
          <div className="invalid-feedback">121 by Name is required</div>
        </div>
        <div className="col-sm-12">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="text"
            value={datas.number}
            onChange={(e) => setData({ ...datas, number: e.target.value })}
          />
          <div className="invalid-feedback">
            Plase enter a valid Phone number for content
          </div>
        </div>
        <hr className="my-4"></hr>
        <div className="col-md-6">
          <Form.Label>City</Form.Label>
          <select
            className="form-select"
            value={datas.city}
            onChange={(e) => setData({ ...datas, city: e.target.value })}
          >
            {[
              "Ahmednagar",
              "Akola",
              "Amravati",
              "Aurangabad",
              "Bhandara",
              "Beed",
              "Buldhana",
              "Chandrapur",
              "Dhule",
              "Gadchiroli",
              "Gondia",
              "Hingoli",
              "Jalgaon",
              "Jalna",
              "Kolhapur",
              "Latur",
              "Mumbai City",
              "Mumbai suburban",
              "Nandurbar",
              "Nanded",
              "Nagpur",
              "Nashik",
              "Osmanabad",
              "Parbhani",
              "Pune",
              "Raigad",
              "Ratnagiri",
              "Sindhudurg",
              "Sangli",
              "Solapur",
              "Satara",
              "Thane",
              "Wardha",
              "Washim",
              "Yavatmal",
            ].map((v, i) => {
              return (
                <option key={i} value={v}>
                  {v}
                </option>
              );
            })}
          </select>
        </div>
        <div className="col-md-6">
          <Form.Label>Date</Form.Label>
          <Form.Control
            value={datas.date}
            onChange={(e) => setData({ ...datas, date: e.target.value })}
            type="date"
          />
        </div>
        <hr className="my-4" />
        <div className="col-md-12">
          <Form.Label>Type</Form.Label>
          <select
            className="form-select"
            value={datas.type}
            onChange={(e) => setData({ ...datas, type: e.target.value })}
          >
            {["Home", "2ND", "3RD", "4TH", "5TH", "RES"].map((v, i) => (
              <option value={v} key={i}>
                {v}
              </option>
            ))}
          </select>
        </div>
        {datas.type === "RES" ? (
          <>
            <hr className="my-4" />
            <div className="col-sm-12">
              <Form.Label>Result</Form.Label>
              <Form.Control
                type="text"
                value={datas.Result}
                onChange={(e) => setData({ ...datas, Result: e.target.value })}
              />
            </div>
          </>
        ) : (
          ""
        )}
        <hr className="my-4" />
        <div className="col-sm-12">
          <Form.Label>FTF</Form.Label>
          <Form.Control
            type="text"
            value={datas.ftf}
            onChange={(e) => setData({ ...datas, ftf: e.target.value })}
          />
        </div>
        <hr className="my-4" />
        <button className="w-100 btn btn-primary btn-lg" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
};

export default Followup;
