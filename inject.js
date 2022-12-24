document.documentElement.innerHTML=`
<head>
    <title>Injected...</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="A website by sealldeveloper showcasing their projects and a bio.">
    <link rel="apple-touch-icon" sizes="180x180" href="http://seall.dev/icons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="http://seall.dev/icons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="http://seall.dev/icons/favicon-16x16.png">
    <link rel="manifest" href="http://seall.dev/icons/site.webmanifest">
    <link rel="mask-icon" href="http://seall.dev/icons/safari-pinned-tab.svg" color="#5bbad5">
    <link rel="shortcut icon" href="http://seall.dev/icons/favicon.ico">
    <meta name="msapplication-TileColor" content="#603cba">
    <meta name="msapplication-config" content="http://seall.dev/icons/browserconfig.xml">
    <meta name="theme-color" content="#ffffff">
    <meta charset="UTF-8">
    <meta property="og:type" content="website">
    <meta property="og:site_name" content="sealldeveloper ✵">
    <meta property="og:title" content="sealldeveloper ✵" />
    <meta name="twitter:card" content="summary_large_image">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link rel="stylesheet" href="https://getbootstrap.com/docs/4.3/dist/css/bootstrap.min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.4.3/css/mdb.min.css">
    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css" integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous">
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"></script>
    <script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"></script>
    <link rel="stylesheet" href="http://seall.dev/assets/style.css">
</head>
<style>
    .justhover{
        transition: transform .2s
    }
    .justhover:hover {
        transform: translateY(-4px);
    }
    .enter {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        left:0px;
        right:0px;
        border: 0px solid black;
        font-size: 20px;
        color: white;
        font-weight: 200;
        font-family: "Roboto", sans-serif;
        overflow:auto;
        background-color: #171b1f;
        position:relative;
        transition: 0.3s;
        text-align: center;
    }
    a {
        color:inherit;
    }
    td {
    text-align: center;
}
    a:hover {
        color:inherit;
    }
    .enter:hover {
        background-color: #757575;
    }
    .th-custom {
        overflow:auto;
        font-weight: 200;
        font-family: "Roboto", sans-serif;
        text-align: center;
        padding-left:5px;
        padding-right:5px;
        font-size:28px;
        margin:10px
    }

    body {
    -webkit-touch-callout: none; 
    -webkit-user-select: none; 
    -khtml-user-select: none; 
        -moz-user-select: none; 
        -ms-user-select: none; 
            user-select: none; 
color: white;
overflow:auto;
background-color: #171b1f;
font-family: "Roboto", sans-serif;
font-weight: 500;

margin-top: 15vh;


}
.curved-zoom {
        transition: transform .2s; /* Animation */
        margin: 0 auto;
        z-index:101;
        margin: 10px; 
        border-radius: 15px; 
    }
    .curved-zoom:hover {
        transform: translateY(-8px); /* (150% zoom - Note: if the zoom is too large, it will go outside of the viewport) */
        z-index:102;
    }
</style>
</head>
<body style="background-color:rgb(17, 5, 29) ;">
    <div id="soundtrack"></div>
    <div class="container mt-3 text-center" style="background-color:rgb(29, 8, 49) ; overflow:hidden;	padding-bottom:40px;	box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);">
        <h1 class="lo" , style="font-weight:400;padding-top:40px" class="featurette-heading">Thanks for your website!</h1>
        <p class="lo">You could have made it better...</p>
        <br>
        <img src="https://i.imgur.com/kvi8JEl.png" class="curved-zoom" width=200 height=200/>
        <br>
        <br>
        <p class="lo">If you're mad at me or want to flick me an email <a class="enter" href="https://seall.dev/bio">come check me out here ;)</a></p>
    </div>
    <h3 style="padding-bottom:5px"></h3>
    <h3 style="text-align:center;font-size:10px">Maintained and redesigned by <a href="https://github.com/sealldeveloper" style="font-size:10px"target="_blank" rel="noopener noreferrer" class="enter">sealldeveloper</a></h3>
`
