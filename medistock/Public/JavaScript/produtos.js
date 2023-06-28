function openNav() {
  document.getElementById("mySidenav").style.width = "250px";
}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}
function cadastra_produto() {
  const fs = require("fs");

  // STEP 1: Reading JSON file
  const produtos = require("./produto");

  // Defining new user
  let novo = {
    id: 30,
    produto: "teste02",
    quantidade: 3,
    validade: 2025,
    lote: "xxq"
  };

  // STEP 2: Adding new data to users object
  produtos.push(novo);

  // STEP 3: Writing to a file
  fs.writeFile("produto.json", JSON.stringify(produtos), err => {

    // Checking for errors
    if (err) throw err;

    console.log("Done writing"); // Success
  });
}
