import React from 'react'

const Errorcomp = () => {
  return (
    <div>
       <div className="error-wrap ptb-100">
  <div className="container">
    <div className="row">
      <div className="col-lg-8 offset-lg-2">
        <div className="error-content">
          <img src="assets/img/404.webp" alt="Iamge" />
          <h2>Oops! Page Not Found</h2>
          <p>The page you are looking for might have been removed had its name changed or is temporarily
            unavailable.</p>
          <a href="index.html" className="btn-one">Back To Home<i className="flaticon-right-arrow" /></a>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  )
}

export default Errorcomp