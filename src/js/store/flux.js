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
            // Use getActions to call a function within a fuction
            exampleFunction: () => {
                getActions().changeColor(0, "green");
            },
            loadSomeData: () => {
                /**
                    fetch().then().then(data => setStore({ "foo": data.bar }))
                */
            },
            // changeColor: (index, color) => {
            //     //get the store
            //     const store = getStore();
            //     //we have to loop the entire demo array to look for the respective index
            //     //and change its color
            //     const demo = store.demo.map((elm, i) => {
            //         if (i === index) elm.background = color;
            //         return elm;
            //     });
            //     //reset the global store
            //     setStore({ demo: demo });
            // }
			getContacts: () => {
				fetch('https://playground.4geeks.com/contact/agendas/Banksrm/contacts')
				.then (response => {
					if(!response.ok) {
						throw Error("Error trying to get info")
					}
					return response.json();
				})
				.then(data => {
					// gives the array of objects
					console.log(data.contacts)
					setStore( {contacts: contacts} )
				})
				.catch(error => console.log("Error: ", error))
			}
        }
    };
};
export default getState;