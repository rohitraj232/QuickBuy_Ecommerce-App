import { useContext, useState } from "react"
import myContext from "../../context/myContext"
import { useNavigate } from "react-router-dom";

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
      <div class="container my-5">
        <label for="exampleFormControlInput1" class="form-label">Search Your Favourite Product....</label>
        <input value={search} onChange={(e) => setSearch(e.target.value)} type="text" class="form-control" id="exampleFormControlInput1" placeholder="Search here" />
      </div>

      {/* search dropdown */}
      <div className="container mb-5">
        {search &&
          <div className="border border-2 w-50 rounded-3 shadow-sm p-3">
            {filterSearchData.length > 0 ?
              <>
                {filterSearchData.map((item, index) => {
                  return (
                    <div key={index} onClick={() => navigate(`/productInfo/${item.id}`)}>
                      <div className="d-flex">
                        <img src={item.productImageUrl} alt="product-image" width="50" />
                        {item.title}
                      </div>
                    </div>
                  )
                })}
              </>  
              :
              <>
                <div>
                  <h5>product not found, please search another product....</h5>
                </div>
              </>
            }
          </div>}
      </div>
    </>
  )
}

export default SearchBar
