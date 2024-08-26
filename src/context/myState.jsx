import { useEffect, useState } from "react";
import MyContext from "./myContext";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import { fireDB } from "../firebase/FirebaseConfig";

const myState = ({children}) => {
    // const name = "rohit raj"
    const [loading, setLoading] = useState(false);
    
    // get all product state
    const [getAllProduct, setGetAllProduct] = useState([]);

    // get all product function
    const getAllProductFunction = async () => {
      setLoading(true);

      try {
        const q = query(
          collection(fireDB, 'product'),
          orderBy('time')
        )
        const data = onSnapshot(q, (QuerySnapshot) => {
          let productArray = [];
          QuerySnapshot.forEach((doc) => {
            productArray.push({...doc.data(), id: doc.id});
          });
          setGetAllProduct(productArray);
          setLoading(false);
        });
        return () => data;
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    // Order State 
    const [getAllOrder, setGetAllOrder] = useState([]);

    // get order function
    const getAllOrderFunction = async () => {
      setLoading(true);
 
      try {
        const q = query(
          collection(fireDB, "order"),
          orderBy('time')
        );
        const data = onSnapshot(q, (QuerySnapshot) => {
          let orderArray = [];
          QuerySnapshot.forEach((doc) => {
            orderArray.push({...doc.data(), id: doc.id});
          });
          setGetAllOrder(orderArray);
          setLoading(false);
        });
        return () => data;
      } catch (error) {
        console.log(error);
        setLoading(false);
      }
    }

    // console.log(getAllOrder);

    useEffect(() => {
      getAllProductFunction();
      getAllOrderFunction();
    }, []);

  return (
    <MyContext.Provider value={{
        loading,
        setLoading,
        getAllProduct,
        getAllProductFunction,
        getAllOrder
    }}>
      {children}
    </MyContext.Provider>
  )
}

export default myState;
