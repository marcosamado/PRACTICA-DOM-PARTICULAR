const container = document.querySelector(".container");
        // const btnDisminuir = document.querySelector(".btn-danger");
        // const btnAumentar = document.querySelector(".btn-info");
        // const btnPorDiez = document.querySelector(".btn-dark");
        const contador = document.getElementById("contador");
        const contador2 = document.getElementById("contador2");
        const contadorFinal = document.getElementById("contadorFinal");
        let sumador = 0;
        let sumador2 = 0;
        
        //************ EVENT LISTENER 
        
        // btnAumentar.addEventListener("click", () => {
        //     sumador++;
        //     contador.textContent = sumador;
        // });
        // btnDisminuir.addEventListener("click", () => {
        //     if(parseInt(contador.textContent) > 0){
        //     sumador--;
        //     contador.textContent = sumador;
        //     }
        // });
        // btnPorDiez.addEventListener("click", () => {
        //     sumador += 10;
        //     contador.textContent = sumador;
        // });
        
        //*************** Event DELEGATION

        container.addEventListener("click", (e) => {
            if(e.target.classList.contains("btn-info")){
                sumador ++;
                contador.textContent = sumador;
            };
            if(e.target.classList.contains("btn-danger") && contador.textContent > 0){
                sumador --;
                contador.textContent = sumador;
            };
            if(e.target.classList.contains("btn-dark")){
                sumador += 10;
                contador.textContent = sumador;
            };
            if(e.target.classList.contains("btn-success")){
                sumador2 ++;
                contador2.textContent = sumador2;
            };
            if(e.target.classList.contains("btn-secondary") && contador2.textContent > 0){
                sumador2 --;
                contador2.textContent = sumador2;
            };
            contadorFinal.textContent = sumador + sumador2;
            if(e.target.classList.contains("btn-primary")){
                contador.textContent = 0;
                contador2.textContent = 0;
                contadorFinal.textContent = 0;
                sumador = 0;
                sumador2 = 0;
            }
        });

