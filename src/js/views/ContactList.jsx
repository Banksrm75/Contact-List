import React, { useContext, useEffect } from "react";
import Contact from "./Contact.jsx";

import { Context } from "../store/appContext.js"

const ContactList = () => {

    const {store, actions} = useContext(Context);

    // useEffect( () => {
    //     actions.getContacts();

    // }, [actions]);
    
    return(
        <>
            <ul>
                {store.contacts && store.contacts.map(contact => {
                    return(
                        <li key={contact.id} className="d-flex">
                            <Contact 
                                name={contact.name} 
                                phone={contact.phone}
                                email={contact.email}
                                address={contact.address}
                                id={contact.id}
                            />
                        </li>
                    );
                   
                    
                })}
            </ul>
        </>
    );
}

export default ContactList;