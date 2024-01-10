import React from 'react';
import { Tilt } from 'react-tilt';
import img from './img.png';
import './Logo.css';

const Logo = () => {
	return(
		<div className = 'ma4 mt0'>
			<Tilt className = 'br2 shadow-2' style={{ height: 80, width: 80 }}>
		      <div className = ''>
		      	<img alt = 'img' src = {img} />
		      </div>
		    </Tilt>
		</div>	
	);
}

export default Logo;