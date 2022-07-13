////Task1

// let slidephoto = [
//     'photo/sekil1.png',
//     'photo/sekil2.jpg',
//     'photo/sekil3.jpeg',
//     'photo/nem1.png'
//  ]
//  let img = document.querySelector('#slider img')
//  img.src = slidephoto[0]
//  let slide = 0
//  let dot1 = document.getElementById('1')
//  let dot2  = document.getElementById('2')
//  let dot3  = document.getElementById('3')
//  let dot4  = document.getElementById('4')
//  dot1.addEventListener('click',() =>{
//     img.src = slidephoto[0]
//  })
//  dot2.addEventListener('click',() =>{
//     img.src = slidephoto[1]
//  })
//  dot3.addEventListener('click',() =>{
//     img.src = slidephoto[2]
//  })
//  dot4.addEventListener('click',() =>{
//     img.src = slidephoto[3]
//  })

 


/// task2





let Droparea = document.querySelector('#Droparea')
let Dragitem = document.querySelectorAll('#Dragarea .box')

Droparea.addEventListener('dragover',function(e){
   e.preventDefault()
   this.style.border = ' 3px dashed red'
})
Droparea.addEventListener('dragleave',function(e){
   e.preventDefault()
   this.style.border = ' 3px solid red'
})
for(let i =0; i<Dragitem.length; i++){
   Dragitem[i].addEventListener('dragstart',function(e){
      e.dataTransfer.setData('param',this.id)
   })
}
Droparea.addEventListener('drop',function(e){
   let index = e.dataTransfer.getData('param')
   let div = document.getElementById(index)
   Droparea.appendChild(div)
})
if(Droparea.getAttribute('div') === 0){
   alert('bosdu')
}
 