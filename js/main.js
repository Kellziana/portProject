// Rotating text effect
let loopNum = 0;
let isDeleting = false;
const toRotate = ["Drawings", "Animations", "3D Models"];
let text = "";
const period = 2000;
const delta = 300;
const rotatingText = document.getElementById('rotating-text');

function tick() {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];

    text = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    rotatingText.textContent = text;

    if (!isDeleting && text === fullText) {
        setTimeout(() => {
            isDeleting = true;
        }, period);
    } else if (isDeleting && text === "") {
        isDeleting = false;
        loopNum++;
    }

    setTimeout(tick, isDeleting ? delta / 2 : delta);
}

tick();


// Gallery filtering logic
function filterGallery(category) {
    const galleryItems = document.querySelectorAll('.gallery-item');
    const buttons = document.querySelectorAll('.filter-btn');

    // Remove active class from buttons
    buttons.forEach(btn => btn.classList.remove('active'));

    // Add active class to the clicked button
    document.querySelector(`button[onclick="filterGallery('${category}')"]`).classList.add('active');

    galleryItems.forEach(item => {
        item.style.display = 'none'; // Hide all items by default
        // Show items that match the selected category or show all if 'All Work' is selected
        if (category === 'All Work' || item.classList.contains(category.toLowerCase().replace(' ', '-'))) {
            item.style.display = 'block';
        }
    });


}

document.querySelector('.navbar').addEventListener('click', function() {
    this.classList.toggle('show-menu');
});
