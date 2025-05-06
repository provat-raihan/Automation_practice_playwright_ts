import { test as base, Page } from "@playwright/test";
import { HomePage } from "../pageObjectModel/homePage";
import { Utils } from "./utils";
import { RegisterPage } from "../pageObjectModel/registerPage";
import { ContactUsPage } from "../pageObjectModel/contactUsPage";
import { ProductPage } from "../pageObjectModel/productPage";
import { CartPage } from "../pageObjectModel/cartPage";

const test = base.extend<{
  runner: Utils;
  homePage: HomePage;
  registerPage: RegisterPage;
  contactUsPage: ContactUsPage;
  productPage: ProductPage;
  cartPage : CartPage;
  
}>({
  runner: async ({ page }: { page: Page }, use) => {
    const utilsInstance = new Utils(page);
    await use(utilsInstance);
  },
  homePage: async ({ page }: { page: Page }, use) => {
    const homePageInstance = new HomePage(page);
    await use(homePageInstance);
  },
  registerPage: async ({ page }: { page: Page }, use) => {
    const registerPageInstance = new RegisterPage(page);
    await use(registerPageInstance);
  },

  contactUsPage: async ({ page }: { page: Page }, use) => {
    const contactUsPageInstance = new ContactUsPage(page);
    await use(contactUsPageInstance);
  },
  productPage: async ({ page }: { page: Page }, use) => {
    const productPageInstance = new ProductPage(page);
    await use(productPageInstance);
  },
  cartPage: async ({ page }: { page: Page }, use) => {
    const cartPageInstance = new CartPage(page);
    await use(cartPageInstance);
  },
});

export { test };
