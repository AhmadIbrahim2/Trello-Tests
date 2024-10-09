/// <reference types = "cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import SharedDataUtils from '../../../pageObjects/shared/dataUtils.cy';
import MoveTemplateActions from '../../../pageObjects/moveTemplate/actions.cy';
import MoveTemplateAssertions from '../../../pageObjects/moveTemplate/assertions.cy';

const moveTemplateAct = new MoveTemplateActions();
const moveTemplateAss = new MoveTemplateAssertions();
const dataUtils = new SharedDataUtils();

const boardName = "First Board";
const listName = "My List";
const cardName = "Template Card";
const newList = "Doing";
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

Given('The user navigat to the card template',()=>{
    cy.wait(1000);
    moveTemplateAct.openCard(cardUrl);
});

When('Click on Move button',()=>{
    cy.wait(1000);
    moveTemplateAct.clickOnMoveButton();
});

When('Click on select list field',()=>{
    moveTemplateAct.clickOnSelectListField();
});

When('Select the list to move the card template to',()=>{
    moveTemplateAct.selectListToMoveTo(newList);
});

When('Click on Move to confirm the transfer',()=>{
    moveTemplateAct.clickOnMoveToConfirm();
});

When('Click on close button',()=>{
    moveTemplateAct.clickOnCloseButton();
});

Then('The card template should be moved to the selected list',()=>{
    moveTemplateAss.verifyMovedList(newList,cardName);
});