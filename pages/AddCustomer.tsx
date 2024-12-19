import {useNavigate} from "react-router";
import {useContext, useState} from "react";
import {CustomerContext} from "../components/CustomerProvider.tsx";
import {Customer} from "../models/Customer.tsx";

export function AddCustomer() {
    const navigate = useNavigate();
    const [customer, setCustomer] = useContext(CustomerContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    function addCustomer(){
        const newCustomer = new Customer(name, email, phone);
        setCustomer((customer: Customer[]) => [...customer, newCustomer]);
        navigate('/');
    }
    return (
        <>
            <h2>Add Customer</h2>
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" placeholder="Phone" onChange={(e) => setPhone(e.target.value)}/>
            <button onClick={addCustomer}>Add</button>
        </>
    )
}