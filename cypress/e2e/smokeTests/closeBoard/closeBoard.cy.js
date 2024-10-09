/// <reference types = "cypress" />
import { Given, When, Then } from 'cypress-cucumber-preprocessor/steps';
import CloseBoardActions from '../../../pageObjects/closeBoard/actions.cy';
import CloseBoardAssertions from '../../../pageObjects/closeBoard/assertions.cy';
import SharedDataUtils from '../../../pageObjects/shared/dataUtils.cy';

const closeBoardAct = new CloseBoardActions();
const closeBoardAss = new CloseBoardAssertions();
const dataUtils = new SharedDataUtils();
const BoardName = "First Board";
let boardUrl;

before(()=>{
    cy.loginToTrello();
    cy.wait(3000);
    dataUtils.createBoard(BoardName).then((resp)=>{
        boardUrl = resp.body.url;
    })
});

Given("The user navigate to the Board",()=>{
    cy.wait(3000)
    closeBoardAct.openBoard(boardUrl);
});

When("The user click on board actions menu",()=>{
    closeBoardAct.clickOnBoardActionsMenu();
});

When("The user select Close Board from the menu",()=>{
    closeBoardAct.selectCloseBoard();
});

When("Click on Close button",()=>{
    closeBoardAct.clickOnClose();
    cy.wait(3000)
});

Then("The board should be closed successfully",()=>{
    closeBoardAss.CheckClosedBoard();
});