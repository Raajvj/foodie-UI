import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './buvva_login.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Login(){
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
            
            await axios.post('http://localhost:3004/buvva_login',datastring,config)
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
                        window.location.href="/home";
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
            <div className='container-fluid'>
                <div className='row main_div1'>
                    <div className='col-lg-5 table-responsive main_div2'>
                        <p className="text-white">“A recipe has no soul. You, as the cook, must bring soul to the recipe.”
                                -Thomas Keller</p>
                        <form onSubmit={handlesubmit}>
                            <table className='table table-borderless table-hovered text-white'>
                                <thead className='text-center'>
                                    <tr>
                                        <th colSpan={2}><h3>Welcome To Buvva</h3></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Username:</td>
                                        <td><input type="text" name='username' id='username' placeholder='Username' className='form-control'/></td>
                                    </tr>
                                    <tr>
                                        <td>Password:</td>
                                        <td><input type="password" name='password' id='password' placeholder='Password' className='form-control'/></td>
                                    </tr>
                                    <tr>
                                        <td colSpan={2} className="text-center">
                                            <button type='submit' className='btn btn-outline-success'name='data_signin2' id='data_signin2'>Login</button>
                                        </td>
                                    </tr>
                                
                                </tbody>
                            </table>
                        </form>
                        <div className='text-center'>
                        
                                
                                <h3><span class="badge badge-pill badge-primary">New User?</span></h3>
                               <Link to="/signup"><button type="button" className='btn btn-outline-success'name='data_signin1' id='data_signin1'>SignUp</button></Link>
                                
                            
                        </div>
                    </div>
                    <div className='col-lg-5'></div>
                    <div className='col-lg-2'></div>
                </div>
            </div>
        </>
    );
}