import { Given , And , Then , When} from "cypress-cucumber-preprocessor/steps";
//import HomePage from '../PageObjects/HomePage';
//import CheckoutPage from '../PageObjects/CheckoutPage';
//import BillingPage from '../PageObjects/BillingPage';

//Object Creation for PageObject Page Class and assigning it to a constant variable

//const homePage=new HomePage();
//const checkoutPage= new CheckoutPage();
//const billingPage=new BillingPage();
    
//test steps 
//test steps 
Given('I open', () => {
    cy.fixture('example.json').then((data) => {
        debugger;
    cy.visit(data.url);
    });
    
})

Given('I open a', () => {
    cy.fixture('example.json').then((data) => {
        debugger;
    cy.visit(data.url);
    });
    
})