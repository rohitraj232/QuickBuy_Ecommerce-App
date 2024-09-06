import React from 'react'

const trendingItems = [
    {
        image: "/assets/banner/mini-banner1.jpg",
        name: "banner1"
    },
    {
        image: "/assets/banner/mini-banner2.png",
        name: "banner2"
    },
    {
        image: "/assets/banner/mini-banner3.jpg",
        name: "banner3"
    },
]

const TrendingBanner = () => {
    return (
        <>
            <section className='my-5'>
                <div className="container">
                    <div className="row">
                        {trendingItems.map((item, index) => {
                            return (
                                <div key={index} className="col-12 col-md-4">
                                    <div className="wrapper_trendingItems cursor-pointer mb-3">
                                        <img src={item.image} alt="trending item image" width="416" height="209" className='shadow-sm rounded-3 img-fluid' />
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
