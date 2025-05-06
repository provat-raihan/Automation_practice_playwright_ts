import { Page } from "playwright";

export class HomePage {
  readonly homePageLogo: string;
  readonly signupButton: string;
  readonly contactUsButton: string;
  readonly testCasesButton: string;
  readonly testCasesText: string;
  readonly productsButton: string;
  readonly subscriptionText: string;
  readonly subscribeEmailInput: string;
  readonly subscribeEmailSubmitButton: string;
  readonly successAlertText: string;
  readonly cartButton: string;

  constructor(page: Page) {
    this.homePageLogo = `css=div[class="logo pull-left"] a`;
    this.signupButton = `css=a[href='/login']`;
    this.contactUsButton = `css=a[href='/contact_us']`;
    this.testCasesButton = `css=div[class='item active'] a[class='test_cases_list'] button[type='button']`;
    this.testCasesText = `css=h2[class='title text-center']`;
    this.productsButton = `css=a[href='/products']`;
    this.subscriptionText = `css=div[class='single-widget']`;
    this.subscribeEmailInput = `css=input[id="susbscribe_email"]`;
    this.subscribeEmailSubmitButton = `css=div[class='single-widget']`;
    this.successAlertText = `css=div[class="alert-success alert"]`;
    this.cartButton = `css=a[href="/view_cart"] i[class="fa fa-shopping-cart"]`;
  }
}
