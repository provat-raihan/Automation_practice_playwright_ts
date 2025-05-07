import { test } from "../utilities/fixtures";
import homePageData from "../testData/homePageData.json";
import { ExpectedTextProvider } from "../utilities/valueProvider";
import path from "path";


class ContactUs extends ExpectedTextProvider {
    constructor() {
      super();
    }
  
    runTests() {
        test.describe('Validating contact us Page Test', () => {
            test('Validating contact us form test 6', async ({ runner,homePage, registerPage,contactUsPage,page }) => {
            await  runner.navigateTo(homePageData.homePageUrl)
            await  runner.verifyContainsUrl(homePageData.homePageUrl)
            await  runner.verifyElementIsVisible(homePage.homePageLogo)

            await runner.clickOnElement(homePage.contactUsButton)
            await runner.verifyElementIsVisible(contactUsPage.getinTouchText)
            await runner.verifyContainText(contactUsPage.getinTouchText,'Get In Touch')


            await runner.fillInputBox(contactUsPage.nameText,'provat')
            await runner.fillInputBox(contactUsPage.emailText,'provat.raihan04@gmail.com')
            await runner.fillInputBox(contactUsPage.subjectText,'hudai')
            await runner.fillInputBox(contactUsPage.messageText,'chudi na tore')

            const FilePath = path.resolve(__dirname, "../testData/file.txt");
            await runner.uploadFile(contactUsPage.fileUploadField,FilePath)
            await runner.handleAlertAndAccept()
            await runner.clickOnElement(contactUsPage.submitButton)
            await runner.wait(10, {
                waitForLoadState: "load",
              });

            await runner.verifyElementIsVisible(contactUsPage.successMessageText)
            await runner.verifyContainText(contactUsPage.successMessageText,'Success! Your details have been submitted successfully.')

            await runner.clickOnElement(contactUsPage.homeButton)
            await  runner.verifyContainsUrl(homePageData.homePageUrl)
            await  runner.verifyElementIsVisible(homePage.homePageLogo)

// the test passes in the UI mode but not from the extention
        })
        
            
        })
        
    }
  }
  const testSuite = new ContactUs();
  testSuite.runTests();


