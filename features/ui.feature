Feature: user journey of applying for a credit card

    Background:
        Given I am on a bank card web page

    Scenario Outline: check the eligibility of the person applying

        When I enter <username> <email> <address>
        And I submit the details
        Then I should see the eligible cards for <username>

        Examples:
            | username | email             | address |
            | Boris    | boris@gmail.com   | SE15JX  |
            | Theresa  | theresa@gmail.com | RH120BA |
            | Angela   | angela@gmail.com  | E34NE   |
            | Xyz      | xyz@gmail.com     | E34NE   |


    # Scenario Outline: check for the error messages on cards page

    #     When I click on submit with empty <fields>
    #     Then I should get <errormessage>

    #     Examples:
    #         | fields    | errormessage                                              |
    #         | all       | Name is required. Email is required. Address is required. |
    #         | emailaddr | Email is required. Address is required.                   |
    #         | nameaddr  | Name is required. Address is required.                    |
    #         | nameemail | Name is required. Email is required.                      |
    #         | name      | Name is required.                                         |
    #         | email     | Email is required.                                        |
    #         | addr      | Address is required.                                      |



