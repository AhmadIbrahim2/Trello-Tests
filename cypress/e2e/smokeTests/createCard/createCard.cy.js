/// <reference types = "cypress" />
import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import CreateCardActions from "../../../pageObjects/createCard/actions.cy";
import CreateCardAssertions from "../../../pageObjects/createCard/assertions.cy";
import SharedDataUtils from "../../../pageObjects/shared/dataUtils.cy";

const createCardAct = new CreateCardActions();
const createCardAss = new CreateCardAssertions();
const dataUtils = new SharedDataUtils();

const cardName = "My Card";
const boardName = "First Board";
let boardUrl,boardID;

before(()=>{

    cy.loginToTrello();
    cy.wait(3000);

    dataUtils.createBoard(boardName).then((resp)=>{
        boardUrl = resp.body.url;
        boardID = resp.body.id;
    });

});

Given('The user navigate to the board',()=>{
    createCardAct.openBoard(boardUrl);
    cy.wait(3000)
});

When('Click on Add a card button',()=>{
    createCardAct.clickOnAddCard();
});

When('Types a name in the card title input field',()=>{
    createCardAct.typeCardName(cardName);
});

When('Click on Add card button',()=>{
    createCardAct.clickOnAddCardButton();
});

Then('The new card should be created successfully',()=>{
    createCardAss.verifyCardCreated(cardName);
});

after(()=>{
    dataUtils.deleteBoard(boardID);
    cy.wait(3000)
});