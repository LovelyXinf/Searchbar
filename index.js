// This is just a simple example to get you started. You may need to modify it according to your specific needs.

const searchInput = document.getElementById("searchInput");
const searchResults = document.getElementById("searchResults");
const fs = require("fs");

fs.readFile("test.tab", "utf8", (error, data) => {
  if (error) {
    console.error(error);
    return;
  }

  // Process the data here
  const lines = data.split("\n");
  for (const line of lines) {
    const fields = line.trim().split("\t");
    // Process the fields here
    console.log(fields);
  }
});
function search() {
  const searchTerm = searchInput.value;

  // Clear previous search results
  searchResults.innerHTML = "";

  // Loop through the data to find matching results
  for (let i = 0; i < data.length; i++) {
    const pageData = data[i].pageData;
    const pageTitle = data[i].pageTitle;
    const pageLink = data[i].pageLink;

    if (pageData.toLowerCase().includes(searchTerm.toLowerCase())) {
      // Create a new result entry
      const resultEntry = document.createElement("div");

      // Highlight the search term in the page data
      const highlightedData = pageData.replace(
        new RegExp(searchTerm, "gi"),
        (match) => `<span class="highlightColor">${match}</span>`
      );

      // Check if it's an exact match or partial match
      if (searchTerm.toLowerCase() === pageTitle.toLowerCase()) {
        resultEntry.innerHTML = `
          <h2 class="exactMatch">${pageTitle}</h2>
          <p>${highlightedData}</p>
          <a href="${pageLink}" target="_blank">${pageLink}</a>
        `;
      } else {
        resultEntry.innerHTML = `
          <h2 class="partialMatch">${pageTitle}</h2>
          <p>${highlightedData}</p>
          <a href="${pageLink}" target="_blank">${pageLink}</a>
        `;
      }

      // Append the result entry to the search results container
      searchResults.appendChild(resultEntry);
    }
  }
}

// Sample data (replace this with your actual data)
// const data = [
//   {
//     pageTitle: "Membership",
//     pageData:
//       "The Riverside chapter of the Japanese American Citizens League was founded in 1968, and Gen was its first President. The JACL addresses political and cultural issues, and it continues to serve an essential social function in bringing local Japanese Americans together.",
//     pageLink: "https://morenovalleymasterchorale.org/pages/index.html",
//   },
//   {
//     pageTitle: "Riverside JACL",
//     pageData: "Some page data containing the word Riverside JACL",
//     pageLink: "https://example.com/riverside-jacl",
//   },
// ];

// const data = console.log("*******", data);
