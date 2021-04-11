// 1. When we click the image, show the lightbox
// 2. Grab the image that has just been clicked, and show it inside the modal
// 3. When we click the close button, hide the modal
// 4. Our link doesn't follow the default href

$('.photos a').on('click', function() {
  let currentImage = $(this).html()
  // We grab the modal and manually set to current image
  // that user just clicked on
  $('.modal-content').html(currentImage)
  $('.modal').fadeIn(500)
  // By returning false, it blocks the default action of
  // following the href attribute
  return false
})

$('.modal-close, .modal-background').on('click', function() {
  $('.modal').fadeOut(500)
  return false
})
