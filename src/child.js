import React,{useContext  } from 'react';
import { TransactionContext } from './comp/transContext';

 
function Child() {
let transactions= useContext(TransactionContext);

    return (
    <div className="container"> 
       <h1 className="text-center">Expense Tracker</h1>       
       <h3>Your Balance<br/> 200pkr </h3>
<div className="expense-container">
       <h3>INCOME<br/> 1120pkr </h3>
       <h3>EXPENSE<br/> 100pkr </h3>
       </div>
     <h3>History</h3> 
       <hr></hr>
     <ul className="transcation-list ">
         {transactions.map ((transObj,ind) => {
             return(
             <li key = {ind}>
             <span>{transObj.desc}</span>
             <span>{transObj.amount}</span>
             </li>
             )
             })}

        </ul>  
   


   <h3>Add New transaction</h3>
   <hr/>
   <form className="transaction-form">
    <label>
        Enter Description <br/>
        <input  type="textarea" placeholder="Enter Your Description " required/>
    </label>
    <br/>
    <label>
             Enter Amount<br/>
             <input type="number " required/>
             </label>
             <br/>
         <input type="submit" value="Add Transaction"/> 

   </form>
    </div>
      





    );
} 

export default Child;
