import {CustomerContext} from "../components/CustomerProvider.tsx";
import {useContext, useState} from "react";
import {Customer} from "../models/Customer.tsx";
import {useNavigate} from "react-router";

export function DeleteCustomer() {
    const navigate = useNavigate();
    const[setCustomer] = useContext(CustomerContext);
    const[email, setEmail] = useState("");

    function deleteCustomer() {
        // const filteredEmail = customers.filter((customer:Customer) => customer.email === email);
        setCustomer((customers:Customer[]) =>
            customers.filter(customer => customer.email !== email)
        );
        navigate('/');

    }

    return (
        <>
            <h2>Delete Customer</h2>
            <input type="text" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
            <button onClick={deleteCustomer}>Delete</button>
        </>
    )
}