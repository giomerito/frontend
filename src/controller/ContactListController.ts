import { ContactListView } from "../view/ContactListView";
import { ContactListModel } from "../model/ContactListModel";
         
export class ContactListController{
    
    private readonly _view = new ContactListView();
    private _model = new ContactListModel();

    initialize(){
        this._view.showContacts(this._model);
    }
}