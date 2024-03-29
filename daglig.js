//  function for filter section
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
    /////////////
    // show activity btn
let inputWrapper = document.querySelector(".input-wrapper");
let closeBtn = document.querySelector(".close-btn");
let addActivityBtn = document.querySelector(".write-acitvity")
let warningDailyText = document.querySelector(".warning-daily")


// let showActivityDiv = () => {
//     inputWrapper.classList.add("show")
// }
let showActivityDiv = () => {
    if (localStorage.username) {
        inputWrapper.classList.add("show")
        warningDailyText.classList.remove("show")

    } else {
        warningDailyText.classList.add("show")
    }
}
addActivityBtn.addEventListener("click", showActivityDiv)

let hideActivityDiv = () => {
    inputWrapper.classList.remove("show")

}
closeBtn.addEventListener("click", hideActivityDiv)

// global variable
let titleInput = document.querySelector("#title");
let numberInput = document.querySelector("#number");
let selectPrioritet = document.querySelector("#Prioritet")
let acitivityBtn = document.querySelector(".add-activity")
let acitvityDiv = document.querySelector(".acitvitylist")
let sorteringByCheckbox = document.querySelectorAll("[name=checkbox]")
let DataList = document.querySelector("#data")
    // create two localstorage one according to filter username and onther one for all users
let activities = JSON.parse(localStorage.getItem("activity")) || [];
let localStorageCopy = JSON.parse(localStorage.getItem("activity")) || [];

acitivityBtn.addEventListener("click", createDiv)
    /// create table function
function createTable() {
    document.querySelectorAll('.section').forEach(info => info.remove())
    activities.forEach((el, index) => {
        let createElement =
            `
        <tr class="section">
        <th>${index+1}</th>
    <th>${el.title}</th>
    <th>${el.number}</th>
    <th>${el.pieriorty}</th>

   
    <th>
    <div class="counter">
                     <span class="minus" onclick="changeQuantity(${index},${el.quantity-1},this)">-</span>
                     <span class="num">${el.quantity}</span>
                     <span class="plus" onclick="changeQuantity(${index},${el.quantity+1},this)">+</span>
                </div>
</th> 
        <th>
            <p>action</p>

            <button id="delete" onclick="deletetask(${index},this,${el.id})"><i class="fa-solid fa-trash-can d-icons"></i></button>

        </th>
    </tr>
        `
        DataList.innerHTML += createElement

        //     <th>
        //     <button onclick="changeQuantity(${index}, ${el.quantity - 1})">-</button>
        //      <div class="count">${el.quantity} </div>
        //      <button onclick="changeQuantity(${index}, ${el.quantity + 1})">+</button>
        // </th>
    })

}
setdata()
createTable()

// filter data according to name of user
function setdata() {

    let filtered = localStorageCopy.filter((el) => {
        return el.username === localStorage.username
    })
    activities = filtered;
}
//  create object function and push it in new array
function createDiv() {
    console.log("hi")
    DataList.innerHTML = ""
    let details = {
        id: Date.now(),
        title: titleInput.value,
        number: numberInput.value,
        pieriorty: selectPrioritet.value,
        quantity: 0,
        username: localStorage.username
    }
    localStorageCopy.push(details)

    localStorage.setItem("activity", JSON.stringify(localStorageCopy));
    setdata()
    createTable()
    titleInput.value = ""
    numberInput.value = ""
}
// delete each tr according to index 
function deletetask(index, e, id) {
    DataList.innerHTML = ""

    let choosenitem = localStorageCopy.findIndex((ele) => {
        return ele.id === id
    })
    filteritem = localStorageCopy.filter((el, ind) => {
        return ind !== choosenitem
    })

    if (confirm("do u want to delet?") === true) {

        e.parentElement.remove()
        localStorageCopy = [...filteritem]
        localStorage.setItem("activity", JSON.stringify(localStorageCopy))
    }

    setdata()
    createTable()
}


//function create element
function creatNewDivData(title, number, pieriorty, index) {
    document.querySelectorAll('.section').forEach(info => info.remove())
    DataList.innerHTML = ""

    activities.forEach((el, index) => {
        let createElement =

            `
        <tr>
        // <th>${index+1}</th>

         <th>${el.title}</th>
         <th>${el.number}</th>   
         <th>${el.pieriorty}</th>
            <th>
            <div class="counter">
                              <span class="minus" onclick="changeQuantity(${index},${el.quantity-1},this)">-</span>
                              <span class="num">${el.quantity}</span>
                              <span class="plus" onclick="changeQuantity(${index},${el.quantity+1},this)">+</span>
            </div>
            </th> 
            <th>
                <p>action</p>
                <button id="delete" onclick="deletetask(${index},this,${el.id})"><i class="fa-solid fa-trash-can d-icons"></i></button>

            </th>
        </tr>
        `

        DataList.innerHTML += createElement
    })
}
//

function changeQuantity(index, quantity, e) {
    DataList.innerHTML = ""
    if (quantity < 0) {
        quantity = 0
    } else {

        activities[index].quantity = quantity;
        activities[index].number = quantity

    }
    localStorage.setItem("activity", JSON.stringify(localStorageCopy))

    setdata()
    createTable()

}

