(function () {  /* product page image picker */
    if (window.template === "product") {
        
        const arrImg = document.querySelectorAll('.product-big-picture div');
        
        function select() 
        {
            let nextImg = `product-big-image-${this.id.replace(/[^0-9]/g,'')}`;

            arrImg.forEach(img => {
                img.classList.toggle('hide', img.id !== nextImg);
            });
        }

        document.querySelectorAll('.product-small-img-container').forEach(element => {
            element.addEventListener('click', select);
        });
    }
})();

/* (function () {
    if (window.template === "product") {


        function toggleMenu() {
            document.getElementById('size-dropdown').classList.toggle('hide');
            document.querySelector('.fa-angle-right').classList.toggle('rotate-180');
        }

        function pickOption() {
            document.querySelector('.size-button').innerHTML = this.innerHTML + " <i class=\"fas fa-angle-right size-arrow\"></i>";
            document.getElementById('size-dropdown').classList.toggle('hide');
        }

        document.querySelector('.size-button').addEventListener('click', toggleMenu);

        document.querySelectorAll('.product-size').forEach(element => {
            element.addEventListener('click', pickOption);
        });
    }   
})(); */