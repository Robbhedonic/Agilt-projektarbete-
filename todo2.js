// show and hide filter menu

let icons = document.querySelectorAll(".filter-menu ul i.fa-solid")
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

//  end of show and hide filter menu









// to do function
let inputTitle = document.querySelector("#title")
let inputDescription = document.querySelector("#description")
let inputDeadline = document.querySelector("#deadline")
let inputTidestimat = document.querySelector("#tidestimat")
let inputStatus = document.querySelector("#status")
let inputkategori = document.querySelector("#kategori")
let checkBoxs = document.querySelectorAll(".checkbox")
let addBtn = document.querySelector(".btn")
let listSection = document.querySelector(".list-section")
let tasks = JSON.parse(localStorage.getItem("task")) || [];
let todoFun = () => {
    let Titlevalue = inputTitle.value;
    let descriptionvalue = inputDescription.value;
    let deadlinevalue = inputDeadline.value;
    let tidestimatvalue = inputTidestimat.value;
    let statusvalue = inputStatus.value;
    let kategorivalue = inputkategori.value;
    creatediv(Titlevalue, descriptionvalue, deadlinevalue, tidestimatvalue, statusvalue, kategorivalue)
}

addBtn.addEventListener("click", todoFun)



// create div function and storage in local storage
function creatediv(title, description, deadline, tidestimat, status, kategori) {


    let taskobj = { completed: false, id: Date.now(), title, description, deadline, tidestimat, status, kategori }
    let li = document.createElement("li");
    li.className = "todolist"
    li.innerHTML = `
  <div class="todo-content">
    <p> title:${title}</p>
    <p> description:${description}</p>
    <p> deadline:${deadline}</p>
    <p> tidestimat:${tidestimat}</p>
    <p> status:${status}</p>
    <p> kategori:${kategori}</p>
     
      </div>

      <div class="buton">
    <button onclick="edit(${taskobj.id},this)">edit</button>

    <button onclick="deletetask(${taskobj.id},this)">delete</button>
    </div>
    `

    listSection.append(li)
        // completed
    if (status === "completed") {
        let p = document.createElement("h2");
        p.innerText = "done"
        li.append(p)
    }

    tasks.push(taskobj)
    localStorage.setItem("task", JSON.stringify(tasks))
    inputTitle.value = "";
    inputDescription.value = "";
    inputDeadline.value = "";
    inputTidestimat.value = "";
    inputStatus.value = "";
    inputkategori.value = "";

}
// delet task function
function deletetask(id, e) {
    // console.log("hi")
    let choosenitem = tasks.findIndex((tasks) => {
        return tasks.id === id
    })
    filteritem = tasks.filter((el, ind) => {
        return ind !== choosenitem
    })

    if (confirm("do u want to delet?") === true) {

        e.parentElement.parentElement.remove()
        tasks = [...filteritem]
        localStorage.setItem("task", JSON.stringify(tasks))
    }

}



// get task from local storage
let getTodoData = () => {
    if (localStorage.task) {
        tasks = JSON.parse(localStorage.task)
        filterfun()

        tasks.forEach((item, index) => {
            //console.log(item)
            let li = document.createElement("li");
            li.className = "todolist"
            li.innerHTML = `
            <div class="todo-content">
        <p> title:${item.title}</p>
        <p> description:${item.description}</p>
        <p> deadline:${item.deadline}</p>
        <p> tidestimat:${item.tidestimat}</p>
        <p> status:${item.status}</p>
        <p> kategori:${item.kategori}</p>
      </div>
       <div class="button">
        <button onclick="edit(${item.id})">edit</button>

        <button onclick="deletetask(${item.id},this)">delete</button>
   </div>
        `
                // completed
            if (item.status === "completed") {
                let p = document.createElement("h2");
                p.innerText = "done"
                li.append(p)
            }

            listSection.append(li)

        })
    }

}
getTodoData()
    // filter  function with checkbox
