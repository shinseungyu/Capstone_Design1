document.addEventListener('DOMContentLoaded', function () {
  // section4 부분 
  const box = document.querySelectorAll(`.box`);

    for (const boxSelect of box){
        boxSelect.addEventListener(`click`, function () { 
            this.classList.add(`on`);

            for (const siblings of box){
                if (siblings !== this) {
                    siblings.classList.remove(`on`);
              
                }
            }
        });
    }
  // aos 링크연결
  AOS.init();

  // swiper
  var swiper = new Swiper(".mySwiper", {
    pagination: {
      el: ".swiper-pagination",
    },
  });

});