// filter function
// filter by pioriorty
let radioBtnFilter = document.querySelectorAll("[name=radio]")

function filterfunByPieriorty() {


    let checkboxvalue = []
    radioBtnFilter.forEach((box) => {
        box.addEventListener("click", (e) => {
            DataList.innerHTML = ""
            if (e.target.checked == true) {
                //console.log("hi")
                DataList.innerHTML = ""
                checkboxvalue.push(box.value)

                checkboxvalue.forEach((el) => {
                    DataList.innerHTML = ""

                    let filteritem = activities.filter((el) => {
                        // console.log(el)
                        return (checkboxvalue.includes(el.pieriorty))

                    })
                    filteritem.forEach((el, index) => {
                        let createElement =

                            `
                       <tr>
                       // <th>${index+1}</th>
    
                        <th>${el.title}</th>
                        <th>${el.number}</th>   
                        <th>${el.pieriorty}</th>
                           <th>
                           <div class="counter">
                                     <span class="minus" onclick="changeQuantity(${index},${el.quantity-1},this)">-</span>
                                     <span class="num">${el.quantity}</span>
                                     <span class="plus" onclick="changeQuantity(${index},${el.quantity+1},this)">+</span>
                            </div>
                      
                           </th> 
                           <th>
                               <p>action</p>
                               <button id="delete" onclick="deletetask(${index},this)"><i class="fa-solid fa-trash-can d-icons"></i></button>
    
                           </th>
                       </tr>
                       `

                        DataList.innerHTML += createElement

                    })
                })
            }
            // delete the files which i didnot need
            else {
                DataList.innerHTML = ""
                checkboxvalue = checkboxvalue.filter((el) => {
                        return el !== e.target.value
                    })
                    //console.log(checkboxvalue)
                let deleteFiltered = activities.filter((element) => {
                    //console.log(element)
                    return (checkboxvalue.includes(element.pieriorty))
                })
                deleteFiltered.forEach((el, index) => {
                    let createElement =

                        `
                   <tr>
                   // <th>${index+1}</th>

                    <th>${el.title}</th>
                    <th>${el.number}</th>   
                    <th>${el.pieriorty}</th>
                       <th>
                       <div class="counter">
                                 <span class="minus" onclick="changeQuantity(${index},${el.quantity-1},this)">-</span>
                                 <span class="num">${el.quantity}</span>
                                 <span class="plus" onclick="changeQuantity(${index},${el.quantity+1},this)">+</span>
                        </div>
                  
                       </th> 
                       <th>
                           <p>action</p>
                           <button id="delete" onclick="deletetask(${index},this)"><i class="fa-solid fa-trash-can d-icons"></i></button>

                       </th>
                   </tr>
                   `

                    DataList.innerHTML += createElement

                })
            }

        })
        setdata()


    })
}
filterfunByPieriorty()


//

// sort function by streak

function sortering() {
    sorteringByCheckbox.forEach((box) => {

        box.addEventListener("click", (e) => {
            // DataList.innerHTML = ""
            DataList.innerHTML = ""

            if (e.target.value === "stigande") {
                let sorteringStigande = activities.sort((a, b) => {
                    return a.number - b.number

                })

                sorteringStigande.forEach((item, index) => {

                    creatNewDivData(item.title, item.pieriorty, item.number, index)

                })


            } else if (e.target.value === "fallande") {
                let sorteringFallande = activities.sort((a, b) => {
                    return b.number - a.number

                })

                sorteringFallande.forEach((item, index) => {

                    creatNewDivData(item.title, item.pieriorty, item.number, index)


                })
            }

        })
    })
}
sortering()


// sort by name pierority

let sorteringName = document.querySelectorAll("[name=name-sort]")

function sorteringByName() {
    sorteringName.forEach((box) => {
        box.addEventListener("click", (e) => {
            DataList.innerHTML = ""

            if (box.value === "A-High") {

                let sorteringALfabet = activities.sort((a, b) => {
                    if (a.pieriorty < b.pieriorty) {
                        return -1;
                    }
                    if (a.pieriorty > b.pieriorty) {
                        return 1;
                    }
                    return 0;
                })
                sorteringALfabet.forEach((item) => {

                    creatNewDivData(item.title, item.pieriorty, item.number, item.id)


                })
            }
            if (box.value === "C-Low") {

                let sorteringALfabet = activities.sort((a, b) => {
                    if (a.pieriorty > b.pieriorty) {
                        return -1;
                    }
                    if (a.pieriorty < b.pieriorty) {
                        return 1;
                    }
                    return 0;
                })
                sorteringALfabet.forEach((item) => {

                    creatNewDivData(item.title, item.pieriorty, item.number, item.id)

                })

            }
        })
    })

}
sorteringByName()




// function light word function
let lightWordDiv = document.querySelector(".light-word-daily");
let word = "DailyRutin";
let arr = Array.from(word);
//console.log(arr)
arr.forEach((ele) => {
    //console.log(ele)
    let newDiv = document.createElement("div");
    newDiv.className = "word-div"
    let p = document.createElement("p")
    p.innerHTML = ele
    newDiv.append(p)
    lightWordDiv.append(newDiv)
})