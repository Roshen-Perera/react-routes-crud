import {createContext, useState} from "react";
import {Customer} from "../models/Customer";

export const CustomerContext = createContext();

export function CustomerProvider({children}) {

    const [customers, setCustomer] = useState<Customer[]>([]);

    return (
        <CustomerContext.Provider value={[customers, setCustomer]}>
            {children}
        </CustomerContext.Provider>
    );
}