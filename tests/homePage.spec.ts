import { test } from "../utilities/fixtures";
import homePageData from "../testData/homePageData.json";
import { ExpectedTextProvider } from "../utilities/valueProvider";
// import path from "path";


class HomePage extends ExpectedTextProvider {
    constructor() {
      super();
    }
  
    runTests() {
        test.describe('Validating home Page Test', () => {

        test('Validating test cases page test 7', async ({ runner,homePage, registerPage,contactUsPage,page }) => {
            await  runner.navigateTo(homePageData.homePageUrl)
            await  runner.verifyContainsUrl(homePageData.homePageUrl)
            await  runner.verifyElementIsVisible(homePage.homePageLogo)

            await runner.clickOnElement(homePage.testCasesButton)
            await runner.verifyContainsUrl(homePageData.testCasePageUrl)
            await runner.verifyElementIsVisible(homePage.testCasesText)
            await runner.verifyContainText(homePage.testCasesText,'Test Cases')

        })
        
        test('Validating Verify Subscription in home page test 10', async ({ runner,homePage, registerPage,contactUsPage,page,productPage }) => {
          await  runner.navigateTo(homePageData.homePageUrl)
          await  runner.verifyContainsUrl(homePageData.homePageUrl)
          await  runner.verifyElementIsVisible(homePage.homePageLogo)

          await runner.scrollToFooter()
          await runner.verifyElementIsVisible(homePage.subscriptionText)
          await runner.verifyContainText(homePage.subscriptionText,'Subscription')

          await runner.fillInputBox(homePage.subscribeEmailInput,'provat.raihan04@gmail.com')
          await runner.handleAlertWithMessage('You have been successfully subscribed!')
          await runner.clickOnElement(homePage.subscribeEmailSubmitButton)

          

      })
            
        })
        
    }
  }
  const testSuite = new HomePage();
  testSuite.runTests();