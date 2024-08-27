import { useContext } from "react"
import myContext from "../../context/myContext"

const UserDetail = () => {

    // getting user details from context
    const context = useContext(myContext);
    const { getAllUser } = context;

    return (
        <>
            <section>
                <div className="container">
                    <div className="mt-5">
                        <div className="row mb-3">
                            <div className="col-12">
                                <h6>All User</h6>
                            </div>
                        </div>

                        <table class="table table-bordered">
                            <thead>
                                <tr>
                                    <th scope="col">S.No.</th>
                                    <th scope="col">Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Uid</th>
                                    <th scope="col">Role</th>
                                    <th scope="col">Date</th>
                                </tr>
                            </thead>
                            <tbody>
                                {getAllUser.map((item, index) => {
                                    return(
                                        <tr key={index}>
                                        <th scope="row">{index+1}</th>
                                        <td>{item.name}</td>
                                        <td>{item.email}</td>
                                        <td>{item.uid}</td>
                                        <td>{item.role}</td>
                                        <td>{item.date}</td>
                                    </tr>
                                    )
                                })}
                               
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UserDetail
