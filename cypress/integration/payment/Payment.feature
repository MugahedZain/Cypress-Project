Feature: Payment




  Scenario:1.Add Product
  Given I am logged in
  Then I Should see sauce labs backpack
  When I Press sauce labs backpack
  And I Press add to cart
  And I Press shopping cart
  Then I Should see remove
  When I Press checkout
  And I Fill data
  And I Press continue
  And I Press finish
  And I Press back home

  Scenario:2.Add Product
  Given I am logged in
  Then I Should see sauce labs backpack
  When I Press add to cart
  And I Press shopping cart
  Then I Should see remove
  When I Press checkout
  And I Fill data
  And I Press continue
  And I Press finish
  And I Press back home


















