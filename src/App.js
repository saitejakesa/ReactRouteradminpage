import Header from "./Header";
import "./styles.css";
import Heading from "./Heading";
import Mainprogram from "./Mainprogram";
import { useEffect, useState } from "react";

const products=[
  {
    cardName:"Fancy Product",
    Amount:"$40.00 - $80.00",
    footer:"View options",
    isAdded:false
  },
  {
    cardName:"Special Item",
    Amount:"$18.00",
    mutedAmount:"$20.00",
    footer:"Add to cart",
    saleTag:"Sale",
    isAdded:false
  },
  {
  cardName:"Sale Item",
  Amount:"$25.00",
  mutedAmount:"$50.00",
  footer:"Add to cart",
  saleTag:"Sale",
  isAdded:false
  },
  {
  cardName:"Popular Item", 
  Amount:"$40.00", 
  footer:"Add to cart",
  isAdded:false 
  },
  {
  cardName:"Sale Item",
  Amount:"$25.00",
  mutedAmount:"$50.00",
  footer:"Add to cart",
  saleTag:"Sale",
  isAdded:false
  },
  {
  cardName:"Fancy Product",
  Amount:"$120.00 - $280.00",
  footer:"View options",
  isAdded:false
  },
  {
  cardName:"Special Item",
  Amount:"$18.00",
  mutedAmount:"$20.00",
  footer:"Add to cart",
  saleTag:"Sale",
  isAdded:false
  },
  {
  cardName:"Popular Item", 
  Amount:"$40.00", 
  footer:"Add to cart",
  isAdded:false 
  }
]
const App = () => {
  const[count,setCount]=useState(0)
  const[productList,setProductList]=useState(products);
  const handleClick = (index) =>{
    let updatedobj={...productList[index], isAdded: !productList[index].isAdded}
    productList[index]=updatedobj;
    let updatedProductList=productList;
    setProductList(updatedProductList)
    if(updatedProductList[index].isAdded){
      setCount(count+1)
    }
    else{
      setCount(count-1)
    }

  }
  useEffect(()=>{
    console.log(productList)
  },[productList])
  return (
    <div>
      <Header count={count}/>
      <Heading />
      <Mainprogram handleClick={handleClick} productList={productList}/>
    </div>
  );
};
export default App;

