import React from 'react'
import './SubHeader.css'

function SubHeader() {
	return (
		<section className='subheader'>
			<div className='adresss'>
				<p className='phone'>+(250) 7871 47115</p>
				<p className='email'>customer@rastique.io</p>
				<div className='residence'>178 Remera Road</div>
			</div>
			<div className='account'>
				<p className='currency'>USD</p>
				<p className='acc'>My Account</p>
			</div>
		</section>
	)
}

export default SubHeader
