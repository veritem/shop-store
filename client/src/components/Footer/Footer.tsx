import React from 'react'
import './Footer.css'

function Footer() {
	return (
		<footer>
			<div className='container'>
				<div className='logo'>AMAVON</div>
				<div className='developers'>
					<a href='http://' target='_blank' rel='noopener noreferrer'>
						Source Code
					</a>
					<a href='http://' target='_blank' rel='noopener noreferrer'>
						Licence
					</a>
					<a href='http://' target='_blank' rel='noopener noreferrer'>
						Code of conduct
					</a>
					<a href='http://' target='_blank' rel='noopener noreferrer'>
						Contibribution Guide lines
					</a>
				</div>
				<div className='community'>
					<a href='http://' target='_blank' rel='noopener noreferrer'>
						Stack overflow
					</a>
					<a href='http://' target='_blank' rel='noopener noreferrer'>
						Discord
					</a>
				</div>
				<div className='social'>
					<a href='http://' target='_blank' rel='noopener noreferrer'>
						<i className='fab fa-twitter' />
					</a>

					<a href='http://' target='_blank' rel='noopener noreferrer'>
						<i className='fab fa-facebook' />
					</a>

					<a href='http://' target='_blank' rel='noopener noreferrer'>
						<i className='fab fa-instagram' />
					</a>
				</div>
			</div>
			<a href='http://' target='_blank' className='copyright' rel='noopener noreferrer'>
				AMAVON&copy;2020
			</a>
		</footer>
	)
}

export default Footer
