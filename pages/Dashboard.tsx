import {useContext} from "react";
import {CustomerContext} from "../components/CustomerProvider.tsx";
import {Customer} from "../models/Customer.tsx";

export function Dashboard() {
    const [customers] = useContext(CustomerContext);
    return (
        <>
            <h2>Dashboard</h2>
            {customers.map((customer: Customer) => (
                <div key={customer.email}>{customer.name + ' | ' + customer.email + ' | ' + customer.phone}</div>))}
        </>
    )
}