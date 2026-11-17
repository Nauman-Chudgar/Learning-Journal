import { blogPost } from "../Data/data.js";

const main = document.getElementById("main")
const view = document.getElementById("view")

document.addEventListener("click", (e) => {
    if(e.target.dataset.id) {
        view.style.display = "none"
        main.innerHTML += render(blogPost)
    }
})

function render(posts) {
    let renderPost = posts.map((post) => {
        return `
            <section class="blog">
                <img src="${post.img}" class="section-img">
                <h6>${post.date}</h6>
                <h3>${post.title}</h3>
                <p>${post.content}</p>
            </section>`
    }).join(" ")

    return renderPost
}