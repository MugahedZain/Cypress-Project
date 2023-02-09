import {When, Then, Given} from "cypress-cucumber-preprocessor/steps";
import users from "../../../fixtures/authentication.json";


When("I am logged in", () => {  
    cy.visit("/") 
    cy.xpath(users.XPath.UserName).type(users.ValidUserNameAndPassword.UserName)
    cy.xpath(users.XPath.Passoword).type(users.ValidUserNameAndPassword.Passoword)
    cy.xpath(users.XPath.Login).click();
})
Then("I Should see sauce labs backpack", () => {
    //cy.contains(Text)
    cy.xpath(users.Assertion.ActualResultLogin).should('be.visible');
})
When("I Press sauce labs backpack", () => {   
    cy.xpath(users.Assertion.ActualResultLogin).click();
    //cy.xpath(users.XPath.AllItemADD).click().
    //cy.xpath(users.XPath.AllItemPhoto).click();
})

When("I Press add to cart", () => {   
    cy.xpath(users.XPath.AddToCart).click();
})

When("I Press shopping cart", () => {   
    cy.xpath(users.XPath.ShoppingCart).click();
})

Then("I Should see remove", () => {
    //cy.contains(Text)
    cy.xpath(users.Assertion.ActualResultRemove).should('be.visible');
})

When("I Press checkout", () => {   
    cy.xpath(users.XPath.Checkout).click();
})

When("I Fill data", () => {   
    cy.xpath(users.XPath.FirstName).type(users.LoggedUserInformation.FirstName)
    cy.xpath(users.XPath.LastName).type(users.LoggedUserInformation.LastName)
    cy.xpath(users.XPath.ZipCode).type(users.LoggedUserInformation.ZipCode)
})

When("I Press continue", () => {   
    cy.xpath(users.XPath.Continue).click();
})
When("I Press finish", () => {   
    cy.xpath(users.XPath.Finish).click();
})

When("I Press back home", () => {   
    cy.xpath(users.XPath.BackHome).click();
})