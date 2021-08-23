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
  let [actvieEl,setActiveEl] = useState(1);
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
  const [newPageCount,setNewPageCount]= useState();
  let itemss = [];
  // let newPaginationItems;

  for (let number = 1; number <= pageCount; number++) {   
    itemss.push(
      <Pagination.Item onClick={()=>{pageClick(number)}} key={number} active={number === active}>
        {number}
      </Pagination.Item>,
    );

      }
      // const maahee = itemss.pop()
      console.log('maheeeee here okay 2',itemss)
      // setNewPageCount(itemss);

  const pageClick = (value)=>{
    // console.log('pageClicked',value)
    setActiveEl(value)
    pageSlice(value)
    
  
  }
  const pageSlice = (value) => {
    const lastIndx = (value*5);
    console.log('last',lastIndx);
    const firstIndx =  lastIndx-5;
    console.log('first',firstIndx);
    const newArray = items.slice(firstIndx,lastIndx);
    setNewItems(newArray);
  }
  const nextClick = () => {
    setActiveEl(++actvieEl);
    console.log('new active ele',actvieEl);
    pageSlice(actvieEl);
  }
  const prevClick = () => {
    setActiveEl(--actvieEl);
    pageSlice(actvieEl);
  }
  return (

    <div className="d-flex justify-content-center ">
      <div style={{position: 'fixed'}} className="border d-flex justify-content-center mt-5">
      <Pagination  size="lg">
      {actvieEl<=1 ?<Pagination.Item disabled>Prev</Pagination.Item>
      :
      <Pagination.Item onClick={prevClick} >Prev</Pagination.Item>
    }
        {itemss}
        {actvieEl>=pageCount? <Pagination.Item disabled>Next</Pagination.Item>
        :
        <Pagination.Item onClick={nextClick}>Next</Pagination.Item>}
      </Pagination>
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
