// Copyright Yusuf Sabbag. Distributed under the MIT License respectively CC-BY NC License.

// the footer language link
const lgLink = document.querySelector(".language"); // the link
const lgInfo = document.querySelector(".language-description"); // the link's info

lgLink.addEventListener("click", () => {
    if (lgInfo.classList.contains("lginfo-visibility")) {
        lgInfo.classList.remove("lginfo-visibility");
        setTimeout(function() {
            lgInfo.classList.add("lginfo-visibility");
        }, 1500)
    }
});