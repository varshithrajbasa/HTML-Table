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
  data = data.map((row,i) => {
    row.render = `<tr class="table-row" id="row-${i}">
    <td>${row.name}</td>
    <td>${row.username}</td>
    <td>${row.email}</td>
    <td>${row.address.city}</td>
    <td>${row.company.name}</td>
</tr>`
    html += row.render;
    return row;
  });
  document.querySelector(".tbody").innerHTML = html;
}


function filter(el){
    const value = el.value.toLowerCase();
    data.forEach((row,i)=>{
        if(!value)
        document.querySelector(`#row-${i}`).style.display = '';
        else if(row.name.toLowerCase().includes(value)){
            document.querySelector(`#row-${i}`).style.display = '';
        }
        else{
            document.querySelector(`#row-${i}`).style.display = 'none';
        }
    })

}

function sort()
function paginate();