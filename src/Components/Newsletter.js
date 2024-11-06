import React from 'react'

const Newsletter = () => {
  return (
    <div className="modal fade" id="newsletter-popup" tabIndex={-1} aria-labelledby="newsletter-popup" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered modal-xl">
                        <div className="modal-content">
                            <button type="button" className="btn_close" data-bs-dismiss="modal" aria-label="Close">
                                <i className="fi fi-rr-cross" />
                            </button>
                            <div className="modal-body">
                                <div className="newsletter-bg bg-f" />
                                <div className="newsletter-content">
                                    <img src="assets/img/newsletter-icon.webp" alt="Image" className="newsletter-icon" />
                                    <h2>New user? Create an account or sign in..</h2>
                                    <form action="#" className="newsletter-form">
                                        <button type="button" className="btn-one">Sign in<i className="flaticon-arrow-right" /></button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
    </div>
  )
}

export default Newsletter