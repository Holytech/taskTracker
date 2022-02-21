const taskList = [
    {
        id: 0,
        title: "Visit the Doctor",
        body: "I need to go see the Doctor for a proper check up as ramadan if fast approaching",
        date: "2022-02-19T07:00"
    },
    {
        id: 1,
        title: "Meeting with Victor",
        body: "Meeting with victor I need to hold a meeting with Victor about the project 104, we really need to push this project and seal it off.",
        date: "2022-02-25T17:00"
    }
];

let taskDiv = document.getElementById("task");
let taskForm = document.getElementById("taskForm");
let titleInp = document.getElementById("taskTitle");
let bodyInp = document.getElementById("taskBody");
let colorInp = document.getElementById("taskColor");


const showTask = () =>{
    taskDiv.innerHTML = '';
    taskList.forEach((task)=>{
        taskDiv.innerHTML += `
            <div class="card p-3 mb-3">
                <div class="card-body" id="${task.id}">
                    <h3 class="card-title fw-bold">${task.title}</h3>
                    <p class="card-text">${task.body}</p>  
                    <button class="btn btn-danger btn-sm float-right delBtn">Delete</button>
                </div>
            </div>
        `;
    });
}
showTask();

const addTask = (e) =>{
    e.preventDefault();
    let taskTitle = titleInp.value;
    let taskBody = bodyInp.value;
    let taskDate = dateInp.value;
    let taskId = taskList.length;

    let newTask = {
        id: taskId,
        title: taskTitle,
        body: taskBody,
        date: taskDate
    }

    taskList.push(newTask);

    titleInp.value = "";
    bodyInp.value = "";
    dateInp.value = "";

    console.log(taskList);
    showTask();
}
taskForm.addEventListener("submit", addTask);

const removeTask = (e) =>{
    if(e.target.classList.contains('delBtn')){
        if(confirm("Are you sure?")){
            let del = e.target.parentElement.id;
            taskList.pop[del];

            showTask();
        }
    }
}
taskDiv.addEventListener('click', removeTask);