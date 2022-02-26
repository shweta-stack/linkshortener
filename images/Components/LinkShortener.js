import './LinkShortener.css';
import { useState, useEffect, useRef }  from 'react';

const LinkShortener = () => {

	const [link, setLink] = useState('');
	const [linksList, setLinksList] = useState([ ]);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState(false);
	const [errorMessage, setErrorMessage] = useState('');
	const inputRef = useRef(null);
	const copyBtnRef = useRef(null);

	const shortenLink = (link) => {		
		
		if (link === '') {
			setErrorMessage('Please add a link');
			setError(true); // Displays error message if there is no link to shorten
		} else if (link !== '') {
			setError(false); // Removes error message
			setLoading(true);
			const baseUrl = 'https://api.shrtco.de/v2/shorten?url=';
			fetch(`${baseUrl}${link}`).then(res => res.json()).then(data => { // API Call
				if (!data.ok) { // If the URL is not valid
					setErrorMessage(data.error);
					setError(true);
					setLoading(false);
					return;
				}
				const newShortLink = data.result;
				setLinksList([...linksList, newShortLink]);
				storeLink(newShortLink); // stores link in Session Storage
				setLink('');
				setLoading(false);
			}).catch(err => {
				setErrorMessage('An error occured');
				setError(true);
			});
			
			inputRef.current.value = ''; // Clears the input field
		};
	}

	// For adding the shortened link to Session Storage
	const storeLink = (link) => {
		// If there are no already stored links in Session Storage
		if (sessionStorage.getItem('storedLinks') === null) {
			let stored_Links = [ ];
			stored_Links.push(link);
			sessionStorage.setItem('storedLinks', JSON.stringify(stored_Links));
		// If there are already some stored links, it just adds to them
		} else {
			let stored_Links = JSON.parse( sessionStorage.getItem('storedLinks') );
			stored_Links.push(link);
			sessionStorage.setItem('storedLinks', JSON.stringify(stored_Links));
		}
	}

	const copyToClipboard = async (text, event) => {

		// Copies the link to the clipboard
		if ('clipboard' in navigator) {
			await navigator.clipboard.writeText(text); 
		} else {
			document.execCommand('copy', true, text);
		}
		
		// Changes the look of the button when copying
		event.target.classList.add('copying');
		event.target.innerText = 'Copied!';

		// Resets the look of the copy button after 1500ms
		setTimeout(() => {
			event.target.classList.remove('copying');
			event.target.innerText = 'Copy';
		},1500)
	}

	// Retrieves previously stored links from Session Storage on page reload
	useEffect(() => {
		if (sessionStorage.getItem('storedLinks')!==null) {
			setLinksList(JSON.parse(sessionStorage.getItem('storedLinks')));
		}
	}, [ ])

	return (
		<div className='link-shortener'>
			<div className="link-box container">
				<div className="input-container">
					<input type="text" placeholder='Shorten a link here...' onChange={ (e)=> setLink(e.target.value) } ref={inputRef} className={error ? 'err' : undefined}  />
					{error && <p className="error-msg">{ errorMessage }</p>}
				</div>				
				<button className={ loading ? 'btn loading' : 'btn' } id="shorten-btn" disabled={loading} onClick={ ()=> shortenLink(link) }>
					{ loading ? 'Loading...' : 'Shorten It!' }
				</button>
			</div>
			{ linksList.length !== 0 && linksList.map((shortenedLink, index) => (
				<div className="shortened-link container" key={index} >
					<p className="link">{ shortenedLink.original_link }</p>
					<div>
						<p className="short-link">{ shortenedLink.full_short_link }</p>
						<button className="copy-btn" onClick={ (event) => copyToClipboard(shortenedLink.full_short_link, event) } ref={ copyBtnRef }>Copy</button>
					</div>
				</div>
				))}
		</div>
	)
}

export default LinkShortener