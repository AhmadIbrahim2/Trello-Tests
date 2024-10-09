/// <reference types = "cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import SharedDataUtils from '../../../pageObjects/shared/dataUtils.cy';
import DeleteListActions from '../../../pageObjects/deleteList/actions.cy';
import DeleteListAssertions from '../../../pageObjects/deleteList/assertions.cy';

const deleteListAct = new DeleteListActions();
const deleteListAss = new DeleteListAssertions();

const dataUtils = new SharedDataUtils();
const boardName = "First Board";
const listName = "Doing";
let boardUrl;

before(()=>{
    cy.loginToTrello();
    cy.wait(3000);
    
    dataUtils.createBoard(boardName).then((resp)=>{
        boardUrl = resp.body.url;
    });
});

Given('The user navigate to the board',()=>{
    cy.wait(3000)
    deleteListAct.openBoard(boardUrl);
});

When('Click on the list actions menu',()=>{
    deleteListAct.clickOnListActionMenu(listName);
});

When('Choose archive this list from menu',()=>{
    deleteListAct.chooseArchiveList();
});

Then('The list should be deleted from the board',()=>{
    deleteListAss.checkDeletedList(listName);
});