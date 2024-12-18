import { provideCore } from "@yext/answers-core";
import { observe } from "selector-observer";

const core = provideCore({
  apiKey: "bce1894db0359d566d0f82971cfbfede",
  experienceKey: "uc-san-diego-main-site-answers",
  // experienceKey: "uc-san-diego-taxonomy-answers",
  locale: "en",
  experienceVersion: "PRODUCTION",
});

function debounce(func, timeout = 300) {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      func.apply(this, args);
    }, timeout);
  };
}

const initSearchbar = () => {
  observe(".input-container", {
    add(element) {
      const inputDropdownContainer = element.parentElement;
      const input = element.querySelector("input");
      const clearBtn = element.querySelector(".search-bar__clear-btn");
      const dropdownContainer = inputDropdownContainer.querySelector(
        ".dropdown-container"
      );
      const searchBarForm = element.closest("form");

      const { dataset } = inputDropdownContainer;
      const { searchUrl, verticalKey, autocomplete } = dataset;

      const render = ({ results }) => {
        if (results.length) {
          let html = "";
          const items = results
            .map(({ value }, index) => {
              if (index > 2) return; // limit results 3 or less
              const searchpageUrl = new URL(searchUrl);
              searchpageUrl.searchParams.append("vertical", verticalKey);
              searchpageUrl.searchParams.append("query", value);
              return `<li><a class="autocomplete-result" href=${searchpageUrl.href}><span>${value}</span></a></li>`;
            })
            .join("");
          html = `<ul>${items}</ul>`;
          dropdownContainer.innerHTML = html;
        }
      };

      const getAutocompleteData = () => {
        if (autocomplete) {
          if (verticalKey) {
            core
              .verticalAutocomplete({
                verticalKey,
                input: input.value,
              })
              .then((data) => render(data, verticalKey))
              .catch(() =>
                console.log(
                  "Unable to provide autocomplete options for searchbar"
                )
              );
          } else {
            core
              .universalAutocomplete({
                input: input.value,
              })
              .then((data) => render(data))
              .catch(() =>
                console.log(
                  "Unable to provide autocomplete options for searchbar"
                )
              );
          }
        }
      };

      const focusInputDropdown = () => {
        if (inputDropdownContainer.classList.contains("active")) {
          return;
        }

        inputDropdownContainer.classList.add("active");
        input.focus();
        getAutocompleteData(input.value);
      };

      const blurInputDropdown = (event) => {
        if (
          inputDropdownContainer.contains(event.target) ||
          !inputDropdownContainer.classList.contains("active")
        ) {
          return;
        }

        inputDropdownContainer.classList.remove("active");
        while (dropdownContainer.firstChild) {
          dropdownContainer.removeChild(dropdownContainer.firstChild);
        }
      };

      const clearInput = () => {
        input.value = "";

        while (dropdownContainer.firstChild) {
          dropdownContainer.removeChild(dropdownContainer.firstChild);
        }
      };

      const search = (event) => {
        event.preventDefault();
        const url = new URL(searchUrl);
        url.searchParams.append("query", input.value);
        url.searchParams.append("vertical", verticalKey);
        window.location = url.href;
        return false;
      };

      element.addEventListener("click", focusInputDropdown);
      document.addEventListener("click", blurInputDropdown);
      clearBtn.addEventListener("click", clearInput);
      searchBarForm.onsubmit = search;
      input.addEventListener(
        "keyup",
        debounce(() => getAutocompleteData())
      );
    },
  });
};

initSearchbar();
