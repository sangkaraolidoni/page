function MDM() {
    var element = document.body;
    element.classList.toggle("dark-mode");
  }
  
  window.onscroll = function() {MH()};
      
      var header = document.getElementById("MH");
      var sticky = header.offsetTop;
      
      function MH() {
        if (window.pageYOffset > sticky) {
          header.classList.add("sticky");
        } else {
          header.classList.remove("sticky");
        }
      }

      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });