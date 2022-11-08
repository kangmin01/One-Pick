import * as Api from "../api.js";
import {
  getUrlParams,
  addCommas,
  checkUrlParams,
  createNavbar,
} from "../../useful-functions.js";

const title = document.querySelector("title");
const addCartBtn = document.querySelector(".add-cart-btn");
const buyNowBtn = document.querySelector(".buy-now-btn");

const bookCategory = document.querySelector(".book-category");
const bookTitle = document.querySelector(".book-title");
const bookAuthor = document.querySelector(".book-author");
const bookPublisher = document.querySelector(".book-publisher");
const bookPublicationDate = document.querySelector(".book-publicationDate");
const bookPage = document.querySelector(".book-page");
const bookPrice = document.querySelector(".book-price");
const bookSummary = document.querySelector(".book-summary");

checkUrlParams("id");
addAllElements();
addAllEvents();
showAllElements();

function showAllElements() {
  //헤더 추가
  productData();
}

async function productData() {
  const { id } = getUrlParams();

  const product = await Api.get(`/api/products/${id}`);

  console.log(id);

  const {
    title,
    price,
    category,
    author,
    publisher,
    publicationDate,
    pageNumber,
    summary,
  } = product;

  bookCategory.innerText = category;
  bookTitle.innerText = title;
  bookAuthor.innerText = author;
  bookPublisher.innerText = publisher;
  bookPublicationDate.innerText = publicationDate;
  bookPage.innerText = pageNumber;
  bookSummary.innerText = summary;
  bookPrice.innerText = `${addCommas(price)}원`;

  window.titleChange("load", async () => {
    title.innerText = title;
  });
  addCartBtn.addEventListener("click", async () => {});
  buyNowBtn.addEventListener("click", async () => {});
}
