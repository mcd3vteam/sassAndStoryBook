export const SearchBar = () => (
  <div
    className="search-bar container"
    data-animate
    data-animate-duration=".5"
    data-animate-y="75"
    data-animate-delay=".25"
    data-animate-opacity="0"
  >
    <form id={"searchBarForm"}>
      <label htmlFor={"searchInput"} className="search-bar__eyebrow">
        What can we help you find?
      </label>
      <div
        className="input-dropdown-container"
        data-search-url="https://developer.mozilla.orgs"
        data-autocomplete
        data-vertical-key=""
      >
        <div className="input-container">
          <input placeholder="Search for Conditions, Treatments etc..." />
          <button
            type="button"
            className="search-bar__clear-btn"
            aria-label="Clear Search"
          >
            <span className="fal fa-times" />
          </button>
          <button
            type="submit"
            className="search-bar__search-btn"
            aria-label="Submit Search"
          >
            <span className="far fa-search" />
          </button>
        </div>
        <div
          id={"screenreader-instructions-searchbar"}
          className="sr__instructions"
        >
          When autocomplete results are available, use up and down arrows to
          review and enter to select.
        </div>
        <div className="sr__announcementText" aria-live="assertive">
          8 autocomplete options found.
        </div>
        <div className="dropdown-container">
          {/* <ul>
          <li>
            <a className="autocomplete-result">
              <span>Primary care doctors near me</span>
            </a>
          </li>
          <li>
            <a className="autocomplete-result">
              <span>Locations near me</span>
            </a>
          </li>
          <li>
            <a className="autocomplete-result">
              <span>How can I request medical records?</span>
            </a>
          </li>
        </ul> */}
        </div>
      </div>
    </form>
  </div>
);
