
import './App.css'
import 'bootstrap/dist/css/bootstrap.css';
import Header from "./component/Header"
import ItemHeader from './component/ItemHeader';
import Item from './component/Item';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [itemss, setItems] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/product")
      .then((res) => {
        setItems(res.data)
      })
      .catch((error) => {
        console.log(error)
      })
  })
  return <>
    <Header></Header>
    <div>
      <ItemHeader ></ItemHeader>
      <Item data={itemss}></Item>
    </div>
  </>
}

export default App
