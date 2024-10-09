class DeleteCardActions {

    openCard(url){
        cy.visit(url);
        return this;
    };

    clickOnArchive(){
        cy.findByTestId("card-back-archive-button").click();
        return this;
    };

    clickOnDelete(){
        cy.findByTestId("card-back-delete-card-button").click();
        return this;
    };

    ConfirmCardDeletion(){
        cy.findByTestId("popover-confirm-button").click();
        return this;
    }
}

export default DeleteCardActions;