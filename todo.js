function adddata(){





    let rightContentDiv = document.querySelector(".right-content.add-task")
let icons = document.querySelectorAll(".filter-menu ul i.fa-solid")
let upToDateDiv = document.querySelector(".right-content.uptodate")
let closeTaskDive = document.querySelector(".right-content .top-content .close-div")
let readDiv = document.querySelector(".right-content.read")
let closereadDive = document.querySelector(".right-content .top-content .close-div2")
let createbtn = document.querySelector(".create-task")
let warningText = document.querySelector(".warning-task")
    // show and hide filter menu
icons.forEach((icon) => {
        icon.addEventListener(("click"), (e) => {
            e.target.parentElement.nextElementSibling.classList.toggle("show")
            if (e.target.classList.contains("fa-circle-chevron-down")) {
                e.target.previousElementSibling.style.display = "block"
                e.target.style.display = "none"

            } else {
                e.target.nextElementSibling.style.display = "block";
                e.target.style.display = "none"
            }
        })
    })
    // showTaskInput
let showTaskInput = () => {
    if (localStorage.username) {
        rightContentDiv.classList.add("active")
        warningText.classList.remove("show")

    } else {
        warningText.classList.add("show")
    }

}


createbtn.addEventListener("click", showTaskInput)

// hide taskdiv

closeTaskDive.addEventListener("click", (e) => {
        rightContentDiv.classList.remove("active")
    })
    // hide readdiv
closereadDive.addEventListener("click", (e) => {
        readDiv.classList.remove("active")
    })
    // hide uptodate div
function closeFunction() {
    upToDateDiv.classList.remove("active")
}
//global variable for input
let inputTitle = document.querySelector("#title")
let inputDescription = document.querySelector("#description")
let inputDeadline = document.querySelector("#deadline")
let inputTidestimat = document.querySelector("#tidestimat")
let inputStatus = document.querySelector("#status")
let inputkategori = document.querySelector("#kategori")
let addBtn = document.querySelector(".btn")
let listSection = document.querySelector(".list-section")
let dataList = document.querySelector("#data")
    // let tasks = JSON.parse(localStorage.getItem("task")) || [];
let Titlevalue = inputTitle.value;
let descriptionvalue = inputDescription.value;
let deadlinevalue = inputDeadline.value;
let tidestimatvalue = inputTidestimat.value;
let statusvalue = inputStatus.value;
let kategorivalue = inputkategori.value;
let details = []
addBtn.addEventListener("click", createDiv)

/// create table function
function table() {
    document.querySelectorAll('.section').forEach(info => info.remove())

    details.forEach((el, index) => {

        let createElement =
            `
        <tr class="section">
        <th>${index+1}</th>
    <th>${el.title}</th>
    <th>${el.description}</th>
    <th>${el.deadline}</th>
    <th>${el.Tidestimat}</th>
    <th class="text-done">${el.status}</th>
    <th>${el.kategori}</th>
        <th>
            <p>action</p>
            <button id="read" onclick="readInfo('${el.title}', '${el.description}', '${el.deadline}', '${el.Tidestimat}', '${el.status}', '${el.kategori}')"><i class="fa-solid fa-eye d-icons"></i></button>

            <button id="edit" onclick="editfun(${index},this)"><i class="fa-solid fa-pen-to-square d-icons"></i></button>
            <button id="delete" onclick="deletetask(${index},this)"><i class="fa-solid fa-trash-can d-icons"></i></button>

        </th>
    </tr>
        `
        dataList.innerHTML += createElement
            //console.log(details[index].completed)

        // add color for task which is done
        let textDone = document.querySelectorAll(".text-done");

        textDone.forEach((el) => {
            if (el.innerHTML === "completed") {
                el.classList.add("done")
                el.style.color = "green"
            }
        })

    })
}
getdata()
table()

// local storage funtion to get data
function getdata() {
    let data = localStorage.getItem("task")
    if (data) {
        details = JSON.parse(data)
    } else {
        setdata()
    }
}
// local storage funtion to set data

function setdata() {
    localStorage.setItem("task", JSON.stringify(details))
}
// create object function and push it in new array
function createDiv() {
    dataList.innerHTML = ""
    let data = {
        id: Date.now(),
        title: inputTitle.value,
        description: inputDescription.value,
        deadline: inputDeadline.value,
        Tidestimat: inputTidestimat.value,
        status: inputStatus.value,
        kategori: inputkategori.value,
        completed: false,
    }
    details.push(data)
    setdata()
    table()




    //dataList.innerHTML = ""
    inputTitle.value = "";
    inputDescription.value = "";
    inputDeadline.value = "";
    inputTidestimat.value = "";


}
// delet function with index

function deletetask(index) {
    dataList.innerHTML = ""
    if (confirm("Are u sure that u want to delete?") === true) {
        details.splice(index, 1)
    }
    setdata()
    table()
}
// edit function and create edit div
function editfun(index) {


    upToDateDiv.classList.add("active")
    upToDateDiv.innerHTML = ""

    let div = document.createElement("div")
    div.className = "top-content"
    div.innerHTML =
        `
    <div class="close-div2" onclick="closeFunction()">
    <i class="fa-solid fa-xmark d-icons"></i>

</div>

        <div class="input-container">

        <span>
        <label for="title">title</label>
        <input type="text" id="title1" >
    </span>
        <span>
        <label for="description">description</label>
        <input type="text" id="description1" >
    </span>
        <span>
        <label for="deadline">deadline</label>
        <input type="date" id="deadline1">
    </span>
        <span>
        <label for="tidestimat">tidestimat</label>
        <input type="time" id="tidestimat1" >
    </span>
        <div class="status">
            <label for="status">status</label>
            <select name="status" id="status1">
            <option value="completed">completed</option>
            <option value="uncompleted">uncompleted</option>

        </select>

        </div>
        <div class="categori">
            <label for="kategori">kategori</label>
            <select name="kategori" id="kategori1" class="input">kategori
            <option value="hälsa">hälsa</option>
             <option value="hushåll">hushåll</option>
             <option value="jobbrelaterat">jobbrelaterat</option>
             <option value="nöja">nöja</option>
          </select>
        </div>

    </div>

    <div class="btns">
        <button class="btn-save" onclick="uptodate(${index})">uptodate</button>

     `
    upToDateDiv.append(div)
    let inputTitleUptodate = document.querySelector("#title1")
    let inputDescriptionUptodate = document.querySelector("#description1")
    let inputDeadlineUptodate = document.querySelector("#deadline1")
    let inputTidestimatUptodate = document.querySelector("#tidestimat1")
    let inputStatusUptodate = document.querySelector("#status1")
    let inputkategoriUptodate = document.querySelector("#kategori1")
    inputTitleUptodate.value = details[index].title
    inputDescriptionUptodate.value = details[index].description
    inputDeadlineUptodate.value = details[index].deadline
    inputTidestimatUptodate.value = details[index].Tidestimat
    inputStatusUptodate.value = details[index].status
    inputkategoriUptodate.value = details[index].kategori

}
// onclick uptodate and find selected div with index

function uptodate(index) {
    dataList.innerHTML = ""
    let inputTitleUptodate = document.querySelector("#title1")
    let inputDescriptionUptodate = document.querySelector("#description1")
    let inputDeadlineUptodate = document.querySelector("#deadline1")
    let inputTidestimatUptodate = document.querySelector("#tidestimat1")
    let inputStatusUptodate = document.querySelector("#status1")
    let inputkategoriUptodate = document.querySelector("#kategori1")

    details[index] = {
        title: inputTitleUptodate.value,
        description: inputDescriptionUptodate.value,
        deadline: inputDeadlineUptodate.value,
        Tidestimat: inputTidestimatUptodate.value,
        status: inputStatusUptodate.value,
        kategori: inputkategoriUptodate.value,

    }

    setdata()
    table()
        //console.log(details)
}




// create a new div for use this to filter and sortering
function createNewDiv(item, index) {
    let createElement = `
    <tr>
    <th>${index+1}</th>
    <th>${item.title}</th>
    <th>${item.description}</th>
    <th>${item.deadline}</th>
    <th>${item.Tidestimat}</th>
    <th class="text-done">${item.status}</th>
    <th>${item.kategori}</th>
    <th>
    <button id="read" onclick="readInfo('${item.title}', '${item.description}', '${item.deadline}', '${item.Tidestimat}', '${item.status}', '${item.kategori}')"><i class="fa-solid fa-eye"></i></button>

    <button id="edit" onclick="editfun(${index},'${item.title}', '${item.description}', '${item.deadline}', '${item.Tidestimat}', '${item.status}', '${item.kategori}')"><i class="fa-solid fa-pen-to-square"></i></button>

    <button id="delete" onclick="deletetask(${index},this)"><i class="fa-solid fa-trash-can d-icons"></i></button>
                
</th>
    </tr>
    `
    dataList.innerHTML += createElement
        // add color for task which is done
    let textDone = document.querySelectorAll(".text-done")
    textDone.forEach((el) => {
        if (el.innerHTML === "completed") {
            el.classList.add("done")
            el.style.color = "green"
        }
    })

}




// filter  function with checkbox

// filter by status
function filterfunByStatus() {


    let checkboxvalue = []
    let checkboxs = document.querySelectorAll(".checkbox")
    checkboxs.forEach((box) => {

        box.addEventListener("click", (e) => {
            dataList.innerHTML = ""
            if (e.target.checked == true) {
                //console.log("hi")
                dataList.innerHTML = ""
                checkboxvalue.push(box.value)

                checkboxvalue.forEach((el) => {
                    dataList.innerHTML = ""

                    let filteritem = details.filter((el) => {
                        // console.log(el)
                        return (checkboxvalue.includes(el.status))

                    })
                    filteritem.forEach((item, index) => {
                        createNewDiv(item, index)
                    })
                })
            }
            // delete the files which i didnot need
            else {
                dataList.innerHTML = ""
                checkboxvalue = checkboxvalue.filter((el) => {
                    return el !== e.target.value
                })
                let deleteFiltered = details.filter((element) => {
                    //console.log(element)
                    return (checkboxvalue.includes(element.status))
                })
                deleteFiltered.forEach((item, index) => {
                    createNewDiv(item, index)
                })
            }

        })
        setdata()


    })
}
filterfunByStatus()


// filter by kategori

function filterfunByKategori() {

    let checkboxvalue = []
    let checkboxs = document.querySelectorAll(".checkbox1")
    checkboxs.forEach((box) => {

        box.addEventListener("click", (e) => {
            dataList.innerHTML = ""
            if (e.target.checked == true) {
                console.log("hi")
                dataList.innerHTML = ""
                checkboxvalue.push(box.value)

                checkboxvalue.forEach((el) => {
                    dataList.innerHTML = ""

                    let filteritem = details.filter((el) => {
                        // console.log(el)
                        return (checkboxvalue.includes(el.kategori))

                    })
                    filteritem.forEach((item, index) => {
                        createNewDiv(item, index)
                    })
                })
            }
            // delete the files which i didnot need
            else {
                dataList.innerHTML = ""
                checkboxvalue = checkboxvalue.filter((el) => {
                    return el !== e.target.value
                })
                let deleteFiltered = details.filter((element) => {
                    //console.log(element)
                    return (checkboxvalue.includes(element.kategori))
                })
                deleteFiltered.forEach((item, index) => {
                    createNewDiv(item, index)
                })
            }


        })

        setdata()
    })
}

filterfunByKategori()

//end of function

// sortering function
let sorteringCheckbox = document.querySelectorAll(".deadline")
    //console.log(sorteringCheckbox)

function sorteringToDo() {

    sorteringCheckbox.forEach((box) => {
        box.addEventListener("click", (e) => {
            dataList.innerHTML = ""

            if (box.value === "fallande") {
                let sortdeadline = details.toSorted((a, b) => {
                    // return a.tidestimat - b.tidestimat
                    if (a.deadline > b.deadline) {
                        return -1;
                    }
                    if (a.deadline < b.deadline) {
                        return 1;
                    }
                    return 0;
                })

                sortdeadline.forEach((item, index) => {

                    createNewDiv(item, index)


                })
            } else if (box.value === "stigande") {
                let sortdeadline = details.toSorted((a, b) => {
                    if (a.deadline < b.deadline) {
                        return -1;
                    }
                    if (a.deadline > b.deadline) {
                        return 1;
                    }
                    return 0;
                })


                sortdeadline.forEach((item, index) => {

                    createNewDiv(item, index)


                })
            }

        })


    })
    setdata()
}

sorteringToDo()

/// sortering by tids
let tidestimatSort = document.querySelectorAll(".tidestimat")

function sorteringMedTids() {
    tidestimatSort.forEach((box) => {
        box.addEventListener("click", (e) => {
            dataList.innerHTML = ""

            if (box.value === "fall") {
                let sortdeadline = details.toSorted((a, b) => {
                    if (a.Tidestimat > b.Tidestimat) {
                        return -1;
                    }
                    if (a.Tidestimat < b.Tidestimat) {
                        return 1;
                    }
                    return 0;
                })

                sortdeadline.forEach((item, index) => {
                    createNewDiv(item, index)


                })
            } else if (box.value === "stig") {
                let sortdeadline = details.toSorted((a, b) => {
                    if (a.Tidestimat < b.Tidestimat) {
                        return -1;
                    }
                    if (a.Tidestimat > b.Tidestimat) {
                        return 1;
                    }
                    return 0;
                })

                sortdeadline.forEach((item, index) => {
                    createNewDiv(item, index)
                })
            }

        })

    })
    setdata()
}
sorteringMedTids()
    // read function to show div
function readInfo(title, description, deadline, Tidestimat, status, kategori) {

    readDiv.classList.add("active")


    document.querySelector('#title2').value = title,
        document.querySelector("#description2").value = description,
        document.querySelector("#deadline2").value = deadline,
        document.querySelector("#tidestimat2").value = Tidestimat,
        document.querySelector("#status2").value = status,
        document.querySelector("#kategori2").value = kategori

}


// function light word function
let lightWordDiv = document.querySelector(".light-word");
let word = "ToDoList";
let arr = Array.from(word);
console.log(arr)
arr.forEach((ele) => {
    console.log(ele)
    let newDiv = document.createElement("div");
    newDiv.className = "word-div"
    let p = document.createElement("p")
    p.innerHTML = ele
    newDiv.append(p)
    lightWordDiv.append(newDiv)
})
    








}




