
const clearAll = document.querySelector('.clearAll');

const API_URL = 'http://localhost:3000/api/v1/db/tasks/';

const create = document.querySelector('.create-new');



const container = document.querySelector('.container');
getData();
async function getData(){
    let data = await fetch(API_URL,{
        method: 'GET',
        headers :{
            "Content-Type": "application/json"
        }
    });
    let x = await data.json();
    console.log(x);
    x.forEach(element => {
        create.insertAdjacentHTML("beforebegin",
        `<div class="task">
        <div class="task-content">${element.content}</div>
        <div style="display:flex">
            <div class="update" onclick = flipFlag("${element._id}")><input type="checkbox"></div>
            <div class="delete" onclick = delId("${element._id}")>🗑️</div>
        </div>
        </div>
        `

        );

    });
   
}

async function flipFlag(x){
    try{
        await fetch((API_URL+x),{
        method: 'PATCH',
        headers :{
            "Content-Type": "application/json",
        },
        // body: JSON.stringify({
        //     completed: true
        // })
    });
    }
    catch(err){
        console.log(err.message);
    }
    window.location.reload();
}
async function  delId(x) {
    try{
        await fetch((API_URL+x),{
        method: 'DELETE',
        headers :{
            "Content-Type": "application/json"
        }
    });
    }
    catch(err){
        console.log(err.message);
    }
    window.location.reload();
}

createPrompt = ()=>{
    container.removeChild(create);
    container.removeChild(clearAll);
    console.log("hey there what's the problem")
    htmlCode = `<div class="task">
    <div class="task-content"><textarea type="text" class="new_task"></textarea></div>
    <div class="save"><a href="#">💾</a></div>
</div>`
    container.insertAdjacentHTML("beforeend",htmlCode);
    const save = document.querySelector('.save');
    save.addEventListener('click',createNew);
}

const createNew = async ()=>{
    try{
        const data = {
            "message": "hello world",
            "content": document.querySelector('.new_task').value
        }
        console.log(data);
        await fetch(API_URL,{
            method: "POST",
            headers :{
                "Content-Type": "application/json"
            },
            body : JSON.stringify(data)
        })
        console.log("saved to db");
    }
    catch(err){
        console.log(err.message);
    }
    //trigger reload
    window.location.reload();
};


clearAll.addEventListener('click',async ()=>{
    try{
        await fetch(API_URL,{
        method: 'DELETE',
        headers :{
            "Content-Type": "application/json"
        }
    });
    }
    catch(err){
        console.log(err.message);
    }
    window.location.reload();
    
});


create.addEventListener('click',createPrompt);