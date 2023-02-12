import {When, Then, Given} from "cypress-cucumber-preprocessor/steps";
import users from "../../../fixtures/authentication.json";


//When("I click on {string}", (Text) => {
  //  cy.contains(Text).click({force: true})
//})

When("I am not logged in", () => {  
    cy.visit("/") 
})

When("I Enter my valid Username", () => {   
    cy.xpath(users.XPath.UserName).type(users.ValidUserNameAndPassword.UserName)
})

When("I Enter my valid Password", () => {   
    cy.xpath(users.XPath.Passoword).type(users.ValidUserNameAndPassword.Passoword)
})

When("Press Login", () => {   
    cy.xpath(users.XPath.Login).click();
})

When("I Enter my invalid Password", () => {   
    cy.xpath(users.XPath.Passoword).type(users.INValidUserNameAndINPassword.Passoword)
})

When("I Enter my invalid Username", () => {   
    cy.xpath(users.XPath.UserName).type(users.INValidUserNameAndINPassword.UserName)
})

When("I Enter my empty Password", () => {   
    cy.xpath(users.XPath.Passoword).type(users.EmptyUserNameAndPassword.Passoword)
})

When("I Enter my empty Username", () => {   
    cy.xpath(users.XPath.UserName).type(users.EmptyUserNameAndPassword.UserName)
})

Then("I Should see", () => {
    //cy.contains(Text)
    cy.xpath(users.Assertion.ActualResultLogin).should('be.visible');
})














