function boxes() {
    const n = document.getElementById("number").value;
    const grid = document.getElementById("grid");
    grid.innerHTML = "";
    for (let i = 0; i < n; i++) {
        let img = document.createElement("img");
        img.src ="/images/giftboxes.png";
        img.alt = "Loading...";
        grid.appendChild(img);
    }
}