import React, { useState,  useEffect } from 'react'
import axios from "axios"
import "bootstrap-icons/font/bootstrap-icons.css";

function Index() {
  const [data,setdata]=useState([])
  const [loading,setLoading]=useState(false)

  const getData=async ()=>{
    try {
      setLoading(true)
      let response=await axios.get("http://localhost:5000/products")
      setLoading(false)
      setdata(await response.data)
    } catch (error) {
      setLoading(false)
      console.log(error);
    }
  }

  useEffect(()=>{
    getData()
  },[])

const handleDelete=(id)=>{
  axios.delete(`http://localhost:5000/products/${id}`).then(()=>getData())
}
  return (
    <>
    <div className='section1' >
      <div className='row rowitem'>
        <div className='col-6'>
          <div>
          <h2><strong>Notary Public & Legal Solutions</strong></h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis cupiditate deserunt placeat necessitatibus a aliquam corrupti nisi odio aliquid, accusamus.</p>
          </div>

        </div>
      </div>
    </div>
    <div className='section2'>
    <div className='container'>
      <div className='section2h2'>
        <div><h2>Practice Areas</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
        </div>
       

      </div>

    <div className='itemwrap container' data={data} setdata={setdata}>

    {data.map((item,index)=>
             ( <div key={index} className="itemsdiv">
             <button className='divdel  ' onClick={()=>handleDelete(item._id)}><i className="bi bi-x-lg "></i></button>
             <div> <i className={item.icon}></i></div>
          <h3>{item.title}</h3>
              <p>{item.about}</p>
              
         
            </div>)
            )}
   
    </div>
    </div>
<div className='section3'>
  <div className='container'>
<div className='row'>
 <div className='col-3'> <img src='https://preview.colorlib.com/theme/notary/images/atty_1.jpg.webp' alt="img-adam1"/></div>
 <div className='col-3'> <img src='https://preview.colorlib.com/theme/notary/images/atty_2.jpg.webp' alt="img-adam2"/></div>
 <div className='col-6'><div className='m-3'><strong><h3>We Provide Highly Reliable & Effective Legal Solutions</h3></strong>
 <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, explicabo iste a labore id est quas, doloremque veritatis! Provident odit pariatur dolorem quisquam, voluptatibus voluptates optio accusamus, vel quasi quidem!</p>
 <button>Book an appointment</button></div></div>
</div>
  </div>

</div>

<div className='section4'>
  <div>
<div className='h3div'><h3>Happy Customers</h3></div>
  <div className='container'>

    <div className='row'>
      <div className='col-4'><div>
      <div className='row'><div className='col-2'> <img src='https://preview.colorlib.com/theme/notary/images/person_2.jpg.webp' alt='adam'/></div>
      <div className='col-10'><h6>Lina Gold</h6><h6>Owner, Ford</h6></div></div>
      <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"</p> 
      </div></div>
      <div className='col-4'><div>
      <div className='row'><div className='col-2'> <img src='https://preview.colorlib.com/theme/notary/images/person_1.jpg.webp' alt='adam'/></div>
      <div className='col-10'><h6>Mike Fisher</h6><h6>Owner, Ford</h6></div></div> 
      <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"</p> 
      </div></div>
      <div className='col-4'><div>
      <div className='row'><div className='col-2'> <img src='https://preview.colorlib.com/theme/notary/images/person_3.jpg.webp' alt='adam'/></div>
      <div className='col-10'><h6>Sheen Yu</h6><h6>Owner, Ford</h6></div></div> 
      <p>"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, deserunt eveniet veniam. Ipsam, nam, voluptatum"</p> 
      </div></div>
    </div>
  </div>
  </div>
</div>

<div className='section5'>
<p>

Copyright ©<script>document.write(new Date().getFullYear());</script>2023 All rights reserved | This template is made with <i className="bi bi-heart-fill text-danger"></i> by <span >Colorlib</span>

</p>
</div>

    </>
  )
}

export default Index
