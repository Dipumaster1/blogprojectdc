import React, { useRef, useState } from "react";

const AddBlogComp = () => {
  const [obj, setobj] = useState({});
  const [inputs, setinputs] = useState([]);
  const [headingimage, setheadingimage] = useState(null);
  const [images, setimages] = useState([]);
  const [imageserror, setimageserror] = useState(null);
  const image = useRef();
  const multipleimage = useRef();
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
  const upload = (event) => {
    const file = event.target.files[0];
    if (!file) return alert("Image is not uploaded yet.");

    const ext = file.type.split("/");
    if (ext[0] !== "image") return alert("Only image is supported");

    if (
      ext[1] === "png" ||
      ext[1] === "jpg" ||
      ext[1] === "jpeg" ||
      ext[1] === "PNG"
    ) {
      return setheadingimage(file);
    }
    return alert("Only png,jpeg and jpg image is supported");
  };
  function uploads(event) {
    const file = event.target.files;
    if (!file) return alert("No Image is selected");

    let status = images;
    let count = 0;
    for (let i = 0; i < file.length; i++) {
      const ext = file[i].type.split("/");
      if (ext[0] !== "image") {
        count++;
      } else {
        if (
          ext[1] === "png" ||
          ext[1] === "PNG" ||
          ext[1] === "jpg" ||
          ext[1] === "jpeg"
        ) {
          status.push(file[i]);
        } else {
          count++;
        }
      }
    }
    setimages([...status]);
    setimageserror(count);
  }
  console.log(images, imageserror);

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
                    <div
                      className="checkout-box"
                      style={{ backgroundColor: "transparent", padding: "0px" }}
                    >
                      <div
                        className="checkout-details"
                        style={{ paddingLeft: "20px", paddingRight: "20px" }}
                      >
                        <div className="bill-details">
                          <div
                            style={{
                              display: "flex",
                              flexWrap: "nowrap",
                              marginTop: "10px",
                            }}
                            className="select-payment-method"
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
                      <a
                        className="btn-two w-100 d-block"
                        style={{ height: "48px", padding: "9px" }}
                        onClick={Create}
                      >
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
                  <h4 className="cart-box-title">Heading Image</h4>
                  <div className="cart-total">
                    <div className="cart-total-wrap">
                      <img
                        className="img-thumbnail"
                        height={"100%"}
                        width={"100%"}
                        src={
                          headingimage
                            ? URL.createObjectURL(headingimage)
                            : "assets/img/newsletter-bg.webp"
                        }
                        alt=""
                      />
                    </div>
                    <input
                      type="file"
                      onChange={upload}
                      accept="image/*"
                      hidden
                      ref={image}
                    />
                    <a
                      className="btn-two w-100 d-block"
                      onClick={() => image.current.click()}
                    >
                      Upload Heading Image
                      <i className="flaticon-right-arrow" />
                    </a>
                  </div>
                </div>
                <div className="checkout-box">
                  <h4 className="cart-box-title">Upload More Images</h4>
                  <div className="checkout-details">
                    <div className="myimages">
                      <img src="assets/img/newsletter-bg.webp" alt="" />
                      <i>&times;</i>
                    </div>
                    <div className="bill-details">
                      <div className="checkout-footer mt-4">
                        <input
                          ref={multipleimage}
                          multiple={true}
                          onChange={uploads}
                          accept="image/*"
                          type="file"
                          hidden
                        />
                        <button
                          type="button"
                          onClick={() => multipleimage.current.click()}
                          className="btn-two d-block w-100 mt-10"
                        >
                          Upload Images
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
