import React, { useState } from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom';
import Dashboard from './components/Dashboard/Dashboard';
import AuthenticatedDashboard from './components/AuthenticatedDashboard/AuthenticatedDashboard'
import { Redirect } from 'react-router';
import Viewprofile from './components/Viewprofile/Viewprofile';
import SecondComponent from './components/TestingComponent/SecondComponent';
import CanteenMenu from './components/CanteenMenu/CanteenMenu';
// import CanteenRoute from './components/CanteenRoute/CanteenRoute'
import Viewcart from './components/ViewCart/ViewCart'

// ---------------------------------------------------- canteen imports----------------------------------------------------------

import Clogin from './components/Clogin/Login'
import HomePage from './components/HomePage/HomePage'
import NavigationC from './components/NavigationC/Navigation';
import Register from './components/Register/Register';
import Profile from './components/Profile/Profile';
import TodaysMenu from './components/TodaysMenu/TodaysMenu';
import AddFoodItem from './components/PrimaryMenu/AddFoodItem'
import ViewFoodItem from './components/PrimaryMenu/ViewFoodItem'
import EditFoodItem from './components/PrimaryMenu/EditFoodItem'
import PrimaryMenu from './components/PrimaryMenu/PrimaryMenu';
import IncomingOrder from './components/IncomingOrder/IncomingOrder';
import OrderHistory from './components/OrderHistory/OrderHistory';

