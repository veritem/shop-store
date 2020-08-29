import React from 'react'
import './ShopByCat.css'
import smartPhones from '../../assets/categories/smartPhones.png'
import homeApplicants from '../../assets/categories/home.png'
import tvs from '../../assets/categories/tvs.png'
import fashion from '../../assets/categories/fashion.png'

function ShopByCat() {
	return (
		<div className='categories'>
			<h1>Shop by category</h1>

			<div className='category'>
				<div>
					<img src={smartPhones} alt='Smart phones' />
					<p>Smart phones</p>
				</div>
				<div>
					<img src={homeApplicants} alt='Smart phones' />
					<p>Home applicants and home materials</p>
				</div>
				<div>
					<img src={tvs} alt='Smart phones' />
					<p>Tvs and Ultra wide monitors</p>
				</div>
				<div>
					<img src={fashion} alt='Smart phones' />
					<p>Men and women from fashion industry experts</p>
				</div>
			</div>
		</div>
	)
}

export default ShopByCat
