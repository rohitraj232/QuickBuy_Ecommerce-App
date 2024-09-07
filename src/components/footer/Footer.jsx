import '../../App.css';

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container-fluid p-0">
          <div className="wrapper_footer footer-bg p-3">
            <div className="row p-4">
              <div className="col-12 col-md-6 col-lg-3 col-xl-4">
                <div className="wrapper_about">
                  <h2 className="mb-2">QuickBuy</h2>
                  <p className="text-muted">QuickBuy is a user-friendly eCommerce platform offering fast, convenient shopping with a wide range of products and secure checkout.</p>
                  <h5 >Follow Us</h5>
                  <div className="wrapper_social-media">
                    <img src="/assets/vectors/facebook.png" loading="lazy" width="30" alt="social-media icon" className="me-2 cursor-pointer img-fluid" />
                    <img src="/assets/vectors/instagram.png" loading="lazy" width="30" alt="social-media icon" className="me-2 cursor-pointer img-fluid"  />
                    <img src="/assets/vectors/linkedin.png" loading="lazy" width="30" alt="social-media icon" className="me-2 cursor-pointer img-fluid"  />
                    <img src="/assets/vectors/twitter.png" loading="lazy" width="30" alt="social-media icon" className="me-2 cursor-pointer img-fluid"  />
                    <img src="/assets/vectors/youtube.png" loading="lazy" width="30" alt="social-media icon" className="me-2 cursor-pointer img-fluid"  />
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 col-xl-2">
                <div className="wrapper_links ms-md-3">
                  <h5 className="mb-3">About</h5>
                  <p className="fw-semibold mb-2 cursor-pointer text-muted">About Us</p>
                  <p className="fw-semibold mb-2 cursor-pointer text-muted">Delivery Information</p>
                  <p className="fw-semibold mb-2 cursor-pointer text-muted">Privacy Policy</p>
                  <p className="fw-semibold mb-2 cursor-pointer text-muted">Terms & Conditions</p>
                  <p className="fw-semibold mb-2 cursor-pointer text-muted">Contact Us</p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 col-xl-2">
                <div className="wrapper_support ms-md-4">
                  <h5 className="mb-3">Support</h5>
                  <p className="fw-semibold mb-2 cursor-pointer text-muted">FAQs</p>
                  <p className="fw-semibold mb-2 cursor-pointer text-muted">Reviews</p>
                  <p className="fw-semibold mb-2 cursor-pointer text-muted">Shipping</p>
                  <p className="fw-semibold mb-2 cursor-pointer text-muted">Returns</p>
                  <p className="fw-semibold mb-2 cursor-pointer text-muted">Discounts</p>
                </div>
              </div>
              <div className="col-12 col-md-6 col-lg-3 col-xl-4">
                <div className="wrapper_install ms-md-3">
                  <h5 className="mb-3">Install App</h5>
                  <p className='text-muted fw-semibold'>From App Store or Google Play</p>
                  <div>
                    <img src="/assets/vectors/app-store.jpg" alt="app-store img" className="img-fluid cursor-pointer rounded-2 mb-2" loading="lazy" />
                  </div>
                  <div>
                    <img src="/assets/vectors/google-play.jpg" alt="play-store img" className="img-fluid cursor-pointer rounded-2" loading="lazy" />
                  </div>
                </div>
              </div>
            </div>

            <hr />
            <div className="row px-4 py-2">
              <div className="col-6">
                <h6 className="text-muted">Copyright © 2024 by QuickBuy All rights reserved.</h6>
              </div>
              <div className="col-6">
                <div className="wrapper_payment-img d-flex align-items-center float-end">
                  <p className="me-3 mb-0 fw-bold text-muted">Payment</p>
                  <img src="/assets/vectors/footer-payment.webp" alt="payment img" loading="lazy" className="img-fluid cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  )
}

export default Footer