const Rout = () => {    
    return ( 
        <Router>
            <div>
                <Switch>
                <Route exact path = "/">
                        <HomePage/>
                        
                    </Route>
                    <Route exact path ="/student" render={()=> <Dashboard /> } />
                    <Route exact path ="/canteen" render={() =>  <Clogin/> }/>

                    <Route exact path = '/protected/dashboard' render={() => localStorage.getItem('Authorization')? <AuthenticatedDashboard /> : <Redirect to = '/'/>}/>
                    <Route exact path = '/protected/viewprofile' render={() => localStorage.getItem('Authorization')? <Viewprofile />: <Redirect to = '/'/>}/>
                    <Route path={`/protected/canteenroute/:item`} render={(props)=> <CanteenMenu {...props}/>  }/>                              
                    <Route path={`/protected/viewcart/:id`} render={(props)=> localStorage.getItem('Authorization')? <Viewcart {...props}/> : <Redirect to = '/'/>}/>        
              
     {/* -------------------------------------------------------canteen routes----------------------------------------------------------------------------------------------------- */}
               
                    <Route path = '/business/signup'>
                                        <NavigationC/>
                                        <Register/>
                                    </Route>
                                    <Route path = "/business/signin">
                                        <NavigationC/>
                                        <Clogin/>
                                    </Route>

               
                    <Route exact path = '/business/profile' render={()=> localStorage.getItem('Authorization')? <Profile/>: <Redirect to = '/business/signin'/>}/>          
    
    {/* ------------------------------------------------------------------------------------------Todays Menu routes----------------------------------------------------------------------------------------------- */}
                <Route path = '/business/profile/todays_menu' render={()=> localStorage.getItem('Authorization')? <TodaysMenu/>: <Redirect to = '/business/signin'/>}/>
               
      {/* ------------------------------------------------------------------------------------------Primary Menu routes------------------------------------------------------------------------------------------------------------- */}
                              
                              
                           {/* --------------------------------------------------------------------------Starters--------------------------------------------------------------------- */}
                              
                           <Route exact path = '/business/profile/primary_menu/starters' render={()=> localStorage.getItem('Authorization')? <PrimaryMenu catogory = "starters" />: <Redirect to = '/business/signin'/>}/>
                                   <Route path = '/business/profile/primary_menu/starters/add' render={()=> localStorage.getItem('Authorization')? <AddFoodItem catogory = "starters"/> : <Redirect to = '/business/signin'/>}/>  
                                   <Route path = '/business/profile/primary_menu/:catogory/view/:food_name' render={()=> localStorage.getItem('Authorization')? <ViewFoodItem/> : <Redirect to = '/business/signin'/>}/>  
                                   <Route path = '/business/profile/primary_menu/:catogory/edit/:food_name' render={()=> localStorage.getItem('Authorization')? <EditFoodItem /> : <Redirect to = '/business/signin'/>}/>                      
                                  
                           {/* --------------------------------------------------------------------------main course--------------------------------------------------------------------- */}
                                   <Route exact path = '/business/profile/primary_menu/maincourse' render={()=> localStorage.getItem('Authorization')? <PrimaryMenu catogory = "maincourse" />: <Redirect to = '/business/signin'/>}/>
                                   <Route path = '/business/profile/primary_menu/maincourse/add' render={()=> localStorage.getItem('Authorization')? <AddFoodItem catogory = "maincourse"/> : <Redirect to = '/business/signin'/>}/>  
                                   <Route path = '/business/profile/primary_menu/:catogory/view/:food_name' render={()=> localStorage.getItem('Authorization')? <ViewFoodItem/> : <Redirect to = '/business/signin'/>}/>  
                                   <Route path = '/business/profile/primary_menu/:catogory/edit/:food_name' render={()=> localStorage.getItem('Authorization')? <EditFoodItem /> : <Redirect to = '/business/signin'/>}/>                      
                                   
                           {/* --------------------------------------------------------------------------deserts--------------------------------------------------------------------- */}
                                   <Route exact path = '/business/profile/primary_menu/deserts' render={()=> localStorage.getItem('Authorization')? <PrimaryMenu catogory = "deserts" />: <Redirect to = '/business/signin'/>}/>
                                   <Route path = '/business/profile/primary_menu/deserts/add' render={()=> localStorage.getItem('Authorization')? <AddFoodItem catogory = "deserts"/> : <Redirect to = '/business/signin'/>}/>  
                                   <Route path = '/business/profile/primary_menu/:catogory/view/:food_name' render={()=> localStorage.getItem('Authorization')? <ViewFoodItem/> : <Redirect to = '/business/signin'/>}/>  
                                   <Route path = '/business/profile/primary_menu/:catogory/edit/:food_name' render={()=> localStorage.getItem('Authorization')? <EditFoodItem /> : <Redirect to = '/business/signin'/>}/>                      
                           
                           {/* --------------------------------------------------------------------------drinks--------------------------------------------------------------------- */}
                                   <Route exact path = '/business/profile/primary_menu/drinks' render={()=> localStorage.getItem('Authorization')? <PrimaryMenu catogory = "drinks" />: <Redirect to = '/business/signin'/>}/>
                                   <Route path = '/business/profile/primary_menu/drinks/add' render={()=> localStorage.getItem('Authorization')? <AddFoodItem catogory = "drinks"/> : <Redirect to = '/business/signin'/>}/>  
                                   <Route path = '/business/profile/primary_menu/:catogory/view/:food_name' render={()=> localStorage.getItem('Authorization')? <ViewFoodItem/> : <Redirect to = '/business/signin'/>}/>  
                                   <Route path = '/business/profile/primary_menu/:catogory/edit/:food_name' render={()=> localStorage.getItem('Authorization')? <EditFoodItem /> : <Redirect to = '/business/signin'/>}/>                     
                             
                
                   {/* ------------------------------------------------------------------------------------------incomming orders routes ---------------------------------------------------------------------------------------------*/}
                   <Route path = '/business/profile/incoming_orders' render={()=> localStorage.getItem('Authorization')? <IncomingOrder/>: <Redirect to = '/business/signin'/>}/>
                                   
                                   
                                   
                                   {/* ------------------------------------------------------------------------------------------Order Summary routes ---------------------------------------------------------------------------------------------*/}
                                                   <Route path = '/business/profile/order_summary' render={()=> localStorage.getItem('Authorization')? <OrderHistory/>: <Redirect to = '/business/signin'/>}/>
                               
               
                </Switch>
            </div>
        </Router>
    );
}
 
export default Rout ;