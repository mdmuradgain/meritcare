let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    slides[index].classList.add('active');
}

function nextSlide() {
    slideIndex = (slideIndex + 1) % slides.length;
    showSlide(slideIndex);
}

setInterval(nextSlide, 3000); // Slide changes every 3 seconds

// Language Switcher Toggle
const languageSwitch = document.getElementById('language-switch');
languageSwitch.addEventListener('click', function () {
    if (languageSwitch.classList.contains('off')) {
        languageSwitch.classList.remove('off');
        languageSwitch.classList.add('on');
        languageSwitch.textContent = 'English';
    } else {
        languageSwitch.classList.remove('on');
        languageSwitch.classList.add('off');
        languageSwitch.textContent = 'বাংলা';
    }
});

// Back to top button
const backToTopButton = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
    if (window.pageYOffset > 300) {
        backToTopButton.classList.add('show');
    } else {
        backToTopButton.classList.remove('show');
    }
});

backToTopButton.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});


const books = document.querySelector('.books');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');
let scrollAmount = 0;

nextBtn.addEventListener('click', () => {
    books.scrollBy({
        top: 0,
        left: 300,
        behavior: 'smooth'
    });
});

prevBtn.addEventListener('click', () => {
    books.scrollBy({
        top: 0,
        left: -300,
        behavior: 'smooth'
    });
});



let currentPage = 1;
const rowsPerPage = 10;

function displayTablePage(page) {
    const table = document.getElementById('branchesTable').getElementsByTagName('tbody')[0];
    const rows = table.getElementsByTagName('tr');
    const totalRows = rows.length;
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    for (let i = 0; i < totalRows; i++) {
        rows[i].style.display = (i >= start && i < end) ? '' : 'none';
    }

    document.getElementById('prevBtn').disabled = page === 1;
    document.getElementById('nextBtn').disabled = end >= totalRows;
}

function nextPage() {
    currentPage++;
    displayTablePage(currentPage);
}

function prevPage() {
    currentPage--;
    displayTablePage(currentPage);
}

function searchTable() {
    const input = document.getElementById('searchBox').value.toLowerCase();
    const table = document.getElementById('branchesTable').getElementsByTagName('tbody')[0];
    const rows = table.getElementsByTagName('tr');

    let visibleRows = 0;

    for (let i = 0; i < rows.length; i++) {
        const cells = rows[i].getElementsByTagName('td');
        let match = false;

        for (let j = 0; j < cells.length - 1; j++) { // Exclude the last column (Action)
            if (cells[j].innerText.toLowerCase().includes(input)) {
                match = true;
                break;
            }
        }

        if (match) {
            rows[i].style.display = '';
            visibleRows++;
        } else {
            rows[i].style.display = 'none';
        }
    }

    // If there are fewer than rowsPerPage visible rows, disable pagination buttons
    document.getElementById('prevBtn').disabled = visibleRows <= rowsPerPage;
    document.getElementById('nextBtn').disabled = visibleRows <= rowsPerPage;
}

window.onload = function() {
    displayTablePage(currentPage);
};

