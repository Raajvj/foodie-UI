import React,{Component, useState} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './home.css'


export default function Home(){
    // const handlesubmit=async(event)=>{
    //     event.preventDefault();

    //     useState[value,setValue]=useState();
    // }
    const[count1,setCount1]=useState(0);
    return(
       
        <>
        <div className='container-fluid'>
            <h1>Home</h1>
            <p>Cart <span>{count1}</span> add</p>
            <div className='d-block'>
                <div className=''> 
                    <Carousel className='caro_div'>
                        <div>
                            <img src="https://img.freepik.com/free-photo/chicken-wings-barbecue-sweetly-sour-sauce-picnic-summer-menu-tasty-food-top-view-flat-lay_2829-6471.jpg?w=2000" />
                            <p className="legend">Legend 1</p>
                        </div>
                        <div>
                            <img src="https://www.guidingtech.com/wp-content/uploads/HD-Mouth-Watering-Food-Wallpapers-for-Desktop-12_4d470f76dc99e18ad75087b1b8410ea9.jpg" />
                            <p className="legend">Legend 2</p>
                        </div>
                        <div>
                            <img src="https://www.guidingtech.com/wp-content/uploads/HD-Mouth-Watering-Food-Wallpapers-for-Desktop-12_4d470f76dc99e18ad75087b1b8410ea9.jpg" />
                            <p className="legend">Legend 3</p>
                        </div>
                    </Carousel>
                </div>
                <div className='row ' onClick={()=>setCount1(count1+1)}>
                    <div className='col-lg-2'></div>
                    <div className=' row col-lg-6 text-center justify-content-between'>
                        <div className='card col-lg-3'>
                            <div className='card-title'>
                                <h1>Pizza</h1>
                                <div className='card-body'>
                                    <img src='https://www.guidingtech.com/wp-content/uploads/HD-Mouth-Watering-Food-Wallpapers-for-Desktop-12_4d470f76dc99e18ad75087b1b8410ea9.jpg' width="100%"></img>

                                </div>
                            </div>

                        </div>
                        <div className='card col-lg-3'>
                            <div className='card-title'>
                                <h1>Pizza</h1>
                                <div className='card-body'>
                                    <img src='https://www.guidingtech.com/wp-content/uploads/HD-Mouth-Watering-Food-Wallpapers-for-Desktop-12_4d470f76dc99e18ad75087b1b8410ea9.jpg' width="100%"></img>

                                </div>
                            </div>

                        </div>
                        {/* <div className='card col-lg-3'>
                            <div className='card-title'>
                                <h1>Pizza</h1>
                                <div className='card-body'>
                                    <img src='https://www.guidingtech.com/wp-content/uploads/HD-Mouth-Watering-Food-Wallpapers-for-Desktop-12_4d470f76dc99e18ad75087b1b8410ea9.jpg' width="100%"></img>

                                </div>
                            </div>

                        </div> */}
                        <div className='card col-lg-3'>
                            <div className='card-title'>
                                <h1>Pizza</h1>
                                
                                <div className='card-body'>
                                    <img src='https://www.guidingtech.com/wp-content/uploads/HD-Mouth-Watering-Food-Wallpapers-for-Desktop-12_4d470f76dc99e18ad75087b1b8410ea9.jpg' width="100%"></img>

                                </div>
                                <p>Pizza is a dish of Italian origin </p>
                            </div>

                        </div>
                    </div>
                    <div className='col-lg-2'></div>
                </div>
               
            </div>
            
            
        </div>
        </>
    );
}