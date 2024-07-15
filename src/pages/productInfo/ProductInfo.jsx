import React from 'react'
import Layout from '../../components/layout/Layout'

const ProductInfo = () => {
  return (
    <Layout>
      <div className="container my-5">
        <div className="row">
            <div className="col-12 col-md-6">
                <img src="https://i.pinimg.com/736x/e4/61/f2/e461f2246b6ad93e2099d98780626396.jpg" alt="" width="500" height="500" className='img-fluid' />
            </div>
            <div className="col-12 col-md-6">
                <h1>Product name: Lorem ipsum dolor sit amet.</h1>
                <p>stars: *****</p>
                <h5>Rs. 9000.00</h5>
                <h6>Description :</h6>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Numquam incidunt deserunt sunt, ex sequi itaque hic quaerat cum soluta voluptatem fugit deleniti explicabo, quasi voluptates error, minima expedita mollitia sit doloribus esse voluptate? Repudiandae perferendis excepturi, odit porro fugit enim nemo facere inventore quibusdam optio ut quidem necessitatibus et ipsa ea a. Necessitatibus voluptate et recusandae nemo quisquam laboriosam ab sed consectetur laborum omnis, eaque accusamus officia officiis molestias eos enim, cumque voluptatibus dignissimos. Quidem cumque consequatur dolore cum labore facere magnam atque iste officiis ab quas laboriosam unde facilis, animi maiores? Quo ducimus eius enim, dolorem quas fugiat deserunt?</p>
                <button type='btn' className='btn btn-primary'>Add to cart</button>
            </div>
        </div>
      </div>
    </Layout>
  )
}

export default ProductInfo
