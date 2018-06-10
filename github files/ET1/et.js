let title = document.querySelector("#title");
        let bgwoods = document.querySelector("#bgwoods");
        let bgwoods1 = document.querySelector(".bgwoods1");
        let guyet = document.querySelector(".guyet");
        let guyet1 = document.querySelector(".guyet1");
        let guyet2cliff = document.querySelector(".guyet2cliff");
        let title1 = document.querySelector(".title1");
        let closeupi = document.querySelector(".closeupi");
        let light = document.querySelector("#light");
        let arethepolice = document.querySelector("#guystalking");
        let car = document.querySelector(".car");
        let cliff = document.querySelector(".cliff");
        let trees = document.querySelector(".trees");
        let car1 = document.querySelector(".car1");
        let et = document.querySelector(".et");
        let fingeroff = document.querySelector(".fingeroff");
        let fingeron = document.querySelector(".fingeron");
        let guyet3cliff = document.querySelector(".guyet3cliff");
        let guy4cliff = document.querySelector(".guy4cliff");
        let guy5cliff = document.querySelector(".guy5cliff");
        let carcliff = document.querySelector(".carcliff");
        let bike = document.querySelector("#bike");
        let scene = document.querySelector("#scene");
        let fuck = document.querySelector("#fuck");
        let nights = document.querySelector("#nights");
        let police = document.querySelector("#police");
        let love = document.querySelector("#love");
        let woho = document.querySelector("#woho");
        let ohno = document.querySelector("#ohno");
        let ouch = document.querySelector("#ouch");
        let wahoo = document.querySelector("#wahoo");
        let glow = document.querySelector("#glow");



        title.addEventListener("click", disa);


        function disa() {
            title.classList.toggle("disa");
            title.classList.add("title1");
            title.addEventListener("animationend", removetitle);

        }

        function removetitle() {
            title.remove();

            guyet.addEventListener("click", fading);
        }



        function fading() {
            bgwoods.classList.add("fadeoutBackground");
            bgwoods.addEventListener("animationend", fadeInBac);
        }

        function fadeInBac() {
            bgwoods.removeEventListener("animationend", fadeInBac);
            guyet.remove();
            light.remove();
            arethepolice.play();
            arethepolice.onended =
                function displaywoods() {
                    bgwoods1.style.display = "block";
                    fuck.play();
                    police.play();
                    guyet1.style.display = "block";
                    car.style.display = "block";
                }
            bgwoods.classList.add("closeupi");
            //closeupi.classList.add("fadeinBackground");




        }
        car.addEventListener("click", changeCliff);

        function changeCliff() {
            car.classList.toggle("changeCliff");
            bgwoods1.remove();
            cliff.style.display = "block";
            car.remove();
            guyet1.remove();
            guyet2cliff.style.display = "block";
            car1.style.display = "block";
            trees.style.display = "block";
            guyet2cliff.addEventListener("click", comeEt);
        }


        function comeEt() {
            cliff.style.display = "none";
            guyet2cliff.remove();
            et.style.display = "block";
            car1.style.display = "none";
            fingeroff.style.display = "block";
            fingeroff.addEventListener("click", finger);
        }

        function finger() {
            car1.style.display = "none";
            guyet2cliff.style.display = "none";
            fingeroff.style.display = "none";
            glow.play();
            fingeron.style.display = "block";
            fingeron.addEventListener("click", cliffback);
        }

        function cliffback() {
            et.remove();
            fingeron.remove();
            cliff.style.display = "block";
            guyet3cliff.style.display = "block";
            guy4cliff.style.display = "block";
            guy5cliff.style.display = "block";
            carcliff.style.display = "block";
        }

        guyet3cliff.addEventListener("click", etmoveTo30);

        function etmoveTo30() {
            guyet3cliff.classList.toggle("etmoveTo30");
            guyet3cliff.addEventListener("click", fly);
            wahoo.play();
        }

        guy4cliff.addEventListener("click", fall1);

        function fall1() {
            guy4cliff.classList.toggle("fall1");
            ouch.play();
        }

        guy5cliff.addEventListener("click", fall2);

        function fall2() {
            guy5cliff.classList.toggle("fall2");
            ohno.play();
        }

        function fly() {

            cliff.remove();
            guyet3cliff.remove();
            guy4cliff.remove();
            guy5cliff.remove();
            love.play();
            woho.play();
            scene.style.display = "block";
            bike.style.display = "block";
        }