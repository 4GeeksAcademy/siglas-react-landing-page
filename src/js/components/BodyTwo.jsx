import React from "react";
import image from "../../img/big-project-image.png";

const BodyTwo = () => {
  return (<>
    <div className="col-xl-3 col-md-6 col-sm-12">
      <div className="card h-100 text-center " >
        <img src={image} className="card-img-top img-fluid" alt="image" />
        <div className="card-body ">
          <h5 className="card-title">Card title</h5>
          <p className="card-text ">
            Some quick example text to build on the card title and make up the bulk of
            the card's content. text to build on the card title and make up the card's content.
          </p>
        </div>
        <div className="card-footer">
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </div>
    </div>
  </>
  )
}
export default BodyTwo