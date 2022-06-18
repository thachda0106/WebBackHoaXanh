import React, {useContext} from 'react';
import './style.css';
import Search from '../Search';
import Order from '../Order';
import {Link} from 'react-router-dom'
import Context from '../../../constants/Context'
function Header() {
	return (
		//container
		<div className="w-full h-14 bg-colorPrimary flex z-20 fixed top-0 left-0 right-0 ">
			<div className="w-full h-full flex flex-row items-center justify-center">
				{/* logo */}
				<div>
					{' '}
					<Link className=" block logo bg-colorPrimary" to="/" />
				</div>
				{/* search */}
				<Search text={'Giao nhanh, đơn ít cũng giao!'} />
				{/* Order */}
				<Order />
			</div>
		</div>
	);
}
export default Header;
