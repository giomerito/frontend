import { ContactListModel } from "../model/ContactListModel";

function elementOf<T extends Element>(id: string) {
    return <T> document.querySelector(id);
}

export class ContactListView{
    private readonly _contactList = 
        elementOf<HTMLUListElement>("#contactList");

    private readonly _contactItemTemplate = 
        elementOf<Element>("#contactItemTamplate"); 

    contructor(){

    }  

    showContacts(contacts: ContactListModel){

    } 

}