import React, { useState, useContext } from 'react';


import { Context } from "../store/appContext.js"
import { Link } from "react-router-dom";

const AddContact = () => {

    const {store, actions} = useContext(Context);
    
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");




    return (<>
        <div className="row">
            <div className="col-2"></div>
            <div className="col-8">
                <div className="heading">
                    <h1>Add a new contact</h1>
                </div>
                
                <section>
                    <div className="name-input-container">
                        <label htmlFor="name">Full Name</label>
                        <div className="name-input-field">
                            <input 
                                type="text" 
                                id='name' 
                                name='name' 
                                required
                                minLength="6" 
                                maxLength="20" 
                                size="100" 
                                onChange={e => setName(e.target.value)}
                                value={name}
                            />
                        </div>
                    </div>
                    <div className="email-input-container">
                        <label htmlFor="email">Email</label>
                        <div className="email-input-field">
                            <input 
                                type="email" 
                                id='email' 
                                name='email' 
                                required
                                minLength="6" 
                                maxLength="50" 
                                size="100"
                                onChange={e => setEmail(e.target.value)}
                                value={email} 
                                />
                        </div>
                    </div>
                    <div className="phone-input-container">
                        <label htmlFor="phone">Phone Number</label>
                        <div className="input">
                            <input 
                                type="tel" 
                                id='phone' 
                                name='phone' 
                                required
                                minLength="12" 
                                maxLength="15" 
                                size="100" 
                                onChange={e => setPhone(e.target.value)}
                                value={phone}
                            />
                        </div>
                    </div>
                    <div className="address-input-container">
                        <label htmlFor="address">Address</label>
                        <div className="input">
                        <input 
                                type="text" 
                                id='address' 
                                name='address' 
                                required
                                minLength="4" 
                                maxLength="50" 
                                size="100" 
                                onChange={e => setAddress(e.target.value)}
                                value={address}
                            />
                        </div>
                    </div>
                    
                </section>
                <Link to="/">
                    <button onClick={ () => {actions.CreateContact( name, email, phone, address)} }>save</button>
                </Link>    
                    
                <div>
                    <Link to="/">
                        <span>or get back to contacts</span>
                    </Link>
                </div>
                
                    

            </div>
            <div className="col-2"></div>
        </div>
    </>);
}

export default AddContact