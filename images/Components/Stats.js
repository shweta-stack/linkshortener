import './Stats.css';
import brandRecognitionIcon from '../images/icon-brand-recognition.svg';
import detailedRecordsIcon from '../images/icon-detailed-records.svg';
import fullyCustomizableIcon from '../images/icon-fully-customizable.svg';

const Stats = () => {
	return (
		<>
			<div className='stats'>
				<div className="heading">
					<h2>Advanced Statistics</h2>
					<p>Track how your links are performing across the web with our advanced statistics dashboard</p>
				</div>
				<div className="grid container">
					<div className="stat">
					    <img src={brandRecognitionIcon} alt="icon-brand-recognition"/>
						<h3>Brand Recognition</h3>
						<p>Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.</p>
					</div>
					<div className="stat">
						 <img src={detailedRecordsIcon} alt="icon-detailed-records"/>
						<h3>Detailed Records</h3>
						<p>Gain insights into who is clicking your links. Knowing where and when people engage with your content helps inform better decisions.</p>
					</div>
					<div className="stat">
						<img src={fullyCustomizableIcon} alt="icon-fully-customizable"/>
						<h3>Fully Customizable</h3>
						<p>Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.</p>
					</div>
				</div>
			</div>
			<div className="boost">
				<h2>Boost your links today</h2>
				<button className="boost-btn">Get Started</button>
			</div>
		</>
	)
}

export default Stats