import React, { useEffect, useState } from "react";
import { getData, postData } from "./firebase/function/function";

const Form = () => {
  const [newdata, setnewdata] = useState({
    fname: "",
    email: "",
    message: "",
  });
  const changeData = (e) => {
    setnewdata({ ...newdata, [e.target.name]: e.target.value });
  };

  const allsubmit = () => {
    postData(newdata);

    setnewdata({
      fname: "",
      email: "",
      message: "",
    });
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      <div className="container">
        <div className="card">
          <div className="left">
            <img src="https://images.unsplash.com/photo-1659706994835-fb804722b0f2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80" />
          </div>
          <div className="right">
            <h2>Contact Us</h2>
            <div className="contact">
              <div className="form-container">
                <form className="form">
                  <div className="username">
                    <input
                      onChange={changeData}
                      type="text"
                      name="fname"
                      value={newdata.fname}
                      placeholder="Enter your Name"
                    />
                  </div>
                  <div className="useremail">
                    <input
                      onChange={changeData}
                      name="email"
                      value={newdata.email}
                      type="email"
                      placeholder="Enter your email"
                      required
                    />
                  </div>
                  <div className="usermessage">
                    <input
                      onChange={changeData}
                      value={newdata.message}
                      name="message"
                      type="text"
                      placeholder="Enter your message"
                      required
                    />
                  </div>
                  <div className="usersubmit">
                    <input
                      onClick={allsubmit}
                      type="submit"
                      defaultValue="Contact Us"
                    />
                  </div>
                </form>
              </div>
              <div className="address">
                <div className="email"></div>
                <div className="location"></div>
                <div className="social">
                  <span>
                    <a href="#">
                      <i className="fab fa-facebook" />
                    </a>
                  </span>
                  <span>
                    <a href="#" target="_blank">
                      <i className="fab fa-instagram" />
                    </a>
                  </span>
                  <span>
                    <a href="#" target="_blank">
                      <i className="fab fa-twitter" />
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
