import React from 'react';
import Card from 'react-bootstrap/Card';
import {Link} from 'react-router-dom';
require('./CanteenCards.css');


const CanteenCards = (props) => { 
    const { canteenDetails } = props;
    return ( 
        <>                                
            <div style={{width: "100%",marginTop:"50px", display:"flex", flexFlow:"row wrap", justifyContent: 'space-around'}}>                
                {
                    canteenDetails.map((item, i)=> {   
                        if(i < 6) {
                            return(
                                <Card className = "hover canteen-cards" key= {i}>
                                    <Link to = {`/canteenroute/${item.canteen_id}`}>
                                    <Card.Img variant="top" src = {`${item.imageurl}`} style = {{
                                            height:"280px",
                                            width: "100%"
                                        }}/>
                                    <Card.Body>
                                        <Card.Title style={{marginLeft:"10px"}}>{item.canteen_name} Rating : 4.0</Card.Title>                                    
                                    </Card.Body>
                                    </Link>
                                </Card>                                                                                                                               
                            )
                        }                                                          
                    })
                }
            </div>   
        </>                      
    );
}


 

 
export default CanteenCards;