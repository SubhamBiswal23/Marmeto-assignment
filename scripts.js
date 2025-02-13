document.querySelectorAll('.thumbnails img').forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        document.querySelector('.product-image img').src = this.src;
    });
});

document.querySelectorAll('.color-options div').forEach(color => {
    color.addEventListener('click', function() {
        document.querySelector('.product-image img').style.borderColor = this.style.backgroundColor;
    });
});
