import './Footer.css';
import facebook from '../images/icon-facebook.svg';
import twitter from '../images/icon-twitter.svg';
import pinterest from '../images/icon-pinterest.svg';
import instagram from '../images/icon-instagram.svg';

const Footer = () => {
	return (
		<footer className='footer'>
			<div className="footer-inner container">
				<div className="logo">
					<p>Shortly</p>
				</div>
				<div className="links">
					<ul className="features-list">
						<li>Features</li>
						<li>Link Shortening</li>
						<li>Branded links</li>
						<li>Analytics</li>
					</ul>
					<ul className="resources-list">
						<li>Resources</li>
						<li>Blog</li>
						<li>Developers</li>
						<li>Support</li>
					</ul>
					<ul className="company-list">
						<li>Company</li>
						<li>About</li>
						<li>Our Team</li>
						<li>Careers</li>
						<li>Contact</li>
					</ul>
				</div>
				<div className="socials">
					<img src={facebook} alt="facebook" className="social-link" />
					<img src={twitter} alt="twitter" className="social-link" />
					<img src={pinterest} alt="pinterest" className="social-link" />
					<img src={instagram} alt="instagram" className="social-link" />
				</div>
			</div>
		</footer>
	)
}

export default Footer