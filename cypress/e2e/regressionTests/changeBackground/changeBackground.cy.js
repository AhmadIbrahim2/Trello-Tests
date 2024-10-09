/// <reference types = "cypress" />
import { Given, When } from 'cypress-cucumber-preprocessor/steps';
import SharedDataUtils from '../../../pageObjects/shared/dataUtils.cy';
import ChangeBackgroundActions from '../../../pageObjects/changeBackground/actions.cy';
import ChangeBackgroundAssertions from '../../../pageObjects/changeBackground/assertions.cy';

const changeBackgroundAct = new ChangeBackgroundActions();
const changeBackgroundAss = new ChangeBackgroundAssertions();
const dataUtils = new SharedDataUtils();
const boardName = "First Board";
let boardUrl;

before(()=>{
    cy.loginToTrello();
    cy.wait(3000);

    dataUtils.createBoard(boardName).then((resp)=>{
        boardUrl = resp.body.url;
    })

})

Given("The user navigate to the board",()=>{
    cy.wait(1000);
    changeBackgroundAct.openBoard(boardUrl);
});

When("Click on menu icon",()=>{
    cy.wait(1000);
    changeBackgroundAct.clickOnMenuIcon();
});

When("Click on Change background",()=>{
    changeBackgroundAct.clickOnChangeBackground();
});

When("Choose Photos or Colors",()=>{
    changeBackgroundAct.chooseBackgroundType();
});

When("Choose the background",()=>{
    changeBackgroundAct.chooseBackgroundPhoto();
});

Then('The background of the board should be changed',()=>{
    changeBackgroundAss.verifyChangeBackgrounf();
});