import React, { useState } from "react";

const AddBlogComp = () => {
  const [obj, setobj] = useState({});
  const [inputs, setinputs] = useState([]);
  const set = (event) => {
    setobj({ ...obj, [event.target.name]: event.target.value });
  };
  const Create = () => {
    setinputs((inputs) => [...inputs, { id: inputs.length + 1 }]);
  };
  const radiocheck = (event) => {
    setobj({ ...obj, Status: event.target.id });
  };
  const set1 = (event, Obj, index) => {
    const result = { ...Obj, [event.target.name]: event.target.value };
    inputs.splice(index, 1, result);
    setinputs([...inputs]);

    // inputs.filter(object=>{ return object.id==Obj.id})

    //    const response= inputs.filter(object=>object.id==Obj.id)
    //     console.log(response);
  };
  return (
    <div>
      <div className="checkout-wrap ptb-100">
        <div className="container">
          <div className="row">
            <div className="col-xxl-8 col-xl-7 col-lg-7">
              <form action="#" className="checkout-form">
                <div className="row">
                  <div className="col-lg-12">
                    <h3 className="checkout-box-title">Add your Blogs</h3>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="Title"
                        value={obj.Title ? obj.Title : ""}
                        onChange={set}
                        placeholder="Enter your Title"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="Author"
                        value={obj.Author ? obj.Author : ""}
                        onChange={set}
                        placeholder="Enter the Author Name"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <input
                        type="text"
                        name="Heading"
                        value={obj.Heading ? obj.Heading : ""}
                        onChange={set}
                        placeholder="Enter the Heading"
                        required
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-group">
                      <textarea
                        name="Description"
                        value={obj.Description ? obj.Description : ""}
                        onChange={set}
                        placeholder="Enter the Description"
                        id=""
                      ></textarea>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="Category"
                        value={obj.Category ? obj.Category : ""}
                        onChange={set}
                        placeholder="Enter your Category"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <a className="btn-two w-100 d-block">
                        Upload Heading Image
                        <i className="flaticon-right-arrow" />
                      </a>
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <input
                        type="text"
                        name="Tags"
                        value={obj.Tags ? obj.Tags : ""}
                        onChange={set}
                        placeholder="Enter your Tags"
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-group">
                      <a className="btn-two w-100 d-block" onClick={Create}>
                        Create Sub-Heading
                        <i className="flaticon-right-arrow" />
                      </a>
                    </div>
                  </div>
                  {inputs.map(function (input, index) {
                    return (
                      <div className="row" key={index}>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              type="text"
                              name="Sub_Heading"
                              onChange={(e) => set1(e, input, index)}
                              placeholder={`Enter the Sub Heading-${input.id}`}
                            />
                          </div>
                        </div>
                        <div className="col-lg-6">
                          <div className="form-group">
                            <input
                              type="text"
                              name="Sub_Heading_Description"
                              onChange={(e) => set1(e, input, index)}
                              placeholder={`Enter the Sub Heading Description-${input.id}`}
                            />
                          </div>
                        </div>
                      </div>
                    );
                  })}
                  <div className="col-lg-12">
                    <div
                      className="checkout-box"
                      style={{ backgroundColor: "transparent" }}
                    >
                      <div className="checkout-details">
                        <div className="bill-details">
                          <div
                            style={{ display: "flex", flexWrap: "nowrap" }}
                            className="select-payment-method mt-20"
                          >
                            <div>
                              <span style={{ fontSize: "20px" }}>Status:</span>
                            </div>
                            <div>
                              <input
                                type="radio"
                                onClick={radiocheck}
                                id="Active"
                                name="Status"
                              />
                              <label htmlFor="Active">Active</label>
                            </div>
                            <div>
                              <input
                                type="radio"
                                onClick={radiocheck}
                                id="In-Active"
                                name="Status"
                              />
                              <label htmlFor="In-Active">In-Active</label>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-12 mt-4">
                    <div className="form-group mb-0">
                      <button type="submit" className="btn-one">
                        Submit
                        <i className="flaticon-right-arrow" />
                      </button>
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div className="col-xxl-4 col-xl-5 col-lg-5">
              <div className="sidebar">
                <div className="checkout-box">
                  <h4 className="cart-box-title">Your Order</h4>
                  <div className="cart-total">
                    <div className="cart-total-wrap">
                      <div className="cart-total-item">
                        <p>Product Name</p>
                        <b>Total</b>
                      </div>
                      <div className="cart-total-item">
                        <p>Subtotal</p>
                        <span>$463.00</span>
                      </div>
                      <div className="cart-total-item">
                        <p>Shipping</p>
                        <span>$30.00</span>
                      </div>
                      <div className="cart-total-item">
                        <p>Coupon</p>
                        <span>$0.00</span>
                      </div>
                      <div className="cart-total-item">
                        <p>Order Total</p>
                        <span>$43.00</span>
                      </div>
                      <div className="cart-total-item">
                        <p>
                          <b>Payable Total</b>
                        </p>
                        <span>$450.00</span>
                      </div>
                    </div>
                    <a href="checkout.html" className="btn-two w-100 d-block">
                      Proceed To Checkout
                      <i className="flaticon-right-arrow" />
                    </a>
                  </div>
                </div>
                <div className="checkout-box">
                  <h4 className="cart-box-title">Direct Order By Bank</h4>
                  <div className="checkout-details">
                    <p>
                      Make your payments directly to your bank account Use your
                      order ID as the payment reference. Your order will not be
                      sent until the funds in your account have been cleared.
                    </p>
                    <div className="bill-details">
                      <div className="select-payment-method mt-20">
                        <div>
                          <input type="radio" id="test3" name="radio-group" />
                          <label htmlFor="test3">Paypal</label>
                        </div>
                        <div>
                          <input type="radio" id="test2" name="radio-group" />
                          <label htmlFor="test2">Postpaid Payment</label>
                        </div>
                      </div>
                      <div className="form-check checkbox style2">
                        <input
                          className="form-check-input"
                          type="checkbox"
                          id="test_2"
                        />
                        <label className="form-check-label" htmlFor="test_2">
                          I've read &amp; accept the{" "}
                          <a href="terms-conditions.html">
                            Terms &amp; Conditions
                          </a>
                        </label>
                      </div>
                      <div className="checkout-footer mt-4">
                        <button
                          type="button"
                          className="btn-one d-block w-100 mt-10"
                        >
                          Place Order
                          <i className="flaticon-right-arrow" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBlogComp;
