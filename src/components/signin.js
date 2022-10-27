import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Link} from 'react-router-dom';
import axios from 'axios';

export default function Signin(){
    const handlesubmit=async(event)=>{
        event.preventDefault();

        var datastring = new FormData(event.target);
        var config = {headers:{'enctype':'multipart/form-data'}};

        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;

        if(username === '' || username === null){
            alert('Enter the Username');
        }
        else if(password === '' || password === null){
            alert('Enter the Password');
        }
        else{
            // alert('Logged successfully!!!')
            await axios.post('http://localhost:3004/signin',datastring,config)
            .then(function(res){
                if(res.data.status === 'username_error'){
                    alert('Invalid Username');
                    window.location.reload();
                }
                else if(res.data.status === 'Invalid_Login'){
                    alert('Invalid Login');
                    window.location.reload();
                }
                else if(res.data.status === 'Login_Successfully'){
                    if(res.data.role === 'ADMIN'){
                        alert('Admin Logged');
                        window.location.reload();
                    }
                    else if(res.data.role === 'PARTNER'){
                        alert('Partner Logged');
                        window.location.reload();
                    }
                    else if(res.data.role === 'DELIVERY'){
                        alert('Delivery logged');
                        window.location.reload();
                    }
                    else if(res.data.role === 'END_USER'){
                        alert('End user Logged');
                        window.location.reload();
                    }
                    else{
                        alert('Invalid Login');
                        window.location.reload();
                    }
                }
            }) 
            .catch(function(res){
                alert(res);
                window.location.reload();
            })
        }

    }
    return(
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-lg-5'></div>
                    <div className='col-lg-5'>
                        <form onSubmit={handlesubmit}>
                            <table className='table table-hover text-white rounded'>
                                <thead className='text-center'>
                                    <th colSpan={2}>SIGN-IN</th>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Username</td>
                                        <td><input type="text" name='username' id='username' placeholder='Username' className='form-control'/></td>
                                    </tr>
                                    <tr>
                                        <td>Password</td>
                                        <td><input type="password" name='password' id='password' placeholder='Passsword' className='form-control'/></td>
                                    </tr>
                                    <tr>
                                        <td> <Link to="/signup"> <button type='button' className='btn btn-danger' name='data_signin1' id='data_signin1'>SignUp</button> </Link> </td>
                                        <td> <button type='submit' className='btn btn-primary' name='data_signin2' id='data_signin2'>Login</button> </td>
                                    </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>
                    <div className='col-lg-2'></div>
                </div>
            </div>
        </>
    );
}