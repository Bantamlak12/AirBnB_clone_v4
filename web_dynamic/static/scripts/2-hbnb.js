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

  $.ajax({
    url: 'http://0.0.0.0:5001/api/v1/status/',
    method: 'GET',
    dataType: 'json',
    success: function (response) {
      if (response.status === 'OK') {
        $('div#api_status').addClass('available');
      } else {
        $('div#api_status').removeClass('available');
      }
    },
    error: function (error) {
      console.log(error);
    }
  });
});
