import { APIKey, APIToken } from "../../support/constants"

class SharedDataUtils {

    createBoard = (BoardName)=>{
        return cy.request('POST',`https://api.trello.com/1/boards/?name=${BoardName}&key=${APIKey}&token=${APIToken}`)
    };

    deleteBoard = (BoardID)=>{
        return cy.request('DELETE',`https://api.trello.com/1/boards/${BoardID}?key=${APIKey}&token=${APIToken}`);
    };

    createList = (listName,boardID)=>{
        return cy.request("POST",`https://api.trello.com/1/lists?name=${listName}&idBoard=${boardID}&key=${APIKey}&token=${APIToken}`)
    };

    createCard = (listID,cardName)=>{
        return cy.request("POST",`https://api.trello.com/1/cards?name=${cardName}&idList=${listID}&key=${APIKey}&token=${APIToken}`)
    };

    createCardTemplate = (listID,cardName)=>{
        return cy.request("POST",`https://api.trello.com/1/cards?name=${cardName}&isTemplate=${true}&idList=${listID}&key=${APIKey}&token=${APIToken}`)
    }
};

export default SharedDataUtils;