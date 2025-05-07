import { Page } from "playwright";

export class CartPage {
  readonly firstProductInCart: string;
  readonly firstProductInCartPrice: string;
  readonly firstProductInCartQuantity: string;
  readonly firstProductInCartTotalPrice: string;
  readonly secondProductInCart: string;
  readonly secondProductInCartPrice: string;
  readonly secondProductInCartQuantity: string;
  readonly secondProductInCartTotalPrice: string;

  constructor(page: Page) {
    this.firstProductInCart = `css=tr[id="product-1"]`;
    this.firstProductInCartPrice = `css=tr[id='product-1'] td[class='cart_price']`;
    this.firstProductInCartQuantity = `css=tr[id='product-1'] td[class='cart_quantity']`;
    this.firstProductInCartTotalPrice = `css=tr[id='product-1'] td[class='cart_total']`;
    this.secondProductInCart = `css=tr[id="product-2"]`;
    this.secondProductInCartPrice = `css=tr[id='product-2'] td[class='cart_price']`;
    this.secondProductInCartQuantity = `css=tr[id='product-2'] td[class='cart_quantity']`;
    this.secondProductInCartTotalPrice = `css=tr[id='product-2'] td[class='cart_total']`;

  }
}