const navbarMenu = document.querySelector('.menu');

navbarMenu.addEventListener('click',(e)=>{
  const target = e.target;
  const link = target.dataset.link;
  console.log(link);
  if(link == null){
    return;
  }
  const scrollTo = document.querySelector(link);
  scrollTo.scrollIntoView({behavior: "smooth", block:"end", inline:"nearest"});
});

