const tooltips = document.querySelectorAll(".tooltip");
          const output = document.querySelector(".output");
          let myInterval;
          for (let i = 0; i < tooltips.length; i++) {
              tooltips[i].addEventListener("mouseover", function (e) {
                  let holder = this.getAttribute("data-toolContent");
                  clearInterval(myInterval);
                  console.log(e.clientX);
                  console.log(e.clientY);
                  output.style.display = "block";
                  output.style.top = e.clientY + 5 + "px";
                  output.style.left = e.clientX + 5 + "px";
                  output.innerHTML = holder;
                  myInterval = setInterval(function () {
                      output.style.display = "none";
                  }, 3000);
              })
              tooltips[i].addEventListener("mouseout", function (e) {
                  output.style.display = "none";
              })
          }