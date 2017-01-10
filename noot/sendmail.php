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

  // $utm_source = $_POST["utm_source"];
  // $utm_medium = $_POST["utm_medium"];
  // $utm_campaign = $_POST["utm_campaign"];
  // $utm_term = $_POST["utm_term"];
  // $utm_content = $_POST["utm_content"];



  
  
  
  $to1  = "noutbook.otdelx@yandex.ru"; 
  
  if (isset($problem)) {
    $message = "Выбор: $problem<br>Модель: $model<br>Марка: $mark<br>Год: $sel<br>Телефон: $phone";
  } else if (isset($popup)) {
    $message = "Телефон: $phone";
  } else if (isset($email)) {
    $message = "Email: $email";
  } else if (isset($prod)) {
    $message = "Телефон: $phone<br>$prod";
  } else {
    $message = "Телефон: $phone";
  }

  $subject = "Заявка с сайта";

  
  $headers  = "Content-type: text/html; charset=utf-8 \r\n";
  $from = "=?UTF-8?B?".base64_encode("http://gadgetstok-skupka.ru/")."?= <http://gadgetstok-skupka.ru/";
  $headers .= "From: $from\r\n";
  $headers .= "Reply-To: $email\r\n";

  $result = mail($to1, $subject, $message, $headers);
} 

  function send_mail1($to2, $subject, $message, $headers)
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

  // $utm_source = $_POST["utm_source"];
  // $utm_medium = $_POST["utm_medium"];
  // $utm_campaign = $_POST["utm_campaign"];
  // $utm_term = $_POST["utm_term"];
  // $utm_content = $_POST["utm_content"];



  
  
  
  $to2  = "pigas1987@gmail.com"; 
  
  if (isset($problem)) {
    $message = "Выбор: $problem<br>Модель: $model<br>Марка: $mark<br>Год: $sel<br>Телефон: $phone";
  } else if (isset($popup)) {
    $message = "Телефон: $phone";
  } else if (isset($email)) {
    $message = "Email: $email";
  } else if (isset($prod)) {
    $message = "Телефон: $phone<br>$prod";
  } else {
    $message = "Телефон: $phone";
  }

  $subject = "Заявка с сайта";

  
  $headers  = "Content-type: text/html; charset=utf-8 \r\n";
  $from = "=?UTF-8?B?".base64_encode("http://gadgetstok-skupka.ru/")."?= <http://gadgetstok-skupka.ru/";
  $headers .= "From: $from\r\n";
  $headers .= "Reply-To: $email\r\n";

  $result = mail($to2, $subject, $message, $headers);
} 
{
    // Отправка email
  send_mail($to1, $subject, $message, $headers);
  send_mail1($to1, $subject, $message, $headers);
  echo 'true'; 
}

}
?>