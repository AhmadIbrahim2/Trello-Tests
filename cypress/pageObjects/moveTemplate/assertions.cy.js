class MoveTemplateAssertions{
    verifyMovedList(newList, cardName){
        cy.contains(`${newList}`).parents().eq(2).should("contain",cardName).and("be.visible");
        return this;
    }
};

export default MoveTemplateAssertions;