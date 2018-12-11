let jqueryErr = function(jqXHR, exception) {
        let msg = '';
        if (jqXHR.status === 0) {
            msg = 'Not connect.\n Verify Network.';
        } else if (jqXHR.status === 404) {
            msg = 'Requested page not found. [404]';
        } else if (jqXHR.status === 500) {
            msg = 'Internal Server Error [500].';
        } else if (exception === 'parsererror') {
            msg = 'Requested JSON parse failed.';
        } else if (exception === 'timeout') {
            msg = 'Time out error.';
        } else if (exception === 'abort') {
            msg = 'Ajax request aborted.';
        } else {
            msg = 'Uncaught Error.\n' + jqXHR.responseText;
        }
        swal("Error", msg, "error");
    };

    let submit = function(formID)
    {
      let formSubmit = $("form#"+formID);
      formSubmit.submit(function(e) {
      e.preventDefault();
          console.log("Form Submitted.");
      $.ajax(
          {
              url: '/contact',
              dataType: 'json',
              cache: false,
              processData: false,
              data: formSubmit.serialize(),
              type: 'post',
              success: function (response) {
                  console.log(response);
                  grecaptcha.reset();
                  if (response.code === 200) {
                      swal(response.title, response.msg, "success");
                      formSubmit[0].reset()
                  }
                  else {
                      swal(response.title, response.msg, "error");
                  }
              },
              error: function (jqXHR, exception) {
                  jqueryErr(jqXHR, exception);
                  grecaptcha.reset();
              }
          });
    });
  };
