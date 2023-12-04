document.addEventListener('DOMContentLoaded', function() {
    const adoptedCatsContainer = document.getElementById('adopted-cats');
    const addCatForm = document.getElementById('add-cat-form');

    const adoptedCats = [
        { name: 'Ralla', description: 'Un lindo michi con manchas', image: 'img/images (2).jpg', requested: true },
        { name: 'mota', description: 'Michi peludo y juguetón', image: 'img/images.jpg' },
        { name: 'lau', description: 'Michi peludo y juguetón', image: 'img/descarga.jpg' },
        { name: 'luna', description: 'Michi peludo y juguetón', image: 'img/yanis1-1.jpg' },
        { name: 'koni', description: 'Michi peludo y juguetón', image: 'img/o1.jpg' },
        { name: 'hitler', description: 'Michi peludo y juguetón', image: 'img/hitler.jpg' },
      
    ];

    function displayAdoptedCats() {
        adoptedCatsContainer.innerHTML = '';
        adoptedCats.forEach((cat, index) => {
            const catDiv = document.createElement('div');
            catDiv.classList.add('adopted-cat');
            catDiv.innerHTML = `
                <h3>${cat.name}</h3>
                <img src="${cat.image}" alt="${cat.name}">
                <p>${cat.description}</p>
                ${index === 0 && cat.requested ? '<div class="overlay-text">Michi Solicitado</div>' : ''}`;
            adoptedCatsContainer.appendChild(catDiv);
        });
    }

    function handleImageUpload(file) {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = (event) => {
                resolve(event.target.result);
            };
            reader.readAsDataURL(file);
        });
    }

    addCatForm.addEventListener('submit', async function(event) {
        event.preventDefault();

        const catName = document.getElementById('cat-name').value;
        const catDescription = document.getElementById('cat-description').value;
        const catImage = document.getElementById('cat-image').files[0];

        if (catName && catDescription && catImage) {
            const imageURL = await handleImageUpload(catImage);

            adoptedCats.push({ name: catName, description: catDescription, image: imageURL });
            displayAdoptedCats();
            addCatForm.reset();
        }
    });

    displayAdoptedCats();
});