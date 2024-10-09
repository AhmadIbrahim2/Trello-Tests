/// <reference types = "cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import CreateBoardActions from '../../../pageObjects/createBoard/actions.cy';
import CreateBoardAssertions from '../../../pageObjects/createBoard/assertions.cy';

const createBoardAct = new CreateBoardActions();
const createBoardAss = new CreateBoardAssertions();

const boardName = "First Baord";

Given ("The user login in trello website",()=>{
    cy.loginToTrello();
    cy.wait(3000);
});

When ("Click on create button from navbar",()=>{
    createBoardAct.clickOnCreateButton();
});

When ("Choose create board from drop down options",()=>{
    createBoardAct.chooseCreateBoard();
});

When ("Type the board title in board title field",()=>{
    createBoardAct.typeBoardTitle(boardName);
});

When ("Click on create button",()=>{
    createBoardAct.clickOnCreate();
});

Then ("The board will be created successfully",()=>{
    createBoardAss.checkTheBoardExist(boardName);
});