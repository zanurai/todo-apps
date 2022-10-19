showtask()
let taskinput = document.getElementById("taskinput");
let addtask = document.getElementById("addtask");
let deletetask = document.getElementById("deletetask");

addtask.addEventListener("click", () => {
    taskinputval = taskinput.value
    if (taskinputval.trim() != 0) {
        let webtask = localStorage.getItem("localtask");
        if (webtask == null) {
            taskObj = [];
        } else {
            taskObj = JSON.parse(webtask);
        }
        taskObj.push(taskinputval);
        localStorage.setItem("localtask", JSON.stringify(taskObj));
    }
    showtask();
})

function showtask() {
    let webtask = localStorage.getItem("localtask");
    if (webtask == null) {
        taskObj = [];
    } else {
        taskObj = JSON.parse(webtask);
    }

    let html = " ";
    let table3 = document.getElementById("table3");
    taskObj.forEach((item, index) => {
        html += `  <tr>
       <th scope="row"><br>${index + 1} </th>
       <td>${item}</td>
       <td><button type="button" class="text-primary">
               <i class="fa fa-edit"onclick= "edittask(${index})">Edit</i></button></td>
       <td><button type="button" class="text-danger">
               <i class="fa fa-trash"onclick= "deleteitem(${index})">Delete</i></button></td>
   </tr>`
    });
    table3.innerHTML = html;
}

//edittask
function edittask(index) {
    let savetask = document.getElementById("savetask")
    let addtask = document.getElementById("addtask");
    let saveindex = document.getElementById("saveindex")

    savetask.value = index;
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    taskinput.value = taskObj[index];

    addtask.style.display = "none"
    saveindex.style.display = "block"
}

//saveindex

let saveindex = document.getElementById("saveindex");
saveindex.addEventListener("click", () => {
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    let addtask = document.getElementById("addtask");
    let savetask = document.getElementById("savetask").value;
    taskObj[savetask] = taskinput.value;
    saveindex.style.display = "none";
    addtask.style.display = "block";
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    taskinput.value = " ";
    showtask();
})

//deleteitem
function deleteitem(index) {
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);
    taskObj.splice(index, 1);
    localStorage.setItem("localtask", JSON.stringify(taskObj));
    showtask()
}
//delests

let deletes = document.getElementById("deletes");
deletes.addEventListener("click", () => {

    //let saveindex = document.getElementById("saveindex");
    // let addtask = document.getElementById("addtask")
    let webtask = localStorage.getItem("localtask");
    let taskObj = JSON.parse(webtask);

    if (webtask == null) {
        taskObj = [];
    } else {
        taskObj = JSON.parse(webtask);
        taskObj = [];
    }
    //saveindex.style.display = "none";
    //addtask.style.display = "block"

    localStorage.setItem("localtask", JSON.stringify(taskObj));
    taskinput.value = " ";
    showtask()
})

//search
let serachbox = document.getElementById("searchbox");
serachbox.addEventListener("input", function () {
    let trlist = document.querySelectorAll("tr");
    Array.from(trlist).forEach(function (item) {
        let searchText = item.getElementsByTagName("td")[0];
        innerText;
        let searchboxval = search.value;
        let re = new RegExp(searchboxval, "gi");

        if (searchText.matches(re)) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }
    })
})



