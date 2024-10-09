/// <reference types = "cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import SharedDataUtils from '../../../pageObjects/shared/dataUtils.cy';
import UpdataTemplateNameActions from '../../../pageObjects/updateTemplateName/actions.cy';
import UpdateTemplateNameAssertions from '../../../pageObjects/updateTemplateName/assertions.cy';

const updateTemplateAct = new UpdataTemplateNameActions();
const updateTemplateAss = new UpdateTemplateNameAssertions();
const dataUtils = new SharedDataUtils();

const boardName = "First Board";
const listName = "My List";
const cardName = "Template Card";
const newCardName = "New Card";
let cardUrl;

before(()=>{

    //Login to Trello Website
    cy.loginToTrello();
    cy.wait(3000);

    //Create New Board
    dataUtils.createBoard(boardName).as("boardResponse");

    //Create New List
    cy.get("@boardResponse").then((resp)=>{
        dataUtils.createList(listName, resp.body.id).as("listResponse");
    });

    //Create card template
    cy.get("@listResponse").then((resp)=>{
        dataUtils.createCardTemplate(resp.body.id, cardName).as("cardResponse");
    });

    //Get card URL
    cy.get("@cardResponse").then((resp)=>{
        cardUrl = resp.body.url;
    });

});

Given('The user navigate to the card template',()=>{
    cy.wait(1000)
    updateTemplateAct.openCard(cardUrl);
});

When('Click on card title text area',()=>{
    updateTemplateAct.clickOnCardTitleTextArea();
});

When('Enter new name for the template',()=>{
    updateTemplateAct.enterTemplateName(newCardName);
});

When('Click on Close button',()=>{
    updateTemplateAct.clickOnCloseButton();
});

Then('The new name should be displayed in the card title field',()=>{
    updateTemplateAss.verifyTemplateName(newCardName);
});