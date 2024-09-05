const Track = () => {
  return (
    <>
      <section>
        <div className="container">
          <div className="wrapper_tracks my-5">
            <div className="row">
              <div className="col-12 col-md-6 col-lg-4">
                <div className="wrapper_track border border-1 mb-2 text-center rounded-3">
                  <img src="/assets/icons/free-delivery.gif" width="80" height="80" alt="icons" className="pt-2 img-fluid" loading="lazy" />
                  <h6 className="mb-1 text-uppercase">Fast And Free Delivery</h6>
                  <p>
                    Free delivery for all orders over ₹ 1000
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="wrapper_track border border-1 mb-2 text-center rounded-3">
                  <img src="/assets/icons/24-7.gif" width="80" height="80" alt="icons" className="pt-2 img-fluid" loading="lazy" />
                  <h6 className="mb-1 text-uppercase">24/7 Customer Support</h6>
                  <p>
                    Friendly 24/7 customer support
                  </p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-4">
                <div className="wrapper_track border border-1 mb-2 text-center rounded-3">
                  <img src="/assets/icons/money-bag.gif" alt="icons" width="80" height="80" className="pt-2 img-fluid" loading="lazy" />
                  <h6 className="mb-1 text-uppercase">Money Back Guarantee</h6>
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
