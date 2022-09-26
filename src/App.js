import React, {useState, useEffect} from "react";
import './style.css';
import Button from "./components/Button";
import TableList from "./components/TableList";
import Modal from "./components/Modal";


export default function App() {

  const [modal, setModal] = useState(null);
  const [form, setForm] = useState([]);

  useEffect(()=>{
    const getData = JSON.parse(localStorage.getItem('List')) || [];
    setForm(getData);
    console.dir(getData);
  }, [])

  useEffect(()=>{
    if (form.length > 0) {
      localStorage.setItem('List', JSON.stringify(form));
      console.dir(form);
    }
  }, [form]);


  return (
    <div className="app">
 
      <h1>ALL VISITORS</h1>

      <Button setModal={setModal} />

      <Modal modal = {modal} setModal = {setModal} form={form} setForm={setForm} />

      <div className="tableLabel">
          <div className="userNumberLabel">ID</div>
          <div className="userNameLabel">Name</div>
          <div className="userPhoneLabel">Phone</div>
      </div>
      <TableList form = {form} />
    </div>
  );
}


