import { Page } from "playwright";

export class RegisterPage {
  readonly signupHeadertext: string;
  readonly nameInputText: string;
  readonly emailInputText: string;
  readonly signupButton: string;


  readonly accountInfoHeaderText: string;
  readonly userTitleRadioButton: string;
  readonly userNameInputField: string;
  readonly userEmailInputfield: string;
  readonly userPasswordInputField: string;

  readonly dobDayButton: string;
  readonly dobMonthButton: string;
  readonly dobYearButton: string;

  readonly signupCheckbox: string;
  readonly receiveOfferCheckbox: string;

  readonly firstNameTextBox: string;
  readonly lastNameTextBox: string;
  readonly companyTextBox: string;
  readonly addressTextBox: string;
  readonly address2TextBox: string;
  readonly countrySelectBox: string;
  readonly stateTextBox: string;
  readonly cityTextBox: string;
  readonly zipCodeTextBox: string;
  readonly mobileNumTextBox: string;

  readonly createAccountButton: string;

  readonly accCreatedMessage: string;

  readonly continueButton: string;

  readonly loggedInShow: string;

  readonly deleteAccButton: string;

  readonly deleteAccMessage: string;
  readonly deleteAccContinueButton: string;




  constructor(page: Page) {
    this.signupHeadertext = `css=div[class='signup-form'] h2`;
    this.nameInputText = `css=input[placeholder='Name']`;
    this.emailInputText = `css=input[data-qa='signup-email']`;
    this.signupButton = `css=button[data-qa='signup-button']`;


    this.accountInfoHeaderText = `css=div[class="login-form"] h2:nth-child(1)`;
    this.userTitleRadioButton = `css=input[id="id_gender1"]`;
    this.userNameInputField = `css=input[id='name']`;
    this.userEmailInputfield = `css=input[id="email"]`;
    this.userPasswordInputField = `css=input[id="password"]`;
    this.dobDayButton = `css=select[id="days"]`;
    this.dobMonthButton = `css=select[id="months"]`;
    this.dobYearButton = `css=select[id="years"]`;

    this.signupCheckbox = `css=input[id="newsletter"]`;
    this.receiveOfferCheckbox = `css=input[id="optin"]`;

    this.firstNameTextBox = `css=input[id="first_name"]`;
    this.lastNameTextBox = `css=input[id="last_name"]`;
    this.companyTextBox = `css=input[id="company"]`;
    this.addressTextBox = `css=input[id="address1"]`;
    this.address2TextBox = `css=input[id="address2"]`;
    this.countrySelectBox = `css=select[id="country"]`;
    this.stateTextBox = `css=input[id="state"]`;
    this.cityTextBox = `css=input[id="city"]`;
    this.zipCodeTextBox = `css=input[id="zipcode"]`;
    this.mobileNumTextBox = `css=input[id="mobile_number"]`;

    this.createAccountButton = `css=button[data-qa='create-account']`;

    this.accCreatedMessage = `css=h2[class='title text-center'] b`;

    this.continueButton = `css=a[class="btn btn-primary"]`;

    this.loggedInShow = `css=li:nth-child(10) a:nth-child(1)`;

    this.deleteAccButton = `css=a[href='/delete_account']`;

    this.deleteAccMessage = `css=h2[class='title text-center'] b`;
    this.deleteAccContinueButton = `css=a[class="btn btn-primary"]`;

  }
}
