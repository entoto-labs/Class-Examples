jQuery("document").ready(function() { /*Specify a function to execute when the DOM is fully loaded. */

    jQuery(".tab1Form, .tab2Form, .tab3Form").submit(function() {
      event.preventDefault(); /*method tells the user agent that if the event does not get explicitly handled, its default action should not be taken as it normally would be */
      var fields = jQuery("input", this).serializeArray(); /*serializeArray reates a JavaScript array of objects, ready to be encoded as a JSON  */
      jQuery("#results").empty(); /* Remove all child nodes of the set of matched elements from the DOM */
      jQuery.each(fields, function(i, field) {
        jQuery("#results").append(field.value + " ");
      });
      jQuery.ajax({
          method: "POST", 
          url: "advertupload.php", /*A string containing the URL to which the request is sent. */
          data: fields
        })
        .done(function(msg) {
          console.log("Data Saved: " + msg);
        });
  
    });
  
  });