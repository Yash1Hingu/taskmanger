var addTask = document.getElementById("addTask");
var tasktext = document.getElementById("tasktext");
var taskid = 1;
var taskcontainer = document.querySelector(".task-container");
var complet = document.querySelector(".complete");

addTask.addEventListener("click", function add() {
    // taskdiv
    const taskDiv = document.createElement("div");
    taskDiv.setAttribute("class","task");
    taskDiv.setAttribute("id","task"+taskid);
    taskcontainer.appendChild(taskDiv);
    
    // taskitems
    var taskitems = document.createElement("input");
    taskitems.setAttribute("class","task-items");
    taskitems.setAttribute("disabled","");
    taskitems.value = tasktext.value;
    taskDiv.appendChild(taskitems);
    
    // button create
    var button = document.createElement("button");
    button.setAttribute("class","remove");
    button.setAttribute("id","remove"+taskid);
    button.innerHTML = "Remove";
    taskDiv.appendChild(button);

    taskid = taskid + 1;
    tasktext.value = "";

    var remove = document.querySelectorAll(".remove");

    remove.forEach(element => {

        element.addEventListener("click",function()
        {
            let task = element.parentElement;
            complet.appendChild(task);
            task.removeChild(button);
            taskitems.setAttribute("id","removed");
            taskitems.style.textDecoration= "line-through";
        })
    });

})

