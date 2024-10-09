/// <reference types = "cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import SharedDataUtils from '../../../pageObjects/shared/dataUtils.cy';
import DeleteCardActions from '../../../pageObjects/deleteCard/actions.cy';
import DeleteCardAssertions from '../../../pageObjects/deleteCard/assertions.cy';

const dataUtils = new SharedDataUtils();
const deleteCardAct = new DeleteCardActions();
const deleteCardAss = new DeleteCardAssertions();

const boardName = "First Board";
const listName = "My list";
const cardName = "my card"
let cardUrl;

before(()=>{

    cy.loginToTrello();
    cy.wait(3000);

    //Create new board
    dataUtils.createBoard(boardName).as("boardResponse");

    //Create new list
    cy.get("@boardResponse").then((resp)=>{
        dataUtils.createList(listName, resp.body.id).as("listResponse");
    });

    //open board and make screenshot
    cy.get("@boardResponse").then((resp)=>{
        cy.visit(resp.body.url);
        cy.wait(3000)
    });
    cy.screenshot({capture:'fullPage'});

    //Create new card
    cy.get("@listResponse").then((resp)=>{
        dataUtils.createCard(resp.body.id, cardName).as("cardResponse");
    });

    //Get card URL
    cy.get("@cardResponse").then((resp)=>{
        cardUrl = resp.body.url;
    });

});

Given('The user navigate to the card',()=>{
    deleteCardAct.openCard(cardUrl);
    cy.wait(2000);
});

When('Click on Archive',()=>{
    deleteCardAct.clickOnArchive();
});

When('Click on Delete',()=>{
    deleteCardAct.clickOnDelete();
});

When('Confirm card deletion',()=>{
    cy.wait(3000)
    deleteCardAct.ConfirmCardDeletion();
});

Then('The card should be deleted from the list',()=>{
    deleteCardAss.verifyCardIsDeleted(cardName);
});