import React from 'react'

export default function Header() {
  return (
   <>
   <div class="navbar-wrapper">

<div class="navbar-inverse" role="navigation">
  <div class="container">
    <div class="navbar-header">


      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>

    </div>


   
    <div class="navbar-collapse  collapse">
      <ul class="nav navbar-nav navbar-right">
       <li class="active"><a href="/">Home</a></li>
        <li><a href="about.php">About</a></li>
        <li><a href="agents.php">Agents</a></li>         
        <li><a href="blog.php">Blog</a></li>
        <li><a href="/Contact">Contact</a></li>
      </ul>
    </div>
  

  </div>
</div>

</div>






<div class="container">


<div class="header">
<a href="index.php"><img src="images/logo.png" alt="Realestate"/></a>

      <ul class="pull-right">
        <li><a href="/Buy">Buy</a></li>
        <li><a href="/Buy">Sale</a></li>         
        <li><a href="/Buy">Rent</a></li>
      </ul>
</div>

</div>
   </>
  )
}
