// Mendapatkan elemen untuk menampilkan operasi dan hasil
const operationDisplay = document.getElementById("operation");
const resultDisplay = document.getElementById("result");

let operation = "";
let result = "";

// Menambahkan event listener untuk setiap tombol
document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    const action = button.getAttribute("data-action");
    const value = button.textContent;

    // Jika tombol "clear" ditekan, reset operasi dan hasil
    if (action === "clear") {
      operation = "";
      result = "";
    } 
    // Jika tombol "delete" ditekan, hapus karakter terakhir dari operasi
    else if (action === "delete") {
      operation = operation.slice(0, -1);
    } 
    // Jika tombol "=" ditekan, evaluasi operasi dan tampilkan hasil
    else if (action === "equals") {
      try {
        // Mengganti simbol ÷ dengan / dan × dengan * untuk evaluasi
        result = eval(operation.replace(/÷/g, "/").replace(/×/g, "*"));
      } catch {
        result = "Error";
      }
    } 
    // Jika tombol operator ditekan, tambahkan operator ke operasi
    else if (action) {
      if (action === "add") operation += "+";
      if (action === "subtract") operation += "-";
      if (action === "multiply") operation += "×";
      if (action === "divide") operation += "÷";
    } 
    // Jika tombol angka ditekan, tambahkan angka ke operasi
    else {
      operation += value;
    }

    // Perbarui tampilan operasi dan hasil
    operationDisplay.textContent = operation;
    resultDisplay.textContent = result || "";
  });
});
