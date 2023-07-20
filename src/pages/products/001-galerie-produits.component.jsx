import { useState } from 'react';
import './product.styles.scss';

export const GalerieProduits = () => {
	const [email, setEmail] = useState('');
	const [status, setStatus] = useState('');

	const postData = async (event) => {
		event.preventDefault();

		if (!validateEmail(email)) return;

		setStatus('sending');

		const response = await fetch('http://localhost:4000/001-galerie-produits', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				recipient: email,
				subject: 'Galerie de PRODUITS',
				message: 'Voici comme promis la galerie de produits demandee',
			}),
		});

		const data = await response.json();

		if (data.message === 'ok') {
			setStatus('sent');
		} else {
			setStatus('');
		}
	};

	function validateEmail(inputText) {
		var mailFormat = /\S+@\S+\.\S+/;

		if (inputText.match(mailFormat)) {
			return true;
		}

		return false;
	}

	return (
		<main>
			<h1>Galerie ELEMENTOR</h1>
			<div className="container">
				<div className="cta-form">
					<h2>Remplir le formulaire</h2>
					<p>Dites-moi a quelle adresse Email vous envoyer le template</p>
				</div>
				<form className="form" onSubmit={postData}>
					<input
						type="email"
						placeholder="Email"
						className="form__input"
						id="email"
						onChange={(e) => setEmail(e.target.value)}
					/>
					<label htmlFor="email" className="form__label">
						Email
					</label>

					<button className="form__button" type="submit">
						Telecharger le template
					</button>
				</form>
			</div>
			{status === 'sending' ? (
				<div className="explanation">
					<h3>
						MAIL EN COURS D'ENVOI
						<span className="dot-one"> .</span>
						<span className="dot-two"> .</span>
						<span className="dot-three"> .</span>
					</h3>
				</div>
			) : status === 'sent' ? (
				<div className="explanation">
					<h3>MAIL ENVOYE</h3>
				</div>
			) : (
				''
			)}
		</main>
	);
};
