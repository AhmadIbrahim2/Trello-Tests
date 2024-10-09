class DeleteListActions {
    openBoard(url){
        cy.visit(url);
        return this;
    };

    clickOnListActionMenu(listName){
        cy.contains(`${listName}`).parent().parent().within(()=>{
            cy.findByTestId("list-edit-menu-button").click();
        })
        return this;
    }

    chooseArchiveList(){
        cy.findByTestId("list-actions-archive-list-button").click();
        return this;
    }
};

export default DeleteListActions;