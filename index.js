const form = document.querySelector("#form-id")
const colourContainer = document.querySelector("#colour-container")



   form.addEventListener("submit", (e) => {
     e.preventDefault();
     const colourPicker = document.querySelector("#colour-picker");
     const colourId = document.querySelector("#colour-id");
     let colourValue = colourPicker.value;
     let colourSelection = colourId.value;
    

     fetch(`https://www.thecolorapi.com/scheme?hex=${colourValue.slice(1)}&mode=${colourSelection}`)
       .then((response) => response.json())
       .then((data) => {
         console.log(data);

         
         const colourArray = data.colors
           .map((colours) => {
            console.log(colours.rgb)
             return `
                <div class="container">
                   <div class="colour-column" style="background:${colours.rgb.value} "></div>
                   <p class="hex-char">${colours.hex.value}</p>
                </div> 
           
             `;
           })
           .join("");
         colourContainer.innerHTML = colourArray;
       });
   });