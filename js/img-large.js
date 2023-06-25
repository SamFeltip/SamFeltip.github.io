let large_image_wrappers = document.querySelectorAll(".img-large-wrapper");

large_image_wrappers.forEach(img_wrapper => {
    img_wrapper.addEventListener("click", () => {
        img_wrapper.classList.toggle("focus");
    })

})

// on escape, remove focus from every img_wrapper element
document.body.onkeyup = (e) => {
    if (e.key === "Escape") {
        large_image_wrappers.forEach(img_wrapper => {
            img_wrapper.classList.remove("focus");
        })
    }

}

