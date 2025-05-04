import { test as base, Page } from "@playwright/test";
import { HomePage } from "../pageObjectModel/homePage";
import { Utils } from "./utils";
import { RegisterPage } from "../pageObjectModel/registerPage";
// import { AccountPage } from "../pom/accountPage";

const test = base.extend<{
  runner: Utils;
  homePage: HomePage;
  registerPage: RegisterPage;
  // accountPage: AccountPage;
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

  // accountPage: async ({ page }: { page: Page }, use) => {
  //   const accountPageInstance = new AccountPage(page);
  //   await use(accountPageInstance);
  // },
});

export { test };
