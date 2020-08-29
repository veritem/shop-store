import React from 'react'
import './Footer.css'

function Footer() {
	return (
		<>
			<footer>
				<div className='comp_logo'>
					<h3>Rustique</h3>
				</div>

				<div className='footer_links'>
					<div className='footer_link'>
						<h3>Quick links</h3>
						<a href='http://' target='_blank' rel='noopener noreferrer'>
							Wishlist
						</a>
						<a href='http://' target='_blank' rel='noopener noreferrer'>
							Customer service
						</a>
						<a href='http://' target='_blank' rel='noopener noreferrer'>
							Order tracking
						</a>
						<a href='http://' target='_blank' rel='noopener noreferrer'>
							More
						</a>
					</div>
					<div className='footer_link'>
						<h3>New Products</h3>
						<a href='http://' target='_blank' rel='noopener noreferrer'>
							Women Cloth
						</a>
						<a href='http://' target='_blank' rel='noopener noreferrer'>
							Fashion Accessories
						</a>
						<a href='http://' target='_blank' rel='noopener noreferrer'>
							Men Cloth
						</a>
						<a href='http://' target='_blank' rel='noopener noreferrer'>
							Kids toys
						</a>
					</div>
					<div className='footer_link'>
						<h3>Support</h3>
						<a href='http://' target='_blank' rel='noopener noreferrer'>
							Frequently asked questions
						</a>

						<a href='http://' target='_blank' rel='noopener noreferrer'>
							Terms and conditions
						</a>

						<a href='http://' target='_blank' rel='noopener noreferrer'>
							Privacy and Policy
						</a>
						<a href='http://' target='_blank' rel='noopener noreferrer'>
							payment issue
						</a>
					</div>
				</div>
			</footer>
			<div className='copyright'>
				<p>CopyRight&copy;2020 All rights reserved | Rustique Enginneering team</p>
				<p>
					<i className='fab fa-twitter' />
					<i className='fab fa-facebook' />
					<i className='fab fa-instagram' />
				</p>
			</div>
		</>
	)
}

export default Footer
