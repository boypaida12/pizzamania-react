import React from 'react';

function Header() {
  return (
    <nav className="navbar navbar-default navbar-override">
  		<div className="container-fluid">
    		<div className="navbar-header">
      			<button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        			<span className="sr-only">Toggle navigation</span>
        			<span className="icon-bar"></span>
        			<span className="icon-bar"></span>
        			<span className="icon-bar"></span>
     		 	</button>
      			<a className="navbar-brand" href='/'>Pizza Hub</a>
    		</div>

    		<div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      			<ul className="nav navbar-nav navbar-right">
        			<li><a href="/">Home</a></li>
        			<li><a href="#about-pizza">About Pizza</a></li>
        			<li><a href="#pizza-types">Pizza Types</a></li>
      			</ul>
    		</div>
  		</div>
	</nav>
  )
}

export default Header