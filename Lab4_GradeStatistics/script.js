var rowCount = 0;
var submitBtn = document.getElementById("submitBtn");
var tbody = document.querySelector("#gradeTable tbody");

submitBtn.addEventListener("click", function () {
    var mathInput = document.getElementById("mathInput");
    var englishInput = document.getElementById("englishInput");
    
    var mathScore = parseFloat(mathInput.value);
    var englishScore = parseFloat(englishInput.value);

    if (isNaN(mathScore) || isNaN(englishScore)) {
        alert("Please enter valid numbers for both subjects.");
        return;
    }

    rowCount++;
    var rowAvg = (mathScore + englishScore) / 2;

    var newRow = document.createElement("tr");
    newRow.innerHTML = `
        <td>${rowCount}</td>
        <td>${mathScore}</td>
        <td>${englishScore}</td>
        <td>${rowAvg.toFixed(2)}</td> 
    `;
    
    tbody.appendChild(newRow);

    mathInput.value = "";
    englishInput.value = "";

    updateColumnAverages();
});

function updateColumnAverages() {
    var rows = tbody.querySelectorAll("tr");
    var totalMath = 0;
    var totalEnglish = 0;
    var totalRowAvg = 0;
    var count = rows.length;

    if (count === 0) return;

    rows.forEach(function(row) {
        totalMath += parseFloat(row.cells[1].innerText);
        totalEnglish += parseFloat(row.cells[2].innerText);
        totalRowAvg += parseFloat(row.cells[3].innerText);
    });

    document.getElementById("avgMath").innerText = (totalMath / count).toFixed(2);
    document.getElementById("avgEnglish").innerText = (totalEnglish / count).toFixed(2);
    document.getElementById("avgTotal").innerText = (totalRowAvg / count).toFixed(2);
}
