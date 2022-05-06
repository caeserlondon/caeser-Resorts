import React from 'react';
import Hero from '../component/Hero';
import Banner from '../component/Banner';
import { Link } from 'react-router-dom';

export default function Home() {
	return (
		<Hero>
			<Banner
				title="luxurious rooms"
				subtitle="deluxe rooms starting from $199"
			>
				<Link to="/rooms" className="btn-primary">
					Our Rooms
				</Link>
			</Banner>
		</Hero>
	);
}
