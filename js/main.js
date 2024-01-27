function toolTipReset() {
    var tooltips = document.querySelectorAll('.tooltiptext');
    tooltips.forEach(function(tooltip) {
        tooltip.style.visibility = 'hidden';
        tooltip.style.opacity = '0';
    });
}
function information(event) {
    event.preventDefault(); // Prevents default form submission behavior
    var movieTitle = document.getElementById("movie").value; // Gets movie / series title from input field
    searchInTheWeb(movieTitle); // searches in the web
}
async function searchInTheWeb(movieTitle) {
    var apiKey = "YOUR GOOGLE API KEY"; // REPLACE WITH YOUR API KEY.
    var cx = "YOUR CX"; // REPLACE WITH YOUR API KEY.
    var url = `https://www.googleapis.com/customsearch/v1?q=${encodeURIComponent(movieTitle)}&key=${apiKey}&cx=${cx}`;
    try {
        /*Fetching the Response from Google search.*/
        var response = await fetch(url);
        var data = await response.json(); // output .json.
        if (data.items && data.items.length > 0) {
            /*Extracts information from the first search result.*/
            var firstResult = data.items[0];
            var movieInfo = `
                <h2>${firstResult.title}</h2>
                <p><strong>Link:</strong> <a href="${firstResult.link}" target="_blank">${firstResult.link}</a></p>
                <p><strong>Description:</strong> ${firstResult.snippet}</p>
            `;
            /*Displays the Information.*/
            document.getElementById("movieInfo").innerHTML = movieInfo;
        } else {
            /*Display error message if no search results were found. */
            document.getElementById("movieInfo").innerHTML = "No search results found.";
        }
    } catch (error) {
        /* Display error message if there was a problem fetching search results. */
        console.error("Error fetching search results:", error);
        document.getElementById("movieInfo").innerHTML = "An error occurred while fetching search results.";
    }
}
function resetForm() {
    clearTextField(); // Clears text field
    clearMovieInfo(); // Clears movie information
}
function clearTextField() {
    document.getElementById("movie").value = ""; // Clears text field
}

function clearMovieInfo() {
    document.getElementById("movieInfo").innerHTML = ""; // Clears movie information
}