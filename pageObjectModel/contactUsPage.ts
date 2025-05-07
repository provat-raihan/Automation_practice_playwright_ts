import { Page } from "playwright";

export class ContactUsPage {
  readonly getinTouchText: string;
  readonly nameText: string;
  readonly emailText: string;
  readonly subjectText: string;
  readonly messageText: string;
  readonly fileUploadField: string;
  readonly submitButton: string;
  readonly successMessageText: string;
  readonly homeButton: string;

  constructor(page: Page) {
    this.getinTouchText = `css=div[class='contact-form'] h2[class='title text-center']`;
    this.nameText = `css=input[placeholder='Name']`;
    this.emailText = `css=input[placeholder='Email']`;
    this.subjectText = `css=input[placeholder='Subject']`;
    this.messageText = `css=textarea[id="message"]`;
    this.fileUploadField = `css=input[name='upload_file']`;
    this.submitButton = `css=input[value='Submit']`;
    this.successMessageText = `css=div[class="status alert alert-success"]`;
    this.homeButton = `css=a[class="btn btn-success"]`;
  }
}