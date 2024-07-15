import Layout from "../../components/layout/Layout";

const products = [
  {
    id: 1,
    name: "Nike Air Force 1 07 LV8",
    href: "#",
    price: "₹47,199",
    originalPrice: "₹48,900",
    discount: "5% Off",
    color: "Orange",
    size: "8 UK",
    imageSrc:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/54a510de-a406-41b2-8d62-7f8c587c9a7e/air-force-1-07-lv8-shoes-9KwrSk.png",
  },
  {
    id: 2,
    name: "Nike Blazer Low 77 SE",
    href: "#",
    price: "₹1,549",
    originalPrice: "₹2,499",
    discount: "38% off",
    color: "White",
    leadTime: "3-4 weeks",
    size: "8 UK",
    imageSrc:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e48d6035-bd8a-4747-9fa1-04ea596bb074/blazer-low-77-se-shoes-0w2HHV.png",
  },
  {
    id: 3,
    name: "Nike Air Max 90",
    href: "#",
    price: "₹2219 ",
    originalPrice: "₹999",
    discount: "78% off",
    color: "Black",
    imageSrc:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/fd17b420-b388-4c8a-aaaa-e0a98ddf175f/dunk-high-retro-shoe-DdRmMZ.png",
  },
];

const CartPage = () => {
  return (
    <Layout>
      <section>
        <div className="wrapper_cart">
          <div className="container">
            <div className="row">
              <div className="col-12 col-md-6">
                {products.map((item, index) => {
                  return (
                    <div key={index} className="row my-3 border border-1 p-3">
                      <div className="col-12 col-md-3">
                        <img src={item.imageSrc} alt="" width="100" />
                      </div>
                      <div className="col-12 col-md-6">
                      <p>{item.name}</p>
                      <p>{item.price}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="col-12 col-md-6 my-3 p-3">
                <h4>Price Details:</h4>
                <p>Price (3 items): Rs. 99209</p>
                <p>Discount: Rs. 200</p>
                <p>Total Amount:  Rs. 99009</p>
                <button type="btn" className="btn btn-success"> Buy now</button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default CartPage;
