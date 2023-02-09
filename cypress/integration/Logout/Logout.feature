Feature: Logout

  Scenario: 1.Logout
  Given I am logged in
  Then I Should see sauce labs backpack
  When I Press menu button container
  And I Press Logout
  Then I Should see login