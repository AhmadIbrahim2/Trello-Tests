/// <reference types = "cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import SharedDataUtils from '../../../pageObjects/shared/dataUtils.cy';
import HideTemplateActions from '../../../pageObjects/hideTemplate/actions.cy';
import HideTemplateAssertions from '../../../pageObjects/hideTemplate/assertions.cy';

const hideTemplateAct = new HideTemplateActions();
const hideTemplateAss = new HideTemplateAssertions();
const dataUtils = new SharedDataUtils();

const boardName = "First Board";
const listName = "My List";
const cardName = "Template Card";
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

Given('That the user navigate to the tempalte card',()=>{
    cy.wait(1000);
    hideTemplateAct.openCard(cardUrl);
});

When('The user click on the Hide from list button',()=>{
    hideTemplateAct.clickHideFromListButton();
});

When('Click on close button',()=>{
    hideTemplateAct.clickCloseButton();
});

Then('The card template should be hidden from the list',()=>{
    hideTemplateAss.verifyCardHiddenFromList(listName, cardName);
});