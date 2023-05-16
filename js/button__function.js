{
    const backgroundToogle = () => {
        const body = document.querySelector(".body--background");
        const text = document.querySelector(".js-buttonText");
        body.classList.toggle("body--white");
        if (body.classList.contains("body--white")) {
            text.innerText = "Włącz";
        } else {
            text.innerText = "Wyłącz";
        }
    };

    const init = () => {
        const button = document.querySelector(".js-button");
        button.addEventListener ("click", backgroundToogle);
    };

    init();
} 
