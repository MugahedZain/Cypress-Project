Feature: Login Page


  Scenario: 1.login with valid user name and valid password
  Given I am not logged in
  When I Enter my valid Username
  And I Enter my valid Password
  And Press Login
  Then I Should see
 
  Scenario: 2.login with valid user name and invalid password
  Given I am not logged in
  When I Enter my valid Username
  And I Enter my invalid Password
  And Press Login
  Then I Should see 

  Scenario: 3.login with invalid user name and valid password
  Given I am not logged in
  When I Enter my invalid Username
  And I Enter my valid Password
  And Press Login
  Then I Should see 

  Scenario: 4.login with invalid user name and invalid password
  Given I am not logged in
  When I Enter my invalid Username
  And I Enter my invalid Password
  And Press Login
  Then I Should see 


  Scenario: 5.login with valid user name and empty password
  Given I am not logged in
  When I Enter my valid Username
  And I Enter my empty Password
  And Press Login
  Then I Should see 

  Scenario: 6.login with empty user name and valid password
  Given I am not logged in
  When I Enter my empty Username
  And I Enter my valid Password
  And Press Login
  Then I Should see 


  Scenario: 7.login with empty user name and empty password
  Given I am not logged in
  When I Enter my empty Username
  And I Enter my empty Password
  And Press Login
  Then I Should see

  

#Scenario: 2.login with invalid data
 # Given I am not logged in
 # When I Enter "mugahed_fayhi" as my Username
  #And I Enter "mzkh" as my Password
 # And Press Login











 # When Press Sauce Labs Backpack
 # And Press ADD TO CART
 # Then I Should see "Remove"
 # When Press shopping
 # Then I Should see "Remove"
 # When Press Checkout
 # And I Enter "mugahed" as my firstName
 # And I Enter "fathi" as my lastName
 # And I Enter "mzkhi" as my postalCode
 # And Press continue   
 # And Press finish
 # Then I Should see "THANK YOU FOR YOUR ORDER"
 # When Press Back Home






