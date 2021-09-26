// Function for click event on image
(()=>{
  const images = document.querySelectorAll('.panel');
  let imgArr = [];

  images.forEach((image) =>{
    imgArr.push(image);
    image.addEventListener('click', (e)=>{
      if(e.target.classList.contains('active') === false){
        swapClasses(image);
      } 
    });
  });

function swapClasses(target){
  imgArr.forEach((img)=>{
    img.classList.remove('active');
  });
    target.classList.add('active');
}
})();