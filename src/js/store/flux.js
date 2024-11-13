const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contactList: [

			],

		},
		actions: {
			getContactList: async () => {
				const store = getStore();
				const response = await fetch("https://playground.4geeks.com/contact/agendas/Arcarius41");
				if (response.ok) {
					const data = await response.json();
					setStore({ contactList: data.contacts });
				} else {
					const response = await fetch(
						"https://playground.4geeks.com/contact/agendas/Arcarius41",
						{ method: "POST" }
					);
				}
			},
			addContact: async (full_name, email, phone, address) => {
				const store = getStore();
				const response = await fetch("https://playground.4geeks.com/contact/agendas/Arcarius41/contacts", {
					method: "POST",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						name: full_name,
						email: email,
						address: address,
						phone: phone
					})
				});
				if (response.ok) {
					getActions().getContactList();
				}
			},
			updateContact: async (full_name, email, phone, address, contactId) => {
				const store = getStore();
				const response = await fetch("https://playground.4geeks.com/contact/agendas/Arcarius41/contacts/" + contactId, {
					method: "PUT",
					headers: {
						"Content-Type": "application/json"
					},
					body: JSON.stringify({
						name: full_name,
						email: email,
						address: address,
						phone: phone
					})
				});
				const data = await response.json();
				if (response.ok) {
					getActions().getContactList();
				}
			},
			deleteContact: async (contactId) => {
				const store = getStore();
				const response = await fetch("https://playground.4geeks.com/contact/agendas/Arcarius41/contacts/" + contactId, {
					method: "DELETE",
					headers: {
						"Content-Type": "application/json"
					}
				});
				if (response.ok) {
					getActions().getContactList();
				}
			}
		}
	};
};

export default getState;
