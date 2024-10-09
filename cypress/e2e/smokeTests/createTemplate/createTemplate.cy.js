/// <reference types = "cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import SharedDataUtils from '../../../pageObjects/shared/dataUtils.cy';
import CreateTemplateActions from '../../../pageObjects/createTemplate/actions.cy';
import CreateTemplateAssertions from '../../../pageObjects/createTemplate/assertions.cy';

const createTemplateAct = new CreateTemplateActions();
const createTemplateAss = new CreateTemplateAssertions();
const dataUtils = new SharedDataUtils();
const boardName = "First Board";
const templateName = "New Template";
let boardUrl, boardId;

before(()=>{

    //login to trello website
    cy.loginToTrello();
    cy.wait(3000);

    //create new board
    dataUtils.createBoard(boardName).then((resp)=>{
        boardUrl = resp.body.url;
        boardId = resp.body.id
    });

});

Given('The user navigate to the board',()=>{
    cy.wait(1000)
    createTemplateAct.openBoard(boardUrl);
});

When('Click on create from template button',()=>{
    createTemplateAct.clickOnCreateFromTemplate();
});

When('Click on create a new template button',()=>{
    createTemplateAct.clickOnCreateATemplate();
});

When('Type template title in template title input field',()=>{
    createTemplateAct.typeTemplateName(templateName);
});

When('Click on Add button',()=>{
    createTemplateAct.clickOnAddButton();
});

When('Close the Form',()=>{
    cy.wait(3000);
    createTemplateAct.closeForm();
});

Then('The card template should be created successfully',()=>{
    createTemplateAss.verifyCardTemplateCreated(templateName);
});

after(()=>{
    //delete the board
    dataUtils.deleteBoard(boardId);
    cy.wait(3000);
});