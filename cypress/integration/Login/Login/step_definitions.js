import {When, Then, Given} from "cypress-cucumber-preprocessor/steps";
import users from "../../../fixtures/authentication.json";
/*import {
   confirmBooking,
    createBooking,

    getB1G1patient2CouponCode,
    getPatient,
    patient2CouponCode
} from "../../../utlis/bookings";
import {DOCTORS, PAGES_PREFIX, DISCOUNTS, PATIENTS} from "../../../utlis/types";
import patients from "../../../fixtures/patients.json";
import doctors from "../../../fixtures/doctors.json";*/

//When("I go to clinics page", () => {
//   cy.visit("/clinics");
//})


//When("I click on {string}", (Text) => {
  //  cy.contains(Text).click({force: true})
//})

//When("I Choose {string}", (Text) => {   
  //  cy.contains(Text).click({force: true})
//})

When("I am not logged in", () => {  
    cy.visit("/") 
})


//First Scenario
When("I Enter my valid Username", () => {   
    cy.xpath(users.XPath.UserName).type(users.ValidUserNameAndPassword.UserName)
})

When("I Enter my valid Password", () => {   
    cy.xpath(users.XPath.Passoword).type(users.ValidUserNameAndPassword.Passoword)
})

When("Press Login", () => {   
    cy.xpath(users.XPath.Login).click();
})

//Second Scenario 
When("I Enter my invalid Password", () => {   
    cy.xpath(users.XPath.Passoword).type(users.INValidUserNameAndINPassword.Passoword)
})

//Third Scenario
When("I Enter my invalid Username", () => {   
    cy.xpath(users.XPath.UserName).type(users.INValidUserNameAndINPassword.UserName)
})

//Fourth Scenario
//Fifth Scenario
When("I Enter my empty Password", () => {   
    cy.xpath(users.XPath.Passoword).type(users.EmptyUserNameAndPassword.Passoword)
})

//Sixth Scenario
When("I Enter my empty Username", () => {   
    cy.xpath(users.XPath.UserName).type(users.EmptyUserNameAndPassword.UserName)
})
//Seventh Scenario
/////////////////////////////////////////////////////////////////////////////////////////

Then("I Should see", () => {
    //cy.contains(Text)
    cy.xpath(users.Assertion.ActualResultLogin).should('be.visible');
})

When("Press Sauce Labs Backpack", () => {   
    cy.xpath("//*[contains(text (), 'Sauce Labs Backpack')][@class='inventory_item_name']").click();
})

When("Press ADD TO CART", () => {   
    cy.xpath("//*[@id='add-to-cart-sauce-labs-backpack']").click();
})

/*Then("I Should see {string}", (Text) => {
    cy.contains(Text);
})*/
When("Press shopping", () => {   
    cy.xpath("//*[@class='shopping_cart_link']").click();
})

When("Press Checkout", () => {   
    cy.xpath("//*[@data-test='checkout']").click();
})

When("I Enter {string} as my firstName", (firstName) => {   
    cy.xpath("//*[@id='first-name']").type(firstName)
})
When("I Enter {string} as my lastName", (lastName) => {   
    cy.xpath("//*[@id='last-name']").type(lastName)
})
When("I Enter {string} as my postalCode", (postalCode) => {   
    cy.xpath("//*[@id='postal-code']").type(postalCode)
})

When("Press continue", () => {   
    cy.xpath("//*[@id='continue']").click();
})

When("Press finish", () => {   
    cy.xpath("//*[@id='finish']").click();
})

When("Press Back Home", () => {   
    cy.xpath("//*[@id='back-to-products']").click();
})












