 $(document).ready(function () {

 	$('#divhome').show();
    $('#divteam').hide();

$('#buttonteam').on('click', function() {
          $('#divhome').hide();
          $('#divteam').show();
         
        });

$('#buttonhome').on('click', function() {
          $('#divhome').show();
          $('#divteam').hide();
         
        });


 });