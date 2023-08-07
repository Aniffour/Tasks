console.log('%cTasks' ,'color: blue; background-color: red; font-size: 70px;'  )

function remove(array , element){
    nArray = []
    for (let i=0 ; i<array.length ; i++){
        if (array[i]!==element){
            nArray.push(array[i])
        }
    }
    return nArray
}

if (localStorage.getItem('tasks') === null) {
    localStorage.setItem('tasks'  ,'Your Tasks...')


}else{
    for (let i = 0 ; i <  localStorage.getItem('tasks').split(',').length  ; i++){
        if(localStorage.getItem('tasks').split(',')[i] !==''){
            let mainDev =document.createElement('dev')
            mainDev.setAttribute('class' , 'tasks' )
            mainDev.setAttribute('id' ,i)
            
            
            let devTask = document.createElement('dev')
            devTask.setAttribute('dev' , 'task')
            devTask.setAttribute('id' , `task${i}`)
            devTask.innerText = localStorage.getItem('tasks').split(',')[i]
            mainDev.append(devTask)

            let devDelete = document.createElement('dev')
            devDelete.setAttribute('class' , 'delete')
            
            let dBtn = document.createElement('button')
            dBtn.setAttribute('class' , 'btn-delete')
            dBtn.setAttribute('id' ,i)
            dBtn.innerText = 'delete' 
            devDelete.append(dBtn)
            
            mainDev.append(devDelete)
            document.body.append(mainDev)}
    }
}



let n_task = document.querySelector('.New')
let t_add = document.querySelector('.btn-add')

t_add.addEventListener('click' , function (){
    if (n_task.value.length >0){
        let array = [localStorage.getItem('tasks')]
        array.push( n_task.value)
        localStorage['tasks']=array 

        location.reload()
}else {
    swal("Here's a message!", "It's pretty, isn't it?");
}})



let deleteBtm = document.querySelectorAll('.btn-delete')

deleteBtm.forEach(
    function(e){
        e.addEventListener(
            'click' ,
            function(btn){
                id = btn.currentTarget.id  
                let task = document.getElementById(`task${id}`)
                let array = localStorage.tasks.split(',')
                localStorage['tasks']=remove(array=array , element=task.innerHTML)
                location.reload()
            }
        )
    }

)



