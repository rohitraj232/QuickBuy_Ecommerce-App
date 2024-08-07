import { useState } from "react";
import MyContext from "./myContext";

const myState = ({children}) => {
    // const name = "rohit raj"
    const [loading, setLoading] = useState(false);
  return (
    <MyContext.Provider value={{
        loading,
        setLoading
    }}>
      {children}
    </MyContext.Provider>
  )
}

export default myState;
