import React from "react"
import BodyOne from "./BodyOne"
import BodyTwo from "./BodyTwo"
const Header = () => {
  return (
    <div class="m-3">
      <div class="p-4 mb-4 bg-light border ">
        <div class="container-fluid py-3">
          <h1 class="display-5 fw1-bold"><strong>A Warm Welcome!</strong></h1>
          <p class="col-md-12 fs-4">Using a series of utilities, you can create this jumbotron, just like the one in previous versions of Bootstrap. Check out the examples below for how you can remix and restyle it to your liking.</p>
          <button class="btn btn-primary btn-lg" type="button">Call to Action!</button>
        </div>
      </div>
      <div className="row">
        <BodyOne />
        <BodyTwo />
        <BodyOne />
        <BodyTwo />
      </div>
    </div>
  )
}
export default Header