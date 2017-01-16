<!DOCTYPE html>
<html lang="en">
<head>
	<meta charset="UTF-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>Ваша заявка отправлена</title>
	<link rel="shortcut icon" href="favicon.ico" type="image/x-icon">
	<link rel="icon" href="favicon.ico" type="image/x-icon">
	<link rel="stylesheet" href="css/style.css">
	<link rel="stylesheet" href="css/bootstrap.css">
	<link rel="stylesheet" href="fonts/fonts.css">  
	<link rel="stylesheet" href="fancybox/jquery.fancybox.css">
	<!--[if lt IE 9]>
	<script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js">
	</script><script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
	<![endif]-->
</head>
<body class="thx-page">

	<header id="s-1" class="sec">
		<div class="bg-w">
			<div class="container">
				<div class="row">

					<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12">
						<a href="index.php" class="logo">Gadget<span>Stock</span></a>
						<div class="logo-text">Выкуп ноутбуков в любом <br>состоянии от 2007 года <br>выпуска</div>
					</div>
					<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 pull-right">
						<div class="top-contact">
							<div class="phone">8 (818) 242-44-02</div>
							<a href="#call" class="link modal-form"><i class="ico ico-phone"></i>Перезвонить вам?</a>
						</div>
					</div>
					<div class="col-lg-4 col-md-4 col-sm-6 col-xs-12 center">
						<div class="place-wrap">
							<i class="ico ico-place"></i>
							<div class="text-place">  г. Архангельск</div>
						</div>
					</div>  
				</div>  
				<h1>Спасибо</h1>
				<h3>Ваша заявка отправлена</h3>
				<div class="note">
					В ближайшее время наш менеджер свяжется с вами, укажите ваш email, как альтернативный способ <br>связи, на него мы продублируем информацию о вашей заявке
				</div>
				<form class="form-all form-thx" method="post" id="feedback-valid-email" action="sendmail.php">
                  <input type="hidden" name="utm_source" value="<?php echo isset($_GET['utm_source']) ? $_GET['utm_source'] : '' ;?>">
			<input type="hidden" name="utm_medium" value="<?php echo isset($_GET['utm_medium']) ? $_GET['utm_medium'] : '' ;?>">
			<input type="hidden" name="utm_campaign" value="<?php echo isset($_GET['utm_campaign']) ? $_GET['utm_campaign'] : '' ;?>">
			<input type="hidden" name="utm_term" value="<?php echo isset($_GET['utm_term']) ? $_GET['utm_term'] : '' ;?>">
			<input type="hidden" name="utm_content" value="<?php echo isset($_GET['utm_content']) ? $_GET['utm_content'] : '' ;?>">
					<input type="email" name="email" placeholder="Email"> 
					<button type="submit" class="button">
						<span class="circle"></span>
						<span class="circle2"></span>
						<span class="pr">ОТПРАВИТЬ</span>
					</button>
					<div class="note">
						В ближайшее время наш менеджер свяжется с вами
					</div>
				</form>
			</div>
		</div>
	</header>


	<div id="call" class="hide-form">
		<form class="form-all form-thx f-pop" method="post" id="feedback-phone" action="sendmail.php">
			<h2>Оставьте свой номер,</h2>
			<h3>И мы перезвоним</h3>
			<div class="note">В ближайшее время наш менеджер свяжется с вами</div>
			<input type="tel" class="mask" name="phone" placeholder="+7 (___) ___ - __ - __"> 
			<button type="submit" class="button">
				<span class="circle"></span>
				<span class="circle2"></span>
				<span class="pr">ОТПРАВИТЬ</span>
			</button>
		</form>
	</div>






	<script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.4/jquery.min.js"></script>
	<script src="https://ajax.googleapis.com/ajax/libs/jqueryui/1.12.1/jquery-ui.min.js"></script>
	<script src="js/owl.carousel.min.js"></script>
	<script src="fancybox/jquery.fancybox.pack.js"></script>
	<script src="js/check_ajax.js"></script>       
	<script src="js/jquery.maskedinput.js"></script>   
	<script src="js/jquery.form.js"></script>       
	<script src="js/jquery.validate.js"></script>     
	<script src="js/pxgradient-1.0.3.min.js"></script>
	<script src="js/main.js"></script>


</body>
</html>