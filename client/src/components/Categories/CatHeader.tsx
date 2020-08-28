import React from 'react'
import './CatHeader.css'
import { Link } from 'react-router-dom'

export default function CatHeader() {
	return (
		<div className='CatHeader'>
			<ul>
				<li>
					<Link to='#'>
						<span>
							<i className='fas fa-bars fa-2x' />
						</span>
						All categories
					</Link>
				</li>
				<li>
					<Link to='#'> Smart Phones and Graphics</Link>
				</li>
				<li>
					<Link to='#'>Tvs and audio-video</Link>
				</li>
				<li>
					<Link to='#'> Home applicants</Link>
				</li>
				<li>
					<Link to='#'> Computer accessors</Link>
				</li>
				<li>
					<Link to='#'>Fashion</Link>
				</li>
			</ul>
		</div>
	)
}
