function getContentByName(name) {
    document.getElementById('content').innerHTML = "Loading..."
    fetch(name)
        .then(response => response.text())
        .then(data => {
            document.getElementById('content').innerHTML = data;
        })
        .catch(err => console.error(err));
}