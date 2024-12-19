import {useContext, useState} from "react";
import {CustomerContext} from "../components/CustomerProvider.tsx";
import {Customer} from "../models/Customer.tsx";
import {useNavigate} from "react-router";

export function UpdateCustomer() {
    const navigate = useNavigate()

    const [customer, setCustomer] = useContext(CustomerContext);

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');

    function updateCustomer(){
        const updatedCustomer =customer.map((customer:Customer) => customer.email === email ? {...customer, name: name, email:email , phone:phone} : customer);
        setCustomer(updatedCustomer);
        navigate('/');
    }
    return (
        <>
            <h2>Update Customer</h2>
            <input type="text" placeholder="Name" onChange={(e) => setName(e.target.value)}/>
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <input type="text" placeholder="Phone" onChange={(e) => setPhone(e.target.value)}/>
            <button onClick={updateCustomer}>Add</button>

        </>
    )
}