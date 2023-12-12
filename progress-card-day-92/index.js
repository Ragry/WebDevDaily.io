function progress() {
    const div7 = document.getElementById("div7");
    div7.classList.remove("bg-[#4DF1C1]");
    div7.classList.add("bg-[#11152F]");

    const div8 = document.getElementById("div8");
    div8.classList.remove("bg-[#4DF1C1]");
    div8.classList.add("bg-[#11152F]");

    const div9 = document.getElementById("div9");
    div9.classList.remove("bg-[#4DF1C1]");
    div9.classList.add("bg-[#11152F]");

    setTimeout(() => {
        div7.classList.remove("bg-[#11152F]");
        div7.classList.add("bg-[#4DF1C1]");

    }, 500);

    setTimeout(() => {
        div8.classList.remove("bg-[#11152F]");
        div8.classList.add("bg-[#4DF1C1]");
    }, 1000);

    setTimeout(() => {
        div9.classList.remove("bg-[#11152F]");
        div9.classList.add("bg-[#4DF1C1]");

    }, 1500);
}

window.addEventListener("load", () => {
    progress();
    setInterval(() => progress(), 2500);
});