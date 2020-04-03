const container = document.getElementById("container");
const numberOfPostsToFetch = 4;
let pageNumber = 1;

async function getPosts() {
     let res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=${numberOfPostsToFetch}&_page=${pageNumber}`);
     let data = await res.json();
     console.log(res);
     console.log(data);
     return data;
}

async function showPosts() {
    let posts = await getPosts();

    posts.forEach(post => {
        const element = document.createElement("div");
        element.classList.add("post");
        element.innerHTML = `<h2>${post.title}</h2><p>${post.body}</p>`
    
        container.appendChild(element);
    });
    pageNumber++;
}

showPosts();