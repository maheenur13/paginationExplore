import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Pagination from '@material-ui/lab/Pagination';
import fakeData from './jsonData';
import { useEffect, useState } from 'react';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      marginTop: theme.spacing(2),
    },
  },
}));



function App() {
  const classes = useStyles();
  const pageLength = 6;
  const [items, setItems] = useState([])
  const [newItems, setNewItems] = useState([])
  const dataLength = items.length;

  let pageCount = Math.ceil(dataLength / pageLength);
  // let pageCount = 8;
  // fake data loaded here 
  useEffect(() => {
    const data = fakeData?.data;
    setItems(data)
    const inititalData = data.slice(0, pageLength)
    setNewItems(inititalData);
  }, [])


  //onclick to the page button like 1, 2, 3, 4, ... etc
  const pageClick = (event,value) => {
    console.log('event',event);
    console.log('value',value);
    pageSlice(value)


  }
  //page slice accroding to page we cliked emplemented here
  const pageSlice = (value) => {
    const lastIndx = (value * pageLength);
    console.log('last', lastIndx);
    const firstIndx = lastIndx - pageLength;
    console.log('first', firstIndx);
    const newArray = items.slice(firstIndx, lastIndx);
    setNewItems(newArray);
  }
  return (

    <div className="d-flex justify-content-center ">
      <div style={{ position: 'fixed' }} className="border d-flex justify-content-center mt-5">
      <Pagination count={pageCount} shape="rounded" color="secondary" size="large"  onChange={pageClick} defaultPage={1} siblingCount={0} boundaryCount={1}/>


        {/* <Pagination size="lg">
          {actvieEl <= 1 ? <Pagination.Item disabled>Prev</Pagination.Item>
            :
            <Pagination.Item onClick={prevClick} >Prev</Pagination.Item>
          }
          {itemss}
          {actvieEl >= pageCount ? <Pagination.Item disabled>Next</Pagination.Item>
            :
            <Pagination.Item onClick={nextClick}>Next</Pagination.Item>}
        </Pagination> */}
      </div>
      
      <div className="border container mt-5">
        {
          // eslint-disable-next-line array-callback-return
          newItems.map((item => {
            return (
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
