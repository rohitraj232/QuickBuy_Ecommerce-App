import "../../App.css"

const HeroSection = () => {
  return (
    <>
      <div id="carouselExampleCaptions" class="carousel slide" data-bs-ride="carousel">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="3" aria-label="Slide 4"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="4" aria-label="Slide 5"></button>
        </div>
        <div class="carousel-inner" data-bs-interval="2000">
          <div class="carousel-item active position-relative">
            <div className="overlay"></div>
            <img src="/assets/banner/banner1.jpg" class="d-block w-100 custom-banner" alt="banner" />
            <div class="carousel-caption d-md-block">
              <h1 className="text-uppercase">The biggest sale</h1>
              <p className="fs-4">Special for today</p>
            </div>
          </div>
          <div class="carousel-item position-relative">
            <div className="overlay"></div>
            <img src="/assets/banner/banner2.jpg" class="d-block w-100 custom-banner" alt="banner" />
            <div class="carousel-caption d-md-block">
              <h1 className="text-uppercase">Summer collection</h1>
              <p className="fs-4">New Arrivals On Sale</p>
            </div>
          </div>
          <div class="carousel-item position-relative">
            <div className="overlay"></div>
            <img src="/assets/banner/banner3.jpg" class="d-block w-100 custom-banner" alt="banner" />
            <div class="carousel-caption d-md-block">
            <h1 className="text-uppercase">The biggest sale</h1>
            <p className="fs-4">Special for today</p>
            </div>
          </div>
          <div class="carousel-item position-relative">
            <div className="overlay"></div>
            <img src="/assets/banner/banner4.jpg" class="d-block w-100 custom-banner" alt="banner" />
            <div class="carousel-caption d-md-block">
            <h1 className="text-uppercase">Summer collection</h1>
            <p className="fs-4">New Arrivals On Sale</p>
            </div>
          </div>
          <div class="carousel-item position-relative">
            <div className="overlay"></div>
            <img src="/assets/banner/banner5.jpg" class="d-block w-100 custom-banner" alt="banner" />
            <div class="carousel-caption d-md-block">
            <h1 className="text-uppercase">The biggest sale</h1>
            <p className="fs-4">Special for today</p>
            </div>
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </>
  )
}

export default HeroSection
