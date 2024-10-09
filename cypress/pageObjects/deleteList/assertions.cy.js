class DeleteListAssertions {

    checkDeletedList(listName){
        cy.contains(`${listName}`).should("not.exist");
        return this;
    };
};

export default DeleteListAssertions;