import React ,{ createContext , useReducer } from "react";
import TransactionReducer from './transReducer';
 const  initialTransaction = [
  {amount:500,desc: "Cash"},
 {amount:-500,desc: " Book"},
 {amount:-400,desc: "Pen"},
]
export  const TransactionContext = createContext(initialTransaction );

export const TransactionProvider =({childern})=> {
    let [state, dispatch]  = useReducer(TransactionReducer, initialTransaction);
    function  addTransaction(transObj){ 
    dispatch({
        type:"ADD_TRANSACTION",
        payload: {
             
                  amount:transObj.amount ,
                  desc: transObj.desc
            },
    

        
    })
    }
      return (
          <TransactionContext.Provider value={{
          transactions:state,
           addTransaction
        }} >
            {childern}
        </TransactionContext.Provider>
      )
    }