function filterfun() {

    /// function filter

    checkBoxs.forEach((box) => {
        box.addEventListener("click", (e) => {
            //console.log("hi")
            listSection.innerHTML = ""
            let filteritem = tasks.filter((el) => {
                return el.kategori === e.target.value || el.status === e.target.value
            })
            filteritem.forEach((item) => {

                let li = document.createElement("li");
                li.className = "todolist"

                li.innerHTML = `

                <div class="todo-content">
            <p> title:${item.title}</p>
             <p> description:${item.description}</p>
             <p> deadline:${item.deadline}</p>
           <p> tidestimat:${item.tidestimat}</p>
          <p> status:${item.status}</p>
        <p> kategori:${item.kategori}</p>
        </div>
       <div class="button">
         <button onclick="edit(${item.id})">edit</button>
        <button onclick="deletetask(${item.id},this)">delete</button>

    </div>
`
                if (item.status === "completed") {
                    let p = document.createElement("h2");
                    p.innerText = "done"
                    li.append(p)
                }
                listSection.append(li)

            })
        })
    })
}

filterfun()

//end of function

// sortering function
let sorteringCheckbox = document.querySelectorAll(".checkbox2")
    //console.log(sorteringCheckbox)

let sorteringToDo = () => {
    sorteringCheckbox.forEach((box) => {
        box.addEventListener("click", (e) => {
            console.log("hi")
            listSection.innerHTML = ""

            if (box.value === "stigande") {
                let sortdeadline = tasks.sort((a, b) => {
                    return a.deadline - b.deadline || a.tidestimat - b.tidestimat
                })
                sortdeadline.forEach((item) => {

                    let li = document.createElement("li");
                    li.className = "todolist"

                    li.innerHTML = `
                    <div class="todo-content">
                    
                    <p> title:${item.title}</p>
                      <p> description:${item.description}</p>
                      <p> deadline:${item.deadline}</p>
                      <p> tidestimat:${item.tidestimat}</p>
                      <p> status:${item.status}</p>
                      <p> kategori:${item.kategori}</p>
                      </div>
        <div class="button">

         <button onclick="edit(${item.id})">edit</button>
        <button onclick="deletetask(${item.id},this)">delete</button>

        </div>
`
                    console.log(typeof item.tidestimat)
                    if (item.status === "completed") {
                        let p = document.createElement("h2");
                        p.innerText = "done"
                        li.append(p)
                    }
                    listSection.append(li)

                })
            }
            if (box.value === "fallande") {
                let sortdeadline = tasks.sort((a, b) => {
                    return b.deadline - a.deadline || b.tidestimat - a.tidestimat
                })
                sortdeadline.forEach((item) => {

                    let li = document.createElement("li");
                    li.className = "todolist"

                    li.innerHTML = `
                <div class="todo-content">
                    <p> title:${item.title}</p>
                    <p> description:${item.description}</p>
                    <p> deadline:${item.deadline}</p>
                    <p> tidestimat:${item.tidestimat}</p>
                    <p> status:${item.status}</p>
                    <p> kategori:${item.kategori}</p>
                </div>
                  <div class="button">

                   <button onclick="edit(${item.id})">edit</button>
                   <button onclick="deletetask(${item.id},this)">delete</button>
                  </div>
`
                    if (item.status === "completed") {
                        let p = document.createElement("h2");
                        p.innerText = "done"
                        li.append(p)
                    }
                    listSection.append(li)

                })
            }
        })

    })
}
sorteringToDo()


let savebtn = document.querySelector(".save")

function edit(id, e) {
    console.log(e.parentElement.children[0])
    let choosenitem = tasks.find((tasks) => {
        return tasks.id === id
    })

    console.log(choosenitem)
    inputTitle.value = choosenitem.title
    inputDescription.value = choosenitem.description
    inputDeadline.value = choosenitem.deadline
    inputTidestimat.value = choosenitem.tidestimat
    inputStatus.value = choosenitem.status
    inputkategori.value = choosenitem.kategori



    savebtn.addEventListener("click", () => {
        console.log("hi")
        let listtitle = e.parentElement.children[0].textContent
        let listdescription = e.parentElement.children[1].innerHTML
        let listdeadline = e.parentElement.children[2].innerHTML
        let listtidestimat = e.parentElement.children[3].innerHTML
        let liststatus = e.parentElement.children[4].innerHTML
        let listkategori = e.parentElement.children[4].innerHTML
        inputTitle.value = listtitle
        listdescription = inputDescription.value
        listdeadline = inputDeadline.value
        listtidestimat = inputTidestimat.value
        liststatus = inputStatus.value
        listkategori = inputkategori.value

        //console.log(listtitle, listsescription, listkategori, liststatus)
    })


    // document.querySelector(".id").value = choosenitem.id
    // savebtn.addEventListener("click", () => {
    //     // choosenitem.parentElement
    // })
}