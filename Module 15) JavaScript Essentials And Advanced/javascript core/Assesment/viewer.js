class SubmissionViewer {

constructor() {

this.tableBody = document.getElementById("tableBody");

this.search = document.getElementById("search");

this.data = JSON.parse(localStorage.getItem("guests")) || [];

this.renderTable(this.data);

this.search.addEventListener("input", () => this.filterData());

}

renderTable(data) {

this.tableBody.innerHTML = "";

if (data.length === 0) {

document.getElementById("noData").innerText = "No Data Found";

return;

}

document.getElementById("noData").innerText = "";

data.forEach(g => {

this.tableBody.innerHTML +=
`<tr>
<td>${g.name}</td>
<td>${g.phone}</td>
<td>${g.email}</td>
<td>${g.checkin}</td>
<td>${g.checkout}</td>
<td>${g.adults}</td>
</tr>`;

});

}

filterData() {

let term = this.search.value.toLowerCase();

let filtered = this.data.filter(g =>
g.name.toLowerCase().includes(term) ||
g.checkin.includes(term)
);

this.renderTable(filtered);

}

}

new SubmissionViewer();