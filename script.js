const scroll = new LocomotiveScroll ({
    el: document.querySelector('#main'),
    smooth : true,
})


const elementC = document.querySelector('.elem-container');
const fixed = document.querySelector('.fixed-image');
const elements = document.querySelectorAll('.elem');




elementC.addEventListener('mouseenter',function(){
    fixed.style.display = 'block'
})
elementC.addEventListener('mouseleave',function(){
    fixed.style.display = 'none'
})



elements.forEach(function(e){
    e.addEventListener('mouseenter',function(){
        let image = e.getAttribute('data-image')
        fixed.style.backgroundImage = `url(${image})`
    })
    
})

fixed.addEventListener('mouseenter',function(){
    fixed.style.display = 'block'
    fixed.style.cursor = 'pointer'
})
fixed.addEventListener('mouseleave',function(){
    fixed.style.display = 'none'
  
});

