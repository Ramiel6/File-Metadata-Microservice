//https://robots.thoughtbot.com/ridiculously-simple-ajax-uploads-with-formdata

$(document).ready(function(){
  var xhr = new XMLHttpRequest();
  var fileInput = document.getElementById('theFile');
  var file = fileInput.files[0];
  var formData = new FormData();
  formData.append('file', file);
  //https://codepen.io/CSWApps/pen/GKtvH
  $(document).on('change', ':file', function(){
    var fileName = $(this).val().replace(/C:\\fakepath\\/i, '');
    //console.log(fileName);
    $('.form-control').val(fileName);
  });
  $("#submit").click(function(){
    // $.ajax({
    // url: '/upload',
    // data: formData,
    // type: 'POST',
    // contentType: false, // NEEDED, DON'T OMIT THIS (requires jQuery 1.6+)
    // processData: false, // NEEDED, DON'T OMIT THIS
    // // ... Other options like success and etc
    // });
      // Add any event handlers here...
      xhr.open('POST', '/upload', true);
      xhr.send(formData);
      xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
              // // let data = JSON.parse(this.responseText);
              // $('.fileSize').text('File Size: ' + data.size + 'byte');
              $('.fileSize').text(this.responseText);
              // console.log(data.size)  
            };
        };
  });
  
});
