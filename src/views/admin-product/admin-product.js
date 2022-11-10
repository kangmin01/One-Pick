import * as Api from "../api.js";
import $ from "../utils/dom.js";

const titleInput = $("#titleInput");
const categorySelectBox = $("#categorySelectBox");
const authorInput = $("#authorInput");
const summaryInput = $("#summaryInput");
const publisherInput = $("#publisherInput");
const publicationDateInput = $("#publicationDateInput");

<<<<<<< HEAD
const imageFileInput = $("#imageFileInput");
=======
const imageInput = $("#imageInput");
>>>>>>> feature
const pageNumberInput = $("#pageNumberInput");
const priceInput = $("#priceInput");

const submitButton = $("#submitButton");
const registerProductForm = $("#registerProductForm");

addAllElements();
addAllEvents();

// html에 요소를 추가하는 함수들
function addAllElements() {
  addOptionsToSelectBox();
}

// addEventListener들을 묶어주어서 코드를 깔끔하게 하는 역할임.
function addAllEvents() {
  submitButton.addEventListener("click", handleSubmit);
}

// 제품 정보를 db에 저장
async function handleSubmit(e) {
  e.preventDefault();

  const title = titleInput.value;
  const categoryId = categorySelectBox.value;
  const author = authorInput.value;
  const summary = summaryInput.value;
  const publisher = publisherInput.value;
  const publicationDate = publicationDateInput.value;
  const pageNumber = parseInt(pageNumberInput.value);
  const price = parseInt(priceInput.value);
<<<<<<< HEAD
  const imageFile = imageFileInput.files?.[0] ?? undefined;
=======
>>>>>>> feature

  // 입력 칸이 비어 있으면 진행 불가
  if (
    !title ||
    !categoryId ||
    !author ||
    !summary ||
    !publisher ||
    !publicationDate ||
    !pageNumber ||
<<<<<<< HEAD
    !price ||
    !imageFile
=======
    !price
>>>>>>> feature
  ) {
    return alert("빈 칸 및 0이 없어야 합니다.");
  }

<<<<<<< HEAD
  const formData = new FormData();

  formData.append("title", title);
  formData.append("categoryId", categoryId);
  formData.append("author", author);
  formData.append("summary", summary);
  formData.append("publisher", publisher);
  formData.append("publicationDate", publicationDate);
  formData.append("pageNumber", pageNumber);
  formData.append("price", price);
  formData.append("imgUrl", imageFile);

  try {
    await Api.postFormData("/api/products", formData);
=======
  try {
    const data = {
      title,
      categoryId,
      author,
      summary,
      publisher,
      publicationDate,
      pageNumber,
      price,
    };

    await Api.post("/api/products", data);
>>>>>>> feature

    alert(`정상적으로 ${title} 제품이 등록되었습니다.`);

    // 폼 초기화
    registerProductForm.reset();
  } catch (err) {
    console.log(err.stack);

    alert(`문제가 발생하였습니다. 확인 후 다시 시도해 주세요: ${err.message}`);
  }
}

// 카테고리 옵션 삽입
async function addOptionsToSelectBox() {
  const categorys = await Api.get("/api/category");
<<<<<<< HEAD
  categorys.forEach((item) => {
    // 객체 destructuring
    const { _id, category } = item;
=======
  categorys.forEach((category) => {
    // 객체 destructuring
    const { _id, title } = category;
>>>>>>> feature

    categorySelectBox.insertAdjacentHTML(
      "beforeend",
      `
<<<<<<< HEAD
      <option value=${_id}>${category}</option>`
=======
      <option value=${_id}>${title}</option>`
>>>>>>> feature
    );
  });
}
