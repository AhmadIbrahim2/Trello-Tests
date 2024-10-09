
class ChangeBackgroundAssertions {
    
    verifyChangeBackgrounf(){
        cy.get('#trello-root')
        .should('have.css', 'background-image')
        .and('include', 'url("https://trello-backgrounds.s3.amazonaws.com/SharedBackground/1365x2048/8110a0fa7db706d17d11783299fa95d7/photo-1727946256654-8486f79e3f69.webp")')    }
};

export default ChangeBackgroundAssertions;