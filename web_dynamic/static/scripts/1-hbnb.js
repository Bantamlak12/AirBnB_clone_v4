$(document).ready(function () {
  const checkedBox = {};

  $('input[type="checkbox"]').change(function () {
    const amenityId = $(this).data('id');

    if ($(this).is(':checked')) {
      checkedBox[amenityId] = $(this).data('name');
    } else {
      delete checkedBox[amenityId];
    }
    $('.amenities h4').text(Object.values(checkedBox).join(', '));
  });
});
