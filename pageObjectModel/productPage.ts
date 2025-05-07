import { Page } from "playwright";

export class ProductPage {
  readonly saleImage: string;
  readonly listofAllProducts: string;
  readonly firstProductViewButton: string;
  readonly firstProductDetails: string;
  readonly firstProductNameDetails: string;
  readonly firstProductCatagoryDetails: string;
  readonly firstProductPriceDetails: string;
  readonly firstProductAvailabilityDetails: string;
  readonly firstProductConditionDetails: string;
  readonly firstProductBrandDetails: string;
  readonly searchBarInputText: string;
  readonly searchBarButton: string;
  readonly searchedProductsText: string;
  readonly allSearchedProducts: string;
  readonly firstofAllProductsCard: string;
  readonly firstofAllProductsAddtoCartButton: string;
  readonly continueShoppingButton: string;
  readonly secondofAllProductsCard: string;
  readonly secondofAllProductsAddtoCartButton: string;
  readonly viewcartButtonInModal: string;


  constructor(page: Page) {
    this.saleImage = `css=img[id="sale_image"]`;
    this.listofAllProducts = `css=div[class="features_items"]`;
    this.firstProductViewButton = `css=a[href='/product_details/1']`;
    this.firstProductDetails = `css=div[class="product-information"]`;
    this.firstProductNameDetails = `css=div[class='product-information'] h2`;
    this.firstProductCatagoryDetails = `css=body > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > p:nth-child(3)`;
    this.firstProductPriceDetails = `css=div[class='product-information'] span span`;
    this.firstProductAvailabilityDetails = `css=body > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > p:nth-child(6)`;
    this.firstProductConditionDetails = `css=body > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > p:nth-child(7)`;
    this.firstProductBrandDetails = `css=body > section:nth-child(2) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(2) > div:nth-child(2) > div:nth-child(1) > p:nth-child(8)`;
    this.searchBarInputText = `css=input[id="search_product"]`;
    this.searchBarButton = `css=button[id="submit_search"]`;
    this.searchedProductsText = `css=h2[class="title text-center"]`;
    this.allSearchedProducts = `css=div[class="features_items"]`;
    this.firstofAllProductsCard = `css=body > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)`;
    this.firstofAllProductsAddtoCartButton = `css=body > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(4)`;
    this.continueShoppingButton = `css=button[class="btn btn-success close-modal btn-block"]`;
    this.secondofAllProductsCard = `css=body > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1)`;
    this.secondofAllProductsAddtoCartButton = `css=body > section:nth-child(3) > div:nth-child(1) > div:nth-child(1) > div:nth-child(2) > div:nth-child(1) > div:nth-child(4) > div:nth-child(1) > div:nth-child(1) > div:nth-child(1) > a:nth-child(4)`;
    this.viewcartButtonInModal = `css=a[href="/view_cart"] u`;

  }
}
