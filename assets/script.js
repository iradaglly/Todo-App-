let input = document.querySelector("#input")
let addBtn = document.querySelector("#add")
let clearBtn = document.querySelector("#clear")
let list = document.querySelector("ul")
let spanCount = document.querySelector("#count")
let spanError = document.querySelector("#errormsg")
let count = 0;
addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    if (input.value.trim() == "") {
        spanError.style.display = "block"
    }
    else {
        let listItem = document.createElement("li")
        listItem.classList.add("list-group-item")
        listItem.style.backgroundColor = "#f2f2f2"
        listItem.classList.add("d-flex")
        listItem.classList.add("justify-content-between")
        listItem.classList.add("align-item-center")
        listItem.classList.add("mb-3")

        let content = document.createElement("p")
        content.textContent = input.value
        content.style.fontSize = "20px"
        content.classList.add("m-0")
        content.style.textTransform = "capitalize"

        let deleteBtn = document.createElement("button")
        deleteBtn.classList.add("btn")
        deleteBtn.classList.add("btn-danger")
        let icon = document.createElement("i")
        icon.setAttribute("class", "fa-solid fa-trash")
        deleteBtn.append(icon)

        let btnWrapper = document.createElement("div")
        btnWrapper.prepend(deleteBtn)

        listItem.append(content, btnWrapper)
        list.prepend(listItem)
        count++
        spanError.style.display = "none"
        spanCount.innerHTML = ""
        input.value = ""

        deleteBtn.addEventListener("click", (e) => {
            if (window.confirm("Are you sure to delete?")) {
                deleteBtn.parentElement.parentElement.remove()
            }
        })
    }
    clearBtn.addEventListener("click", (e) => {
        list.innerHTML = ""
    })
})