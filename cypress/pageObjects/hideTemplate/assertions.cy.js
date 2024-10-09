class HideTemplateAssertions {
    verifyCardHiddenFromList(listName, cardName){
        cy.contains(`${listName}`).parents().eq(2).within(()=>{
            cy.contains(`${cardName}`).should("not.exist");
        })
        return this;
    }
};

export default HideTemplateAssertions;