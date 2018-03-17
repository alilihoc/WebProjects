<!DOCTYPE HTML>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
        <title>Your Website</title>
        <link href="css/style.css" rel="stylesheet">
        <link href="http://twitter.github.com/bootstrap/assets/css/bootstrap.css" rel="stylesheet">
    </head>
        
    <body>
        <div class="navbar navbar-inverse navbar-fixed-top">
              <div class="navbar-inner">
                <div class="container">
                  <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                  </a>
                  <a class="brand" href="#">Mon jeu</a>
                  <div class="nav-collapse collapse">
                    <ul class="nav">
                      <li class="active"><a href="#">Jeu</a></li>
                      <li><a href="#">Inscription</a></li>
                      <li><a href="#about">Top 100</a></li>
                      <li><a href="#contact">Nous contacter</a></li>
                    </ul>
                    <form class="navbar-form pull-right">
                      <input class="span2" type="text" placeholder="Email">
                      <input class="span2" type="password" placeholder="Password">
                      <button type="submit" class="btn">Sign in</button>
                    </form>
                  </div><!--/.nav-collapse -->
                </div>
              </div>
            </div>
        <div class="container">
            <div class="hero-unit">
                <h1>Bienvenue sur mon jeu !</h1>
                <p><center><button class="btn btn-success btn-large" id="start">Commencer</button></center></p>
            </div>
        </div>
        <div class='container'>
            <div class="hero-unit">
                <center><h1 id="lvlMSG">test</h1></center>
            </div>
        </div>
        <div id="score" class="hero-unit"><h1>Score: 0</h1><h4></h4><h5></h5></div>
        <div id="time" class="hero-unit"><h1>500</h1></div>
        <div id="game" style="display: none"> </div>
        <script src="js/jquery.js" type="text/javascript"></script>
        <script src="js/game.js"></script>
    </body>
        
</html>
