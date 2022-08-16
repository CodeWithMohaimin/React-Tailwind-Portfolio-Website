const postBtn = document.getElementById('post_btn');
const container = document.getElementById('posts');

const URL = 'https://jsonplaceholder.typicode.com/posts'

postBtn.addEventListener('click', function () {
    fetch(URL)
        .then(response => response.json())
        .then(data => {
        
            data.forEach((posts, index) => {
                let li = createLi(posts.title, index + 1)
                container.appendChild(li)
            })
    })
})

function createLi(posts, ind) {
    let li = document.createElement('li')
    li.innerHTML = `${ind}. ${posts}`
    li.style.border = '1px solid #444'
    li.style.padding = '20px'
    li.style.margin = '20px'
    return li
}