import { test } from "../utilities/fixtures";
import homePageData from "../testData/homePageData.json";
import { ExpectedTextProvider } from "../utilities/valueProvider";
// import path from "path";


class CartPage extends ExpectedTextProvider {
    constructor() {
      super();
    }
  
    runTests() {
        test.describe('Validating cart Page Test', () => {

        test('Validating Verify Subscription in Cart page test 11', async ({ runner,homePage, registerPage,contactUsPage,page,cartPage }) => {
            await  runner.navigateTo(homePageData.homePageUrl)
            await  runner.verifyContainsUrl(homePageData.homePageUrl)
            await  runner.verifyElementIsVisible(homePage.homePageLogo)

            await runner.clickOnElement(homePage.cartButton)
            await runner.verifyContainsUrl(homePageData.viewCartPageUrl)

            await runner.scrollToFooter()
          await runner.verifyElementIsVisible(homePage.subscriptionText)
          await runner.verifyContainText(homePage.subscriptionText,'Subscription')

          await runner.fillInputBox(homePage.subscribeEmailInput,'provat.raihan04@gmail.com')
          await runner.handleAlertWithMessage('You have been successfully subscribed!')
          await runner.clickOnElement(homePage.subscribeEmailSubmitButton)


        })
        test('Validating Add Products in Cart test 12', async ({ runner,homePage, registerPage,contactUsPage,page,cartPage,productPage }) => {
            await  runner.navigateTo(homePageData.homePageUrl)
            await  runner.verifyContainsUrl(homePageData.homePageUrl)
            await  runner.verifyElementIsVisible(homePage.homePageLogo)

            await runner.clickOnElement(homePage.productsButton)
            await runner.verifyContainsUrl(homePageData.productsPageUrl)
            await runner.verifyElementIsVisible(productPage.saleImage)

            await runner.hoverAndClick(productPage.firstofAllProductsCard,productPage.firstofAllProductsAddtoCartButton)

            await runner.clickOnElement(productPage.continueShoppingButton)

            await runner.hoverAndClick(productPage.secondofAllProductsCard,productPage.secondofAllProductsAddtoCartButton)

            await runner.clickOnElement(productPage.viewcartButtonInModal)

            await runner.verifyElementIsVisible(cartPage.firstProductInCart)
            await runner.verifyElementIsVisible(cartPage.secondProductInCart)


            await runner.verifyElementIsVisible(cartPage.firstProductInCartPrice)
            await runner.verifyElementIsVisible(cartPage.firstProductInCartQuantity)
            await runner.verifyElementIsVisible(cartPage.firstProductInCartTotalPrice)

            await runner.verifyElementIsVisible(cartPage.secondProductInCartPrice)
            await runner.verifyElementIsVisible(cartPage.secondProductInCartQuantity)
            await runner.verifyElementIsVisible(cartPage.secondProductInCartTotalPrice)

        })
            

        })
        
    }
  }
  const testSuite = new CartPage();
  testSuite.runTests();
//   ver