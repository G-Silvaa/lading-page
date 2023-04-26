const menuItem = document.querySelectorAll('ul li a')
const boxItem = document.querySelectorAll('.box1')



function selectL(){
    menuItem.forEach((item)=>
    item.classList.remove('cor')
    )
    this.classList.add('cor')
}

menuItem.forEach((item)=>
item.addEventListener('click', selectL))


function selectB(){
    boxItem.forEach((item)=>
    item.classList.remove('colorBox')
    )
    this.classList.add('colorBox')
}

boxItem.forEach((item)=>
item.addEventListener('click', selectB)
)
