import { test } from "../utilities/fixtures";
import homePageData from "../testData/homePageData.json";
import { ExpectedTextProvider } from "../utilities/valueProvider";
// import path from "path";


class ProductPage extends ExpectedTextProvider {
    constructor() {
      super();
    }
  
    runTests() {
        test.describe('Validating Product page Test', () => {

        test('Validating Verify All Products and product detail page test 8', async ({ runner,homePage, registerPage,contactUsPage,page,productPage}) => {
            await  runner.navigateTo(homePageData.homePageUrl)
            await  runner.verifyContainsUrl(homePageData.homePageUrl)
            await  runner.verifyElementIsVisible(homePage.homePageLogo)

            await runner.clickOnElement(homePage.productsButton)
            await runner.verifyContainsUrl(homePageData.productsPageUrl)
            await runner.verifyElementIsVisible(productPage.saleImage)
            await runner.verifyElementIsVisible(productPage.listofAllProducts)
            

            await runner.clickOnElement(productPage.firstProductViewButton)
            await runner.verifyContainsUrl(homePageData.product1stDetailsPageUrl)


            await runner.verifyElementIsVisible(productPage.firstProductDetails)
            await runner.verifyElementIsVisible(productPage.firstProductNameDetails)
            await runner.verifyElementIsVisible(productPage.firstProductCatagoryDetails)
            await runner.verifyElementIsVisible(productPage.firstProductPriceDetails)
            await runner.verifyElementIsVisible(productPage.firstProductAvailabilityDetails)
            await runner.verifyElementIsVisible(productPage.firstProductConditionDetails)
            await runner.verifyElementIsVisible(productPage.firstProductBrandDetails)
        })
        
        test('Validating Search Product test 9', async ({ runner,homePage, registerPage,contactUsPage,page,productPage }) => {
            await  runner.navigateTo(homePageData.homePageUrl)
            await  runner.verifyContainsUrl(homePageData.homePageUrl)
            await  runner.verifyElementIsVisible(homePage.homePageLogo)

            await runner.clickOnElement(homePage.productsButton)
            await runner.verifyContainsUrl(homePageData.productsPageUrl)
            await runner.verifyElementIsVisible(productPage.saleImage)
            await runner.verifyElementIsVisible(productPage.listofAllProducts)
            
            await runner.fillInputBox(productPage.searchBarInputText,'blue')
            await runner.clickOnElement(productPage.searchBarButton)


            await runner.verifyElementIsVisible(productPage.searchedProductsText)
            await runner.verifyContainText(productPage.searchedProductsText,'Searched Products')

            await runner.verifyElementIsVisible(productPage.allSearchedProducts)

        })
        
            
        })
        
    }
  }
  const testSuite = new ProductPage();
  testSuite.runTests();