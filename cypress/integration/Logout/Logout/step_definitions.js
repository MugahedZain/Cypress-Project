import {When, Then, Given} from "cypress-cucumber-preprocessor/steps";
import users from "../../../fixtures/authentication.json";

When("I am logged in", () => {  
    cy.visit("/") 
    cy.xpath(users.XPath.UserName).type(users.ValidUserNameAndPassword.UserName)
    cy.xpath(users.XPath.Passoword).type(users.ValidUserNameAndPassword.Passoword)
    cy.xpath(users.XPath.Login).click();
})
Then("I Should see sauce labs backpack", () => {
    //cy.contains(Text)///////////////////////
    cy.xpath(users.Assertion.ActualResultLogin).should('be.visible');
})
When("I Press menu button container", () => {
    cy.xpath(users.XPath.MenueButton).click();
})

When("I Press Logout", () => {
    cy.xpath(users.XPath.LogoutButton).click();
})

Then("I Should see login", () => {
    //cy.contains(Text)
    cy.xpath(users.XPath.Login).should('be.visible');
})