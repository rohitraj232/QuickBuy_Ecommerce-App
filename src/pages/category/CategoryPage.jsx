import { useNavigate, useParams } from "react-router-dom"
import Layout from "../../components/layout/Layout"
import { useContext } from "react";
import myContext from "../../context/myContext";
import Loader from "../../components/loader/Loader";

const CategoryPage = () => {

    const { categoryname } = useParams();
    const context = useContext(myContext);
    const { loading, getAllProduct } = context;
    const navigate = useNavigate();

    // filter product
    const filterProduct = getAllProduct.filter((obj) => obj.category.includes(categoryname));

    return (
        <Layout>
            <div>
                <div className="container">
                    <h3 className="text-center"> {categoryname} </h3>

                    {loading ?
                        <div>
                            <Loader />
                        </div>

                        :

                        <div className="wrapper_productCards">
                            <div className="row">
                                {filterProduct.length > 0 ?
                                    <>
                                        {filterProduct.map((item, index) => {
                                            const { id, title, price, productImageUrl } = item;
                                            return (
                                                <div key={index} className="col-12 col-md-4 col-lg-3">
                                                    <div className="wrapper_product">
                                                        <img src={productImageUrl} onClick={() => navigate(`/productInfo/${id}`)} alt="" className="img-fluid" />
                                                        <p>QuickBuy</p>
                                                        <h5>{title.substring(0, 20)}</h5>
                                                        <h4>Rs {price}</h4>
                                                        <button className="mt-2">Add to cart</button>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </>

                                    :

                                    <div>
                                        <p>no {categoryname} product found </p>
                                    </div>
                                }


                            </div>
                        </div>

                    }



                </div>
            </div>
        </Layout>
    )
}

export default CategoryPage
