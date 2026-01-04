function getNumberFact() {
    fetch('https://catfact.ninja/fact')
        .then(response => response.text())
        .then(fact => {
            document.getElementById('factDisplay').textContent = fact;
        })
        .catch(error => {
            document.getElementById('factDisplay').textContent = "Error fetching fact.";
        });
}