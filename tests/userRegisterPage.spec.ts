import { test } from "../utilities/fixtures";
import homePageData from "../testData/homePageData.json";
import { ExpectedTextProvider } from "../utilities/valueProvider";



class UserRegister extends ExpectedTextProvider {
    constructor() {
      super();
    }
  
    runTests() {
        test.describe('Validating Register User Page Test', () => {
            test('Validating Register User', async ({ runner,homePage, registerPage }) => {
                await  runner.navigateTo(homePageData.homePageUrl)
                await  runner.verifyContainsUrl(homePageData.homePageUrl)
                await  runner.verifyElementIsVisible(homePage.homePageLogo)
                await runner.clickOnElement(homePage.signupButton)
                await runner.verifyElementIsVisible(registerPage.signupHeadertext)
                await runner.verifyContainText(registerPage.signupHeadertext,'New User Signup!')
                await runner.typeInputBox(registerPage.nameInputText, "provat")
                await runner.typeInputBox(registerPage.emailInputText, "provat.raihan015@gmail.com")
                await runner.clickOnElement(registerPage.signupButton)


                await runner.verifyElementIsVisible(registerPage.accountInfoHeaderText)
                await runner.verifyElementIsVisible(registerPage.userTitleRadioButton)
                await runner.clickOnElement(registerPage.userTitleRadioButton)
                await runner.verifyToHaveValue(registerPage.userNameInputField,'provat')
                await runner.verifyToHaveValue(registerPage.userEmailInputfield,'provat.raihan015@gmail.com')
                await runner.fillInputBox(registerPage.userPasswordInputField,'f u btch')
                await runner.selectDropdownByValue(registerPage.dobDayButton,'25')
                await runner.selectDropdownByValue(registerPage.dobMonthButton,'6')
                await runner.selectDropdownByValue(registerPage.dobYearButton,'1998')
                await runner.clickOnElement(registerPage.signupCheckbox)
                await runner.clickOnElement(registerPage.receiveOfferCheckbox)

                await runner.fillInputBox(registerPage.firstNameTextBox,'provat')
                await runner.fillInputBox(registerPage.lastNameTextBox,'raihan')
                await runner.fillInputBox(registerPage.companyTextBox,'chat')
                await runner.fillInputBox(registerPage.addressTextBox,'nijer')
                await runner.fillInputBox(registerPage.address2TextBox,'nijer2')
                await runner.selectDropdownByValue(registerPage.countrySelectBox,'Canada')
                await runner.fillInputBox(registerPage.stateTextBox,'mirpur')
                await runner.fillInputBox(registerPage.cityTextBox,'Dhaka')
                await runner.fillInputBox(registerPage.zipCodeTextBox,'1216')
                await runner.fillInputBox(registerPage.mobileNumTextBox,'01521331717')


                await runner.clickOnElement(registerPage.createAccountButton)


                await runner.verifyElementIsVisible(registerPage.accCreatedMessage)
                await runner.verifyContainText(registerPage.accCreatedMessage,'Account Created!')
                
                await runner.clickOnElement(registerPage.continueButton)

                

                await runner.verifyElementIsVisible(registerPage.loggedInShow)

                await runner.verifyContainText(registerPage.loggedInShow,'Logged in as provat')

                await runner.clickOnElement(registerPage.deleteAccButton)

                await runner.verifyElementIsVisible(registerPage.deleteAccMessage)
                await runner.verifyContainText(registerPage.deleteAccMessage,'Account Deleted!')
                await runner.verifyElementIsVisible(registerPage.deleteAccContinueButton)
                await runner.clickOnElement(registerPage.deleteAccContinueButton)


                
            })
            
        })
        
    }
  }
  const testSuite = new UserRegister();
  testSuite.runTests();
  

