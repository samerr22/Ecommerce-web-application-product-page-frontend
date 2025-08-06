import { useState } from 'react';








function product(){

  
      const searchBarStyle = {
        display: 'flex',
        alignItems: 'center',

      };
    
      const userActionsStyle = {
        display: 'flex',
        alignItems: 'center',

      };

      const [quantity, setQuantity] = useState(1);

      const handleIncrement = () => {
        if (quantity < 5) {
          setQuantity(quantity + 1);
        } else {
          setQuantity(1); // Reset to 1 when it reaches 5
        }
      };
    
      const handleDecrement = () => {
        if (quantity > 1) {
          setQuantity(quantity - 1);
        }
      };



    return(

      <div>
<header style={headerStyle}>
  <div style={{marginLeft: '190px'}}>
      <div style={{fontSize: '40px',fontFamily: 'Impact'}}>SAFICC</div>
      </div>
      <div style={searchBarStyle}>
        <input style={{width: '680px',height: '35px',borderRadius: '50px', marginLeft: '70px'  ,border: 'none'}}type="text" placeholder="Search..."  />
        <button style={{ marginLeft: '-70px', 
                         backgroundColor: '#f98029', 
                         color: '#fff', 
                         border: 'none', 
                         borderRadius: '40px', 
                         cursor: 'pointer',
                         height: '20px',
                         fontSize: '15px',
                         display: 'flex',
                         alignItems:'center',
                         justifyContent:'center', }}>
    Search
  </button>
      </div>
      <div style={userActionsStyle}>
      <img src={usEr} alt="user" style={{ width: '40px', height: '40px', marginRight:'20px', }}/>
        <a href="#" style={{marginRight: '20px'}}>Login</a>
        <a href="#" style={{marginRght: '20px'}}>Sign Up</a>
        <div style={{marginLeft: '20px'}}></div>
        <img src={Shoppin} alt="user" style={{ width: '25px', height: '25px', marginRight: '200px', }}/>
      </div>  
 </header>


      <div style={{ display: 'flex' ,justifyContent: 'space-between'}}>
      <Card style={{ width: '20rem', height: '20rem',  border: 'none', backgroundColor: 'rgba(100, 100, 100, 0.1)',
     borderRadius: '8px', position: 'relative', top: '50px', marginLeft: '100px' }}>
      <Card.Img variant="top" src={s55} />
      <div style={{display: 'flex'}}>
      <Card.Img variant="" src={s55} style={{width: '5rem', height: '5rem'}} />
      <Card.Img variant="" src={s55} style={{width: '5rem', height: '5rem'}} />
      <Card.Img variant="" src={s55} style={{width: '5rem', height: '5rem'}} />
      <Card.Img variant="" src={s55} style={{width: '5rem', height: '5rem'}} />
      </div>
      <Card.Body>
      </Card.Body>
    </Card>
      
      <div>
     <h2 style={{marginTop: '40px', marginLeft: '60px'}}>Anubia Nana Plant</h2>
    
     <div style={{ display: 'flex', alignItems: 'center' }}>
  <div style={{ display: 'flex',marginLeft: '70px' }}>
        <img src={Star} alt="user" style={{ width: '15px', height: '15px',marginBottom: '30px', }}/>
        <img src={Star} alt="user" style={{ width: '15px', height: '15px',marginLeft: '5px' }}/>
        <img src={Star} alt="user" style={{ width: '15px', height: '15px',marginLeft: '5px' }}/>
        <img src={Star} alt="user" style={{ width: '15px', height: '15px',marginLeft: '5px' }}/>
        <img src={Star} alt="user" style={{ width: '15px', height: '15px',marginLeft: '5px' }}/>

        </div>

        


  <Card.Text style={{ marginLeft: '10px' ,marginBottom: '32px' }}>(Rating)</Card.Text>
  </div>
  <hr className="middle-line" style={{color: 'black', bottom: '510px',height: '5px',width: '30%', position: 'absolute', marginLeft: '60px' }}/>

  <h1 style={{marginLeft: '50px',marginTop: '30px',color:'red',fontFamily: 'Garamond'}}>Rs 3000</h1>

  <div style={{ display: 'flex', alignItems: 'center',marginLeft: '50px', marginTop: '40px' }}>
  <h3 style={{fontSize: '20px', marginRight: '10px',fontFamily: 'Garamond'}}>Quantity</h3>
  <button onClick={handleDecrement} style={{width: '3rem',
                                            height: '2rem',
                                            display: 'flex',
                                            alignItems:'center',
                                            justifyContent:'center',
                                            marginLeft: '15px',
                                            border: 'none'}}>-</button>

  <h3 style={{fontSize: '20px',marginTop: '5px', marginLeft:'15px',fontFamily: 'Garamond'}}>{quantity}</h3>
  <button   onClick={handleIncrement} style={{width: '3rem',
                                            height: '2rem',
                                            display: 'flex',
                                            alignItems:'center',
                                            justifyContent:'center',
                                            marginLeft: '20px',
                                            border: 'none'}}>+</button>
</div>


<div style={{display: 'flex',alignItems : 'center', marginTop: '70px', marginLeft: '80px'}}>
<Link to="/cart">
  <button style={{width:'10rem',
                  height: '3rem', 
                  color: 'white', 
                  backgroundColor: 'blue', 
                  border: ' none',
                  fontFamily: 'Garamond',
                  fontSize: '20px'}}>
                  
                    Buy Now
                 
                    </button>
                    </Link>
  <button style={{marginLeft: '60px', 
                  width:'10rem',
                  height: '3rem', 
                  color: 'white', 
                  backgroundColor: '#f98029', 
                  border: ' none',
                  fontFamily: 'Garamond',
                  fontSize: '20px'}}>Add Cart</button>
  </div>

  
  <h2 style={{ position: 'absolute', top: '630px', left: '100px',fontSize:'20px',fontFamily: 'Garamond' }}>Product Review</h2>
  <hr className="middle-line" style={{color: 'black', top: '640px',height: '5px',width: '58%', position: 'absolute', right: '550px' }}/>

   <h2 style={{position: 'absolute',top: '670px',left: '100px',fontSize: '15px'}}>3 month ago</h2>
   
   <img src={Star} alt="user" style={{ width: '10px', height: '10px',position: 'absolute',top: '670px',left: '800px' }}/>
   <img src={Star} alt="user" style={{ width: '10px', height: '10px',position: 'absolute',top: '670px',left: '820px' }}/>
   <img src={Star} alt="user" style={{ width: '10px', height: '10px',position: 'absolute',top: '670px',left: '840px' }}/>
   <img src={Star} alt="user" style={{ width: '10px', height: '10px',position: 'absolute',top: '670px',left: '860px' }}/>
   <img src={Star} alt="user" style={{ width: '10px', height: '10px',position: 'absolute',top: '670px',left: '880px' }}/>

   <h2 style={{position: 'absolute', top: '700px',left: '100px', fontSize: '20px', color: '#666666',fontFamily: 'Garamond'}}>by</h2>
   <h2 style={{position: 'absolute', top: '700px',left: '130px', fontSize: '20px' ,color: '#D7D7D7'}}>sameera</h2>

   <h2 style={{ position: 'absolute', top: '740px',left: '100px', fontSize: '14px', color: 'rgb(37, 20, 30)'}}>good product . great packing . so recomend. also helthy product</h2>

   <div style={{ position: 'absolute', top: '780px',left: '100px' }}>

   <div style={{display: 'flex'}}>
      <Card.Img variant="" src={s55} style={{width: '5rem', height: '5rem',left: '30px', position:'absolute'}} />
      <Card.Img variant="" src={s55} style={{width: '5rem', height: '5rem',left: '150px', position:'absolute'}} />
      <Card.Img variant="" src={s55} style={{width: '5rem', height: '5rem',left: '280px', position:'absolute'}} />
      <Card.Img variant="" src={s55} style={{width: '5rem', height: '5rem', left: '420px', position:'absolute'}} />
      </div>

      <card style={{width: '20rem', 
                    height: '15rem',  
                    border: 'none', 
                    backgroundColor: 'rgba(100, 100, 100, 0.1)', 
                    position:'absolute',
                    left:'895px' ,
                    bottom: '130px',
                    borderRadius: '8px'}}>

         <div style={{position: 'absolute', top: '14px',left: '20px'}}>
        <CardText style={{fontFamily:'revert-layer',fontSize: '16px'}}>PLANT PROFILE</CardText>
        <CardText style={{ position: 'absolute', top: '30px', whiteSpace: 'nowrap' }}>
  GENUS:  Anuabias barteir
</CardText>
<CardText style={{ position: 'absolute', top: '60px', whiteSpace: 'nowrap' }}>
  LIGHT: medium - LowTermperature
</CardText>
<CardText style={{ position: 'absolute', top: '90px', whiteSpace: 'nowrap' }}>
  RATE: on wood - height 5-10
</CardText>
<CardText style={{ position: 'absolute', top: '120px', whiteSpace: 'nowrap' }}>
  HARDNESS: very soft to very
</CardText>
<CardText style={{ position: 'absolute', top: '150px', whiteSpace: 'nowrap' }}>
  CO2: needed
</CardText>
<CardText style={{ position: 'absolute', top: '180px', whiteSpace: 'nowrap' }}>
  Propagation: rhizome cuttings
</CardText>     
        </div>
      </card>
   </div> 
        </div>

    <Card style={{ width: '20rem', 
                   height: '15rem',  
                   border: 'none', 
                   backgroundColor: 'rgba(100, 100, 100, 0.1)',
                   borderRadius: '8px', 
                   position: 'relative', 
                   top: '50px', 
                   margin: '0 auto', 
                   marginBottom: '35px', 
                   marginRight:'200px' }}> 

     <div style={{position: 'absolute', top: '20px',left: '20px'}}>
     <CardText >Delivery</CardText>
        <CardText >Centerl,Kandy,Plimathalwa</CardText>
        <button href="" style={{position: 'absolute', top: '60px', color: 'blue', border: 'none',right: '126px'}}>Change</button>
        <CardText style={{position: 'absolute', top: '90px'}}>Delivery 21 Oct-23 oct</CardText>
        <CardText  style={{position: 'absolute',top: '110px'}}>3-5day(s)</CardText>
        <CardText style={{position: 'absolute',top: '140px'}}>Rs 299</CardText>
        <CardText style={{position: 'absolute',top: '160px'}}>Cash on Delivery Available</CardText>
        </div>
     </Card>

     <button  style={{position: 'absolute', right : '300px', top: '670px' , border: 'none', backgroundColor: 'white', }}>
     <img src={s55} style={{width:'200px',height: '200px'}} />
     </button>
   </div>

<div style={{}}>
   <hr className="middle-line" style={{color: '#f98029', marginTop: '380px',height: '5px',width: '100%', position: 'absolute' }}/>
   <img src={Chat} style={{marginTop: '400px',position: 'absolute', marginLeft: '270px', width: '20px',height: '20px',  }} />
        <h1  style={{color: '#f98029',marginTop: '400px',position: 'absolute',fontSize: '15px', marginLeft: '300px'}}> chat withUs</h1> 
        <h1 style={{color: '#f98029',marginTop: '400px',position: 'absolute',fontSize: '15px', marginLeft: '1200px'}}> About us</h1>
        <h1 style={{color: '#f98029',marginTop: '420px',position: 'absolute',fontSize: '15px', marginLeft: '1200px'}}> Terms & Condition</h1>
        <h1 style={{color: '#f98029',marginTop: '440px',position: 'absolute',fontSize: '15px', marginLeft: '1200px'}}> Privacy police</h1>
        <h1 style={{color: '#f98029',marginTop: '460px',position: 'absolute',fontSize: '15px', marginLeft: '1200px'}}> Contact us</h1>
        
        
        </div>

    </div>


    )
}

export default product;

