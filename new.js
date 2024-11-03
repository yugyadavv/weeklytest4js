document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('searchbtn').addEventListener('click', function() {
        const searchText = document.getElementById('searchField').value;
        fetchPhones(searchText);
    });
    document.getElementById('prev-btn').addEventListener('click', showPreviousPhones);
    document.getElementById('next-btn').addEventListener('click', showNextPhones);
    document.getElementById('show-all').addEventListener('click', showAllPhones);

    fetchAllPhones();
});
let mymodel = document.getElementById('my_modal');
let closebtn = document.getElementById('close');
closebtn.addEventListener('click', hideModal);

let currentPage = 0;
const pageSize = 8; 
let allPhones = [];

async function fetchAllPhones() {
    const categories = ['samsung', 'iphone', 'oppo'];
    let allFetchedPhones = [];
    
    for (let category of categories) {
        const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${category}`);
        const data = await response.json();
        allFetchedPhones = allFetchedPhones.concat(data.data);
    }
    
    allFetchedPhones = shuffleArray(allFetchedPhones);
    localStorage.setItem('defaultPhones', JSON.stringify(allFetchedPhones));
    allPhones = allFetchedPhones; 
    displayPhones(getPhonesForCurrentPage());
}

async function fetchPhones(searchText) {
    const response = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await response.json();
    allPhones = data.data; 
    currentPage = 0; 
    displayPhones(getPhonesForCurrentPage());
}

function displayPhones(phones) {
    const cardsSection = document.getElementById('cards-section');
    cardsSection.innerHTML = '';

    if (phones.length === 0) {
        cardsSection.innerHTML = '<p>No phones found.</p>';
        return;
    }

    phones.forEach(phone => {
        const card = document.createElement('div');
        card.classList.add('card');

        const phoneImage = phone.image || 'https://via.placeholder.com/150';
        card.innerHTML = `
            <img src="${phoneImage}" alt="${phone.phone_name}">
            <div class="card-body">
                <h2 class="card-title">${phone.phone_name}</h2>
                <p>There are many variations of passages of available, but the majority have suffered</p>
                <div class="card-actions">
                    <button class="btn btn-primary text-white" onclick="showDetailsHandler('${phone.slug}')">Show Details</button>
                </div>
            </div>
        `;

        cardsSection.appendChild(card);
    });
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

async function showDetailsHandler(phoneSlug) {
    const res = await fetch(`https://openapi.programming-hero.com/api/phone/${phoneSlug}`);
    const data = await res.json();

    const phone = data.data;
    showPhoneDetails(phone);
}

const showPhoneDetails = (details) => {
    const modelName = document.getElementById('detailsPhoneName');
    const brandName = document.getElementById('detailsBrand');
    const detailsSpec = document.getElementById('detailsSpec');
    const releaseDate = document.getElementById('releaseDate');
    const imageDiv = document.getElementById('imgContainer');

    imageDiv.innerHTML = `<img src="${details.image}" alt="">`;
    modelName.innerText = details.name;
    brandName.innerText = `Brand: ${details.brand}`;
    const features = details.mainFeatures;
    let string = "";
    for (const key in features) {
        string = string + `${key}: ${features[key]} \n`;
    }
    detailsSpec.innerText = string;
    mymodel.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function hideModal() {
    mymodel.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Pagination functions
function getPhonesForCurrentPage() {
    const start = currentPage * pageSize;
    const end = start + pageSize;
    return allPhones.slice(start, end);
}

function showPreviousPhones() {
    if (currentPage > 0) {
        currentPage--;
        displayPhones(getPhonesForCurrentPage());
    } else {
        alert("You are already at the first page.");
    }
}

function showNextPhones() {
    if ((currentPage + 1) * pageSize < allPhones.length) {
        currentPage++;
        displayPhones(getPhonesForCurrentPage());
    } else {
        alert("No more data available.");
    }
}

function showAllPhones() {
    currentPage = 0;
    displayPhones(allPhones);
}
