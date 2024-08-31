import { useContext, useState } from "react"
import myContext from "../../context/myContext"
import { useNavigate } from "react-router-dom";
import '../../App.css'

const SearchBar = () => {

  const navigate = useNavigate();

  // getting all product from context
  const context = useContext(myContext);
  const { getAllProduct } = context;

  // search state
  const [search, setSearch] = useState("");

  // filter all search data
  const filterSearchData = getAllProduct.filter((obj) => obj.title.toLowerCase().includes(search)).slice(0, 8)

  return (
    <>
      <div class="container">
        {/* <label for="exampleFormControlInput1" class="form-label">Search Your Favourite Product....</label> */}
        <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" class="form-control mt-3 mt-md-0 search" id="exampleFormControlInput1" placeholder="Search here" />
      </div>

      {/* search dropdown */}
      <div className="container">
        {search &&
          <div className="position-absolute mt-3 border border-2 search mt-3 bg-light rounded-3 shadow-sm p-3">
            {filterSearchData.length > 0 ?
              <>
                {filterSearchData.map((item, index) => {
                  return (
                    <div key={index} onClick={() => navigate(`/productInfo/${item.id}`)}>
                      <div className="d-flex align-items-center cursor-pointer">
                        <img src={item.productImageUrl} alt="product-image" width="50" />
                        <p className="ms-2"> {item.title.length > 15 ? item.title.slice(0, 15) + "..." : item.title} </p>
                      </div>
                    </div>
                  )
                })}
              </>  
              :
              <>
                <div>
                  <h6>Product not found, Please search another product....</h6>
                </div>
              </>
            }
          </div>}
      </div>
    </>
  )
}

export default SearchBar
