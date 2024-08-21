
const BuyNowModal = ({ addressInfo, setAddressInfo, buyNowFunction}) => {
    return (
        <>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                Buy Now
            </button>

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog modal-dialog-centered">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h1 class="modal-title fs-5" id="exampleModalLabel">Fill Your Details :</h1>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <div className="row">
                                <div className="col-12">
                                    <div class="mb-3">
                                        <input type="text" value={addressInfo.name} onChange={(e) => {setAddressInfo({...addressInfo, name: e.target.value})}} class="form-control" id="exampleFormControlInput1" placeholder="Enter Your Name:" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div class="mb-3">
                                        <input type="number" value={addressInfo.pincode} onChange={(e) => {setAddressInfo({...addressInfo, pincode: e.target.value})}} class="form-control" id="exampleFormControlInput2" placeholder="Enter Your Pincode:" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div class="mb-3">
                                        <input type="tel" value={addressInfo.mobileNumber} onChange={(e) => {setAddressInfo({...addressInfo, mobileNumber: e.target.value})}} class="form-control" id="exampleFormControlInput3" placeholder="Enter Your Mobile No:" />
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div class="mb-3">
                                        <input type="text" value={addressInfo.address} onChange={(e) => {setAddressInfo({...addressInfo, address: e.target.value})}} class="form-control" id="exampleFormControlInput4" placeholder="Enter Your Address:" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button onClick={() => buyNowFunction()} type="button" class="btn btn-primary w-100">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BuyNowModal
