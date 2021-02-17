$(document).ready(() => {
  // Dodavanje proizvoda
  $('#add-product').click(() => {
    const product = $('#product-input').val();
    if (!product) return;

    // Dodavanje elementa ako ga nema
    const bottom = $('.products-bottom');
    if (!bottom.children().length) {
      bottom.append('<div class="products-functions"><div class="product-counter"></div><a id="remove-all" href="#">Remove all products</a></div><ul id="products"></ul>');
    }

    const productsList = $('#products');

    // Dodavanje proizvoda u listu
     productsList.append(`<li>${product}</li>`);

    // Promjena countera
    $('.product-counter').html(`Number of products: <span class='counter-number'>${productsList.children().length}</span>`);
  });

    // Brisanje liste
    const bottom = $('.products-bottom');
    bottom.on('click', '#remove-all', () => {
      if (window.confirm('Are you sure that you want to remove all products?')) bottom.empty();
    });
});