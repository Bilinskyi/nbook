<?
if($_SERVER["REQUEST_METHOD"] == "POST")
{
 // Функция отправки email
 function send_mail($to1, $subject, $message, $headers)
 {

   

  $popup = $_POST["popup"];
  $diagn = $_POST["diagn"];
  $prod = $_POST["prod"];
  
  $problem = $_POST["problem"];
  $model = $_POST["model"];
  $mark = $_POST["mark"];
  $sel = $_POST["sel"];
  $phone = $_POST["phone"];
  $email = $_POST["email"];

  $utm_source = $_POST["utm_source"];
  $utm_medium = $_POST["utm_medium"];
  $utm_campaign = $_POST["utm_campaign"];
  $utm_term = $_POST["utm_term"];
  $utm_content = $_POST["utm_content"];



  
  
  
  $to1  = "noutbook.otdelx@yandex.ru, gadgetstok29@gmail.com, pigas1987@gmail.com"; 
    
  
  if (isset($problem)) {
    $message = "Выбор: $problem<br>Модель: $model<br>Марка: $mark<br>Год: $sel<br>Телефон: $phone";
    if (!empty($utm_source)) {
      $message .= "<br>utm_source: $utm_source";
    }
    if (!empty($utm_medium)) {
      $message .= "<br>utm_medium: $utm_medium";
    }
    if (!empty($utm_campaign)) {
      $message .= "<br>utm_campaign: $utm_campaign";
    }
    if (!empty($utm_term)) {
      $message .= "<br>utm_term: $utm_term";
    }
    if (!empty($utm_content)) {
      $message .= "<br>utm_content: $utm_content";
    }
  } else if (isset($popup)) {
    $message = "Телефон: $phone";
    if (!empty($utm_source)) {
      $message .= "<br>utm_source: $utm_source";
    }
    if (!empty($utm_medium)) {
      $message .= "<br>utm_medium: $utm_medium";
    }
    if (!empty($utm_campaign)) {
      $message .= "<br>utm_campaign: $utm_campaign";
    }
    if (!empty($utm_term)) {
      $message .= "<br>utm_term: $utm_term";
    }
    if (!empty($utm_content)) {
      $message .= "<br>utm_content: $utm_content";
    }
  } else if (isset($email)) {
    $message = "Email: $email";
    if (!empty($utm_source)) {
      $message .= "<br>utm_source: $utm_source";
    }
    if (!empty($utm_medium)) {
      $message .= "<br>utm_medium: $utm_medium";
    }
    if (!empty($utm_campaign)) {
      $message .= "<br>utm_campaign: $utm_campaign";
    }
    if (!empty($utm_term)) {
      $message .= "<br>utm_term: $utm_term";
    }
    if (!empty($utm_content)) {
      $message .= "<br>utm_content: $utm_content";
    }
  } else if (isset($prod)) {
    $message = "Телефон: $phone<br>$prod";
    if (!empty($utm_source)) {
      $message .= "<br>utm_source: $utm_source";
    }
    if (!empty($utm_medium)) {
      $message .= "<br>utm_medium: $utm_medium";
    }
    if (!empty($utm_campaign)) {
      $message .= "<br>utm_campaign: $utm_campaign";
    }
    if (!empty($utm_term)) {
      $message .= "<br>utm_term: $utm_term";
    }
    if (!empty($utm_content)) {
      $message .= "<br>utm_content: $utm_content";
    }
  } else {
    $message = "Телефон: $phone";
    if (!empty($utm_source)) {
      $message .= "<br>utm_source: $utm_source";
    }
    if (!empty($utm_medium)) {
      $message .= "<br>utm_medium: $utm_medium";
    }
    if (!empty($utm_campaign)) {
      $message .= "<br>utm_campaign: $utm_campaign";
    }
    if (!empty($utm_term)) {
      $message .= "<br>utm_term: $utm_term";
    }
    if (!empty($utm_content)) {
      $message .= "<br>utm_content: $utm_content";
    }
  }

  $subject = "Заявка с сайта";

  
  $headers  = "Content-type: text/html; charset=utf-8 \r\n";
  $from = "=?UTF-8?B?".base64_encode("gadgetstok-skupka.ru")."?= <http://gadgetstok-skupka.ru/";
  $headers .= "From: $from\r\n";
  $headers .= "Reply-To: $email\r\n";

   if (isset($phone)) {
    $body = file_get_contents("http://sms.ru/sms/send?api_id=4F5C3A0E-056A-24F5-60AC-53BF91060D00&to=79632004402&text=".urlencode("Заявка с сайта «Gadget Stock». Телефон: $phone"));
  }

  $result = mail($to1, $subject, $message, $headers);
} 

  
{
    // Отправка email
  send_mail($to1, $subject, $message, $headers);
  echo 'true'; 
}

}
?>