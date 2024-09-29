
const search = document.querySelector('.search');
const btn = document.querySelector('.btn');
const gallery = document.querySelector('.gallery');
const countsElement = document.querySelector('.counts');
let url = `https://api.unsplash.com/search/photos?query=today&per_page=9&extras=url_m&orientation=landscape&page=1&client_id=Gq6AQ4Pwix_Y3jCuQzswghYMFsQdQKCxKTpc2Wx5bBM`;

async function getData() {
    
    try {
        const res = await fetch(url);
        const data = await res.json();
        console.log(data);
        createItems(data);
    } catch (error) {
        console.log(error);
    }

    countsElement.value = '';
}

btn.addEventListener('click', function (event) {
    event.preventDefault();
    count = 9;
    if (countsElement.value != '') {
        count = countsElement.value;
    }
    url = `https://api.unsplash.com/search/photos?query=${search.value}&per_page=${count}&extras=url_m&orientation=landscape&page=1&client_id=Gq6AQ4Pwix_Y3jCuQzswghYMFsQdQKCxKTpc2Wx5bBM`;
    getData();
})

function createItems(data) {
    
    gallery.innerHTML = '';
    
    data.results.map(function(item, index, array){
        const a = document.createElement('a');

        const img = document.createElement("img");
        // img.classList.add("gallery-img");
        img.src = item.urls.regular;;
        img.alt = item.description;
        a.append(img);

        gallery.append(a);
    })
};

getData();