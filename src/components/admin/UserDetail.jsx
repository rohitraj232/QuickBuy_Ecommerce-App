import { useContext } from "react"
import myContext from "../../context/myContext"
import { MdEmail } from "react-icons/md";


const UserDetail = () => {

    // getting user details from context
    const context = useContext(myContext);
    const { getAllUser } = context;

    return (
        <>
            <section>
                <div className="container">
                    <div className="mt-5">
                        <div className="row">
                            <div className="col-12">
                                <div className="all-orders border border-1 p-3">
                                    <h6>All Users</h6>
                                </div>
                            </div>
                        </div>

                        <div class="table-responsive">
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
                                        return (
                                            <tr key={index}>
                                                <th scope="row">{index + 1}.</th>
                                                <td className="fw-semibold text-muted">{item.name}</td>
                                                <td className="fw-semibold text-muted"><MdEmail className="me-1 text-primary" />{item.email}</td>
                                                <td> {item.uid} </td>
                                                <td><span className="bg-success py-1 px-3 rounded-3 fw-semibold text-white"> {item.role} </span></td>
                                                <td className="fw-semibold text-muted">{item.date}</td>
                                            </tr>
                                        )
                                    })}

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default UserDetail
