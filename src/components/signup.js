import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from "react-router-dom";
import axios from "axios";
 export default function Signup(){
    const handlesubmit = async(event)=>{
        event.preventDefault();
        var datastring = new FormData(event.target);

        const config = {headers : {'enctype': 'multipart/form-data'}}

        axios.post('http://localhost:3004/signup',datastring,config)
        .then(function(res){
            if(res.data.status === 'Signup_Error'){
                alert('Signup Error');
                window.location.reload();
            }
            else if(res.data.tatus === 'Siginin_Error'){
                alert('Signin Error');
                window.location.reload();
            }
            else if(res.data.status === 'Signup_Successfully'){
                alert('Created successfully');
                window.location.href='/';
            }
        })
        .catch(function(err){console.log(err);})
    }
    return(
        <>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3"></div>
                    <div className="col-lg-6">
                        <div className="table-responsive">
                            <form onSubmit={handlesubmit}>
                                <table className="table table-bordered">
                                    <thead className="text-center">
                                        <th colSpan={2}>SIGN-UP</th>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Signup_Type</td>
                                            <td>
                                                <select name="signup_type" id="signup_type" className="form-control" required>
                                                    <option value="">--Choose--</option>
                                                    {/* <option value="PARTNER">PARTNER</option> */}
                                                    <option value="DELIVERY">DELIVERY_PARTNER</option>
                                                    <option value="END_USER">USER</option>
                                                </select>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>Name</td>
                                            <td><input type="text" name="name" id="name" placeholder="Name" className="form-control"/></td>                                        
                                        </tr>
                                        <tr>
                                            <td>Email</td>
                                            <td><input type="email" name="email" id="email" placeholder="Email" className="form-control"/></td>
                                        </tr>
                                        <tr>
                                            <td>Phone</td>
                                            <td><input type="number" name="phone" id="phone" placeholder="Phone Number" className="form-control"/></td>
                                        </tr>
                                        <tr>
                                            <td>Address</td>
                                            <td><input type="text" name="address" id="address" placeholder="Address" className="form-control"/></td>
                                        </tr>
                                        <tr>
                                            <td>Password</td>
                                            <td><input type="password" name="password" id="password" placeholder="Password" className="form-control"/></td>
                                        </tr>
                                        <tr>
                                            {/* <td><Link to="/"><button type="button" name="data_signup1" id="data_signup1" className="btn btn-danger">SignIn</button></Link></td> */}
                                            <td colSpan={2} className="text-center"><button type="submit" name="data_signup2" id="data_signup2" className="btn btn-primary">Submit</button></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-3"></div>
                </div>
            </div>
        </>
    );
 }