
<!doctype html>
<html>
<head>
<meta charset="utf-8">
<title>Ajax try </title>
<link rel="stylesheet" type="text/css" href="style/style.css">
</head>

<body>
<div class="main">
 <div class="main_container">
 <h3 id="msg">Entered value</h3>
 <input type="button" id="btn" value="button">
   <form method="post" action="file.php" id="ajax">
   <input type="text" name="username" id="username"><br>
   <input type="submit" name="submit" value="submit" id="submit">
   </form>
  </div>
</div>
<script src="script/jquery-3.3.1.min.js"></script>
<script src="script/action.js"></script>
</body>
</html>