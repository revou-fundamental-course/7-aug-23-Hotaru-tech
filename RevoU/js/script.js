function checkResult(){
    const alasInput = document.getElementById("a");
    const tinggiInput = document.getElementById("t");

    const alas = alasInput.value;
    const tinggi = tinggiInput.value;

    if (alas === "" || tinggi === "") {
    alert("Masukkan nilai Alas dan Tinggi terlebih dahulu.");
    return; // Menghentikan eksekusi fungsi
    }

    const rumus = document.getElementById("rumus");
    rumus.innerHTML = "L = 1/2 x a x t";
    const rumusvalue = document.getElementById("rumusvalue");
    rumusvalue.innerHTML = "L = 1/2 x " + alas + " x " + tinggi;
    const hasil = document.getElementById("hasil");
    const hasilhitung = 0.5 * alas * tinggi;
    hasil.innerHTML = hasilhitung;
}

function resetResult() {
    const alasInput = document.getElementById("a");
    const tinggiInput = document.getElementById("t");
    const rumus = document.getElementById("rumus");
    const rumusvalue = document.getElementById("rumusvalue");
    const hasil = document.getElementById("hasil");

    alasInput.value = ""; // Mengosongkan nilai Alas input
    tinggiInput.value = ""; // Mengosongkan nilai Tinggi input
    rumus.innerHTML = ""; // Mengosongkan isi rumus
    rumusvalue.innerHTML = ""; // Mengosongkan nilai rumus
    hasil.innerHTML = ""; // Mengosongkan hasil hitung
}