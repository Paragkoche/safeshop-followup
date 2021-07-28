import React from "react";
import validator from "validator";
import * as api from "../api";
import { Button, Form } from "react-bootstrap";
import { useHistory } from "react-router-dom";
const Phone = () => {
  const his = useHistory();
  if (window.localStorage.getItem("phone")) {
    his.push("/followup");
  }
  const [Phones, setPhone] = React.useState({
    phoneNumber: "",
  });
  const sub: any = (e: Event) => {
    e.preventDefault();
    if (validator.isMobilePhone(Phones.phoneNumber)) {
      api.phone(Phones).then((r) => {
        if (!r.error || r.error === undefined) {
          window.localStorage.setItem("phone", Phones.phoneNumber);
          his.push("/followup");
        } else {
          window.alert(
            "your number is invalid in this application plz contact me \n my email is paragkoche0@gmail.com"
          );
        }
      });
    }
  };
  return (
    <div className="col-sm-12">
      <form onSubmit={sub}>
        <Form.Group className="needs-validation">
          <Form.Label>Your Phone Number</Form.Label>
          <Form.Control
            value={Phones.phoneNumber}
            onChange={(e) => setPhone({ phoneNumber: e.target.value })}
            maxLength={10}
          />
          <Button type="submit" className="w-100 mt-2 mb-2 " variant="primary">
            Submit
          </Button>
        </Form.Group>
      </form>
    </div>
  );
};

export default Phone;
