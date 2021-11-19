// Copyright Yusuf Sabbag. Distributed under the MIT License respectively CC-BY NC License.

const loadBooks = async () => {
	const categoriesForBooksPage = [97, 52, 3, 1, 67];
	const gallerySection = document.querySelector("section.gallery");
	for (let i = 0; i < categoriesForBooksPage.length; i++) {
		const books = await (await fetch(`http://localhost:5000/books?category=${categoriesForBooksPage[i]}`)).json();
		// each category has a wrapper
		const categoryContainer = document.createElement("div");
		categoryContainer.classList.add("category-container");

		const booksWrapper = document.createElement("div");
		booksWrapper.classList.add("books-wrapper");

		gallerySection.append(categoryContainer);

		const categoryHeader = document.createElement("h2");
		categoryHeader.classList.add("category-header");
		// the category name
		categoryHeader.textContent = books.data[0].subject;
		categoryContainer.append(categoryHeader);
		books.data.forEach((book) => {
			const bookCardDiv = document.createElement("div");
			bookCardDiv.classList.add("book-card");

			//
			const bookUpper = document.createElement("div");
			bookUpper.classList.add("book-upper");

			const bookLower = document.createElement("div");
			bookLower.classList.add("book-lower", "book-info");

			//
			const bookImg = document.createElement("img");
			bookImg.src = book.links.img;

			const bookTitle = document.createElement("p");
			bookTitle.textContent = book.name;

			bookUpper.append(bookImg);
			bookUpper.append(bookTitle);

			//
			const bookBio = document.createElement("div");
			bookBio.classList.add("book-bio");

			const bookSubject = document.createElement("p");
			bookSubject.textContent = book.subject;

			const bookPublishingYear = document.createElement("p");
			bookPublishingYear.textContent = book.publishing_year;

			bookBio.append(bookSubject);
			bookBio.append(bookPublishingYear);

			const bookLinks = document.createElement("div");
			bookLinks.classList.add("book-links");

			const wikiLink = document.createElement("a");
			if (book.links.wiki_link === "") {
				wikiLink.classList.add("missing-wiki-source");
			} else {
				wikiLink.href = book.links.wiki_link;
			}
			wikiLink.textContent = "ويكيبيديا";

			bookLinks.append(wikiLink);

			bookLower.append(bookBio);
			bookLower.append(bookLinks);

			bookCardDiv.append(bookUpper);
			bookCardDiv.append(bookLower);
			booksWrapper.append(bookCardDiv);
		});
		categoryContainer.append(booksWrapper);
	}
};
// TODO loading animation
loadBooks();
// the popovers for the missing links of the books
const wikiLinks = document.querySelectorAll(".missing-wiki-source");

wikiLinks.forEach((link) => {
	link.addEventListener("click", () => {
		const missigBookInfo = document.querySelector(`#${link.id}Info`);
		missigBookInfo.classList.remove("wiki-visibility");
		if (missigBookInfo.classList.contains("wiki-notice-hide")) {
			missigBookInfo.classList.remove("wiki-notice-hide");
			// then again, hide it after a short delay
			setTimeout(() => {
				missigBookInfo.classList.add("wiki-notice-hide");
			}, 3500);
			setTimeout(() => {
				missigBookInfo.classList.add("wiki-visibility");
			}, 4600);
		}
	});
});

// highlight function
// TODO change base url

window.addEventListener("load", () => {
	// const baseUrl = "https://www.mustafamahmoud.net/books.html";
	const baseUrl = "file:///D:/G%20Drive/All%20Info/web%20development/WD/Mustafa-Mahmoud/books.html";
	const hash = window.location.hash;
	if (hash) {
		const el = document.querySelector(hash);
		const elMatchingUrl = `${baseUrl}${hash}`;

		if (window.location.href === elMatchingUrl) {
			el.classList.add("highlight");
			setTimeout(() => {
				el.classList.remove("highlight");
			}, 2500);
		}
	}
});
// the navbar
const menuButton = document.querySelector(".current-page");
const navBar = document.querySelector(".sub-nav-items");
menuButton.addEventListener("click", () => {
	if (navBar.style.height === "0px") {
		navBar.style.height = "220px";
	} else {
		navBar.style.height = "0px";
	}
});

// the footer links
const lgLink = document.querySelector(".language"); // the language link
const lgInfo = document.querySelector(".language-description"); // the link's info

lgLink.addEventListener("click", () => {
	if (lgInfo.classList.contains("lginfo-visibility")) {
		lgInfo.classList.remove("lginfo-visibility");
		setTimeout(function () {
			lgInfo.classList.add("lginfo-visibility");
		}, 1500);
	}
});
