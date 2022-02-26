import { useState } from 'react';
import logo from '../images/logo.svg';
import bannerImage from '../images/illustration-working.svg';
import './Header.css';

const Header = () => {

	const [showNav, setShowNav] = useState(false);

	const toggleNav = () => {
		setShowNav(!showNav);
	}


	return (
		<header className='header'>
			<nav className='navigation container'>
				<div className="menu-btn" onClick={ toggleNav }>
					<div className="bar"></div>
					<div className="bar"></div>
					<div className="bar"></div>
				</div>
				<div className="nav-inner">
					<img src={logo} alt="logo" className="logo" />
					<div className={ showNav ? `links-wrapper show` : `links-wrapper` }>
						<ul className="nav-links">
							<li className="nav-link">Features</li>
							<li className="nav-link">Pricing</li>
							<li className="nav-link">Resources</li>
						</ul>
						<div className='nav-buttons'>
							<button className="btn" id="login-btn">Login</button>
							<button className="btn btn-accent" id="signup-btn">Sign Up</button>
						</div>
					</div>					
				</div>
				
			</nav>
			<div className="banner container">
				<div className="write">
					<h1>More than just shorter links</h1>
					<h4>Build your brand's recognition and get detailed insights on how your links are peforming</h4>
					<button className="btn btn-accent">Get Started</button>
				</div>
				<img src={bannerImage} alt="boost" className="banner-img" />
			</div>
		</header>
	)
}

export default Header