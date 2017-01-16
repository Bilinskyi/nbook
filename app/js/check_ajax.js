$(document).ready(function() {

	$('#feedback-valid-1').validate({
		rules:{
			"phone-none":{required:true}
		},
		messages:{
			"phone-none":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#feedback-valid-1')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
							window.location.href = "thx.php";
							// $.fancybox.close()
							// var message = $('.modal');
							// $.fancybox(message);

						}
					}  
				}); 
		}
	});


	$('#feedback-diagn').validate({
		rules:{
			"phone-none":{required:true}
		},
		messages:{
			"phone-none":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#feedback-diagn')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
							window.location.href = "thx.php";
							// $.fancybox.close()
							// var message = $('.modal');
							// $.fancybox(message);

						}
					}  
				}); 
		}
	});

	

	$('#feedback-valid-email').validate({
		rules:{
			"email":{required:true}
		},
		messages:{
			"email":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#feedback-valid-email')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
							window.location.href = "thx-1.html";

						}
					}  
				}); 
		}
	});


	$('#feedback-valid-2').validate({
		rules:{
			"phone-none":{required:true}
		},
		messages:{
			"phone-none":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#feedback-valid-2')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
							window.location.href = "thx.php";
							// $.fancybox.close()
							// var message = $('.modal');
							// $.fancybox(message);

						}
					}  
				}); 
		}
	});

	$('#feedback-valid-3').validate({
		rules:{
			"phone-none":{required:true}
		},
		messages:{
			"phone-none":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#feedback-valid-3')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
							window.location.href = "thx.php";
							// $.fancybox.close()
							// var message = $('.modal');
							// $.fancybox(message);

						}
					}  
				}); 
		}
	});


	$('#feedback-phone-none').validate({
		rules:{
			"phone-none":{required:true}
		},
		messages:{
			"phone-none":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#feedback-phone-none')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
							window.location.href = "thx.php";

						}
					}  
				}); 
		}
	});


	$('#feedback-ord-1').validate({
		rules:{
			"phone-none":{required:true}
		},
		messages:{
			"phone-none":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#feedback-ord-1')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
							window.location.href = "thx.php";

						}
					}  
				}); 
		}
	});

	$('#feedback-ord-2').validate({
		rules:{
			"phone-none":{required:true}
		},
		messages:{
			"phone-none":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#feedback-ord-2')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
							window.location.href = "thx.php";

						}
					}  
				}); 
		}
	});

	$('#feedback-ord-3').validate({
		rules:{
			"phone-none":{required:true}
		},
		messages:{
			"phone-none":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#feedback-ord-3')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
							window.location.href = "thx.php";

						}
					}  
				}); 
		}
	});

	$('#feedback-ord-4').validate({
		rules:{
			"phone-none":{required:true}
		},
		messages:{
			"phone-none":{required:""}
		},
		submitHandler: function(form){
			$(form).ajaxSubmit({
				success: function(data) {
					if (data == "true")
					{
						$(':input','#feedback-ord-4')
						.not(':button, :submit, :reset, :hidden')
						.val('')
						.removeAttr('checked')
						.removeAttr('selected');
							window.location.href = "thx.php";

						}
					}  
				}); 
		}
	});

});
