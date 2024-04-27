document.addEventListener("DOMContentLoaded", function () {
    const umbrellaImage = document.getElementById("umbrella-image");
    const logoContainer = document.getElementById("logo-container");
    const logoUpload = document.getElementById("logo-upload");
    const colorButtons = document.querySelectorAll(".color-btn");
    const loader = document.createElement("img");
    loader.src = "./icons/loader_icon.svg";
    loader.style.width = "50px";
    loader.style.height = "50px";
    loader.style.display = "none";
    function changeUmbrellaColorWithDelay(color) {
        loader.style.display = "block";
        setTimeout(() => {
            changeUmbrellaColor(color);
            loader.style.display = "none";
        }, 1500);
    }
    function handleLogoUploadWithDelay(file) {
        loader.style.display = "block";
        setTimeout(() => {
            handleLogoUpload(file);
            loader.style.display = "none";
        }, 3000);
    }
    function changeUmbrellaColor(color) {
        umbrellaImage.src = `./umbrella images/umbrella-${color}.png`;
    }
    function handleLogoUpload(file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            const logoImg = document.createElement("img");
            logoImg.src = e.target.result;
            logoImg.style.maxWidth = "100%";
            logoContainer.innerHTML = "";
            logoContainer.appendChild(logoImg);
        }

        if (file) {
            reader.readAsDataURL(file);
        }
    }
    colorButtons.forEach(button => {
        button.addEventListener("click", function () {
            const color = this.dataset.color;
            changeUmbrellaColorWithDelay(color);
        });
    });
    logoUpload.addEventListener("change", function () {
        const file = this.files[0];
        handleLogoUploadWithDelay(file);
    });
    document.body.appendChild(loader);
});
