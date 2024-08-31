import React from 'react'

const trendingItems = [
    {
        image: "/assets/banner/girl.jpg",
        name: "clothing"
    },
    {
        image: "/assets/banner/handbag.jpg",
        name: "handbag"
    },
    {
        image: "/assets/banner/shoe.jpg",
        name: "shoe"
    },
]

const TrendingBanner = () => {
  return (
    <>
      <section>
        <div className="container">
            <div className="row">
                {trendingItems.map((item, index) => {
                    return(
                        <div key={index} className="col-12 col-md-4">
                            <div className="wrapper_trendingItems cursor-pointer">
                                <img src={item.image} alt="trending item image" width="416" height="209" className='img-fluid' />
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
      </section>
    </>
  )
}

export default TrendingBanner
