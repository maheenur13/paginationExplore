import logo from './logo.svg';
import './App.css';
import { Pagination } from 'react-bootstrap';
import fakeData from './jsonData';
import { useEffect, useState } from 'react';

function App() {
  const pageLength =5;
  const [items,setItems]=useState([])
  const initItems = items?.slice(0,5);
  console.log('intial itemsss',initItems);
  const [newItems,setNewItems] = useState([])
  const [actvieEl,setActiveEl] = useState(1);
  const dataLength = items.length;
 
  let pageCount = Math.ceil(dataLength/pageLength);
  // console.log('data length',pageCount);
  // console.log(fakeData.data)
  useEffect(()=>{
    const data = fakeData?.data;
      setItems(data)
      const inititalData =data.slice(0,5)
      setNewItems(inititalData);
  },[])
  console.log('this is all fake data',items)
  let active = actvieEl ;
  let itemss = [];
  for (let number = 1; number <= pageCount; number++) {
    itemss.push(
      <Pagination.Item onClick={()=>{pageClick(number)}} key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );
  }

  const pageClick = (value)=>{
    // console.log('pageClicked',value)
    setActiveEl(value)
    const lastIndx = (value*5);
    console.log('last',lastIndx);
    const firstIndx =  lastIndx-5;
    console.log('first',firstIndx);
    // if(value%2===0){
    //   firstIndx = firstIndx-1;
    // }
    // if(value%2===1 && value>1){
    //   firstIndx = firstIndx-1;
    // }
    const newArray = items.slice(firstIndx,lastIndx);
    setNewItems(newArray);
  
  }
  return (

    <div className="d-flex justify-content-center ">
      <div style={{position: 'fixed'}} className="border d-flex justify-content-center mt-5">
      <Pagination  size="lg">{itemss}</Pagination>
    </div>
    <div className="border container mt-5">
     {
       // eslint-disable-next-line array-callback-return
       newItems.map((item=>{
         return(
         <div className="border p-5 mt-5">

           <h2>{item.id}. {item.title}</h2>
           <p>{item.desc}</p>
           <h5>{item.age}</h5>
         </div>
         )
       }))
     }
    </div>

    </div>

  );
}

export default App;
