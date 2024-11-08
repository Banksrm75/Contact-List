
const getState = ( { getStore, getActions, setStore } ) => {
    return {
        store: {
            demo: [
                {
                    title: "FIRST",
                    background: "white",
                    initial: "white"
                },
                {
                    title: "SECOND",
                    background: "white",
                    initial: "white"
                }
            ],
			contacts: []
            
        },
        actions: {
            // // Use getActions to call a function within a fuction
            // exampleFunction: () => {
            //     getActions().changeColor(0, "green");
            // },
            // loadSomeData: () => {
            //     /**
            //         fetch().then().then(data => setStore({ "foo": data.bar }))
            //     */
            // },
            
			getContacts: () => {
				fetch('https://playground.4geeks.com/contact/agendas/Banksrm/contacts')
				.then (response => {
					if(!response.ok) {
						throw Error("Error trying to get info")
					}
					return response.json();
				})
				.then(data => {					
					setStore( {contacts: data.contacts} )
				})
				.catch(error => console.log("Error: ", error))
			},

            deleteContact: (contactID) => {
                // use fetch to delete a contact
                fetch(`https://playground.4geeks.com/contact/agendas/Banksrm/contacts/${contactID}`, {
                    method: "DELETE"
                })
                .then(response => {
                    if (response.status !== 204) {
                        console.log("Error! Aborting Delete");
                        throw Error(response.statusText);
                    }
                    console.log("Deletion of contact successful");
                    let updatedContacts = getStore().contacts.filter( (contact) => {
                        return(contactID !== contact.id);
                    });
                    setStore({contacts: updatedContacts});
                    })
                .catch(error => console.log(error));

                
            },

            CreateContact: (name, email, phone, address) => {
                
                let contact = {
                    
                    name: name,
                    phone: phone,
                    email: email,
                    address: address
                    
                }

                let options = {
                        method: 'POST',
                        body: JSON.stringify(contact), 
                        headers: {
                          'Content-Type': 'application/json'
                        }
                      }
                fetch(`https://playground.4geeks.com/contact/agendas/Banksrm/contacts`, options)
                .then(response => {
                    if(!response.ok) {
                        throw Error("Error! Unable to post new contact.");
                    }
                    console.log("Contact successfully added");
                    getActions().getContacts();
                    return response.json();                    
                })
                .catch(error => console.log("More info on error: ", error));                
            },

            editContact: ( contact, id ) => {
                    
                let options = {
                        method: 'PUT',
                        body: JSON.stringify(contact), 
                        headers: {
                          'Content-Type': 'application/json'
                        }
                      }
                fetch(`https://playground.4geeks.com/contact/agendas/Banksrm/contacts/${id}`, options)
                .then(response => {
                    if(!response.ok) {
                        throw Error("Error! Unable to edit new contact.");
                    }
                    console.log("Contact successfully edited");
                    // setStore( {contacts: data.contact} )
                    return response.json();                    
                })
                .catch(error => console.log("More info on error: ", error));                
            }
        }
    };
};
export default getState;