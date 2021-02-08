function addToDatabase(newTask)
{
   let listofTasks;
   let dates;
   if(localStorage.getItem('tasks') == null)
   {
       listofTasks = [];
       dates = []
   }
   else
   {
       listofTasks = JSON.parse(localStorage.getItem('tasks'));
       dates = JSON.parse(localStorage.getItem('dates'))
   }
    date = new Date();
    dates.push(date)
    listofTasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(listofTasks));
    localStorage.setItem('dates',JSON.stringify(dates) )
}


function loadfromDB()
{
    let listofTasks;
    if(localStorage.getItem('tasks') == null)
    {
        listofTasks = [];
    }
    else
    {
        listofTasks = JSON.parse(localStorage.getItem('tasks'));
    }
    
    return listofTasks; 
}


function clearAllTasksFromDB(){
    localStorage.clear();
}

// Remove from Local storage function declaration 
function removefromDB(taskItem) {

    // console.log(taskItem.textContent);
    let listofTasks;
    if (localStorage.getItem('tasks') == null) {
        listofTasks = [];
    } else {
     listofTasks = JSON.parse(localStorage.getItem('tasks'));
    }
    listofTasks.forEach(function(task, index) {
        if (taskItem.textContent.trim() === task.trim())
            listofTasks.splice(index, 1);
    });
    localStorage.setItem('tasks', JSON.stringify(listofTasks));

}


function sortAscending(){

    return loadfromDB().sort();
    

}

function sortDescending(){

    return loadfromDB().sort().reverse();
    

}