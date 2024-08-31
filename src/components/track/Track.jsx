const Track = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="wrapper_tracks mt-4">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="wrapper_track border border-1 mb-2 text-center rounded-3">
                  <img src="./src/assets/icons/free-delivery.gif" width="100" height="80" alt="icons" className="img-fluid" loading="lazy" />
                  <h5 className="mb-1 text-uppercase">Fast And Free Delivery</h5>
                  <p>
                  Free delivery for all orders over ₹ 1000
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="wrapper_track border border-1 mb-2 text-center rounded-3">
                <img src="./src/assets/icons/24-7.gif" width="100" height="80" alt="icons" className="img-fluid" loading="lazy" />
                  <h5 className="mb-1 text-uppercase">24/7 Customer Support</h5>
                  <p>
                  Friendly 24/7 customer support
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="wrapper_track border border-1 mb-2 text-center rounded-3">
                <img src="./src/assets/icons/money-bag.gif" alt="icons" width="100" height="80" className="img-fluid" loading="lazy" />
                  <h5 className="mb-1 text-uppercase">Money Back Guarantee</h5>
                  <p>
                  We return money within 30 days
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Track;
