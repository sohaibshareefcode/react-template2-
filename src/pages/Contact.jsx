import { useState } from 'react';
import React from 'react'
import { IoCall } from "react-icons/io5";
import Button from '../Button';
function Contact() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  return (
    <div>
        <div className="fromchild">
        <br></br>
        <input
          value={form.firstName}
          onChange={(e) => {
            setForm({
              ...form,
              firstName: e.target.value,
            });
          }}
        />
        <br></br>

        <br></br>
        <input
          value={form.lastName}
          onChange={(e) => {
            setForm({ ...form, lastName: e.target.value });
          }}
        />
        <br></br>

        <br></br>
        <input
          value={form.email}
          onChange={(e) => {
            setForm({ ...form, email: e.target.value });
          }}
        />
        <br></br>
        <br></br>
        {/* <p>
        {form.firstName}{' '}
        {form.lastName}{' '}
        ({form.email})
      </p> */}
        <Button first={"submit"} />
        <div className="local">
          <IoCall /> <span>+923011458998</span>
        </div>
      </div>
    </div>
  )
}

export default Contact
