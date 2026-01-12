function calculateEMI() {
    let P = document.getElementById("loanAmount").value;
    let R = document.getElementById("interestRate").value;
    let N = document.getElementById("loanTenure").value;

    if (P === "" || R === "" || N === "") {
        alert("Please fill all fields");
        return;
    }

    P = parseFloat(P);
    R = parseFloat(R);
    N = parseInt(N);

    let monthlyRate = R / 12 / 100;

    let emi = (P * monthlyRate * Math.pow(1 + monthlyRate, N)) /
              (Math.pow(1 + monthlyRate, N) - 1);

    let totalPayment = emi * N;
    let totalInterest = totalPayment - P;

    document.getElementById("emi").innerText = "₹" + emi.toFixed(2);
    document.getElementById("totalInterest").innerText = "₹" + totalInterest.toFixed(2);
    document.getElementById("totalPayment").innerText = "₹" + totalPayment.toFixed(2);
}
