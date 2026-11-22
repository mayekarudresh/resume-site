const currentYear = document.querySelector("[data-current-year]");

if (currentYear) {
    currentYear.textContent = String(new Date().getFullYear());
}

const printButton = document.querySelector("[data-print-resume]");
const printableContent = document.querySelector("main");

if (printButton && printableContent) {
    printButton.addEventListener("click", () => {
        printableContent.classList.add("print-only");
        printableContent.querySelectorAll("*").forEach((element) => {
            element.classList.add("print-only");
        });
        window.print();
    });

    window.addEventListener("afterprint", () => {
        printableContent.classList.remove("print-only");
        printableContent.querySelectorAll(".print-only").forEach((element) => {
            element.classList.remove("print-only");
        });
    });
}
