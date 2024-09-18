import React from 'react'

const CarouselProduct = () => {
  return (
<div className="container-fluid">
        <div className="row">
          <div className="col-md-8 d-flex align-items-center justify-content-center">
            <div id="productCarousel" className="carousel slide" data-ride="carousel">
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <img src="./img/image 5.png"
                    className="d-block" alt="Product Image" style={{
                      width: '689px',
                      height: '383px',
                      top: '46px',
                      left: '150px',
                    }} />
                </div>
                {/* Thêm các carousel-item khác nếu cần */}
              </div>
              <a className="carousel-control-prev" href="#productCarousel" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon"
                  aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href="#productCarousel" role="button" data-slide="next">
                <span className="carousel-control-next-icon"
                  aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div className="col-md-4 d-flex flex-column justify-content-center">
            <h3 className='fw-normal fs-3'>Product name</h3>
            <p>Product description....</p>
            <button className="btn btn-warning w-25 rounded-0">Buy now</button>
          </div>
        </div>
      </div>
  )
}

export default CarouselProduct