var data = [];

function getDatafromApi() {
  fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((json) => {
      data = json;
      constructHTML();
    });
}

getDatafromApi();

function constructHTML() {
  let html = "";
  data = data.map((row, i) => {
    row.render = `<tr class="table-row" id="row-${i}">
    <td>${row.name}</td>
    <td>${row.username}</td>
    <td>${row.email}</td>
    <td>${row.address.city}</td>
    <td>${row.company.name}</td>
</tr>`;
    html += row.render;
    return row;
  });
  document.querySelector(".tbody").innerHTML = html;
}

function filter(el) {
  const value = el.value.toLowerCase();
  data.forEach((row, i) => {
    if (!value) document.querySelector(`#row-${i}`).style.display = "";
    else if (row.name.toLowerCase().includes(value)) {
      document.querySelector(`#row-${i}`).style.display = "";
    } else {
      document.querySelector(`#row-${i}`).style.display = "none";
    }
  });
}

function sort() {
  var filterTable, rows, sorted, i, x, y, sortFlag;
  filterTable = document.querySelector(".table");
  sorted = true;
  while (sorted) {
    sorted = false;
    rows = filterTable.rows;
    for (i = 1; i < rows.length - 1; i++) {
      sortFlag = false;
      x = rows[i].getElementsByTagName("td")[0];
      y = rows[i + 1].getElementsByTagName("td")[0];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        sortFlag = true;
        break;
      }
    }
    if (sortFlag) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      sorted = true;
    }
  }
}
function paginate() {}
