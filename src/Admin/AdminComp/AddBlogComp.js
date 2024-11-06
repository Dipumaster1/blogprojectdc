import React from 'react'

const AddBlogComp = () => {
    return (
        <div>
            <div className="checkout-wrap ptb-100">
                <div className="container">
                    <div className="row">
                        <div className="col-xxl-8 col-xl-7 col-lg-7">
                            <form action="#" className="checkout-form">
                                <div className="row">
                                    <div className="col-lg-12">
                                        <h3 className="checkout-box-title">Billing Details</h3>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" name="fname" id="fname" placeholder="First Name" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" name="lname" id="lname" placeholder="Last Name" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="email" name="email" id="email" placeholder="Email" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="number" name="phone" id="phone" placeholder="Phone Number" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="text" name="company_name" id="company_name" placeholder="Company Name" />
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <select name="select_country" id="select_country">
                                                <option value={0} data-display="Country">Country</option>
                                                <option>Country</option>
                                                <option value={1}>United States</option>
                                                <option value={1}>Germany</option>
                                                <option value={1}>Russia</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <select name="select_country2" id="select_country2">
                                                <option value={0} data-display="City">State</option>
                                                <option value={1}>New York</option>
                                                <option value={1}>Florida</option>
                                                <option value={1}>Los Angels</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <select name="select_country3" id="select_country3">
                                                <option>City</option>
                                                <option value={0} data-display="City">City</option>
                                                <option value={1}>New York</option>
                                                <option value={2}>Florida</option>
                                                <option value={3}>Los Angels</option>
                                            </select>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <input type="text" name="street" id="street" placeholder="Street" />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <input type="text" name="zip" id="zip" placeholder="ZIP Code" required />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="d-flex align-items-center">
                                            <div className="checkbox style-two form-group me-5">
                                                <input type="checkbox" id="test_3" />
                                                <label htmlFor="test_3">Create An Account</label>
                                            </div>
                                            <div className="checkbox style-two form-group">
                                                <input type="checkbox" id="test_3" />
                                                <label htmlFor="test_3">Ship To A Different Address?</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <textarea name="msg" id="msg" cols={30} rows={10} placeholder="Order Note" defaultValue={""} />
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="checkbox style2">
                                            <input type="checkbox" id="test_10" />
                                            <label htmlFor="test_10">I have read And Accept the <a className="link style1" href="terms-conditions.html"> Terms &amp; Conditions</a></label>
                                        </div>
                                    </div>
                                    <div className="col-lg-12 mt-4">
                                        <div className="form-group mb-0">
                                            <button type="button" className="btn-one">Save Information<i className="flaticon-right-arrow" /></button>
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
                                                <p><b>Payable Total</b></p>
                                                <span>$450.00</span>
                                            </div>
                                        </div>
                                        <a href="checkout.html" className="btn-two w-100 d-block">Proceed To Checkout<i className="flaticon-right-arrow" /></a>
                                    </div>
                                </div>
                                <div className="checkout-box">
                                    <h4 className="cart-box-title">Direct Order By Bank</h4>
                                    <div className="checkout-details">
                                        <p>Make your payments directly to your bank account
                                            Use your order ID as the payment reference.
                                            Your order will not be sent until the funds
                                            in your account have been cleared.</p>
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
                                                <input className="form-check-input" type="checkbox" id="test_2" />
                                                <label className="form-check-label" htmlFor="test_2">
                                                    I've read &amp; accept the <a href="terms-conditions.html">Terms &amp;
                                                        Conditions</a>
                                                </label>
                                            </div>
                                            <div className="checkout-footer mt-4">
                                                <button type="button" className="btn-one d-block w-100 mt-10">Place Order<i className="flaticon-right-arrow" /></button>
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
    )
}

export default AddBlogComp