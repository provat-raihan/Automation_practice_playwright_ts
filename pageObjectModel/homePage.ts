import { Page } from "playwright";

export class HomePage {
  readonly homePageLogo: string;
  readonly signupButton: string;

  constructor(page: Page) {
    this.homePageLogo = `css=div[class="logo pull-left"] a`;
    this.signupButton = `css=a[href='/login']`;
  }
}
