import React from 'react';
import Hero from '../component/Hero';
import Banner from '../component/Banner';
import { Link } from 'react-router-dom';

export default function ErrorPage() {
	return (
		<Hero>
			<Banner title="404" subtitle="Sorry, No Page Found">
				<Link to="/" className="btn-primary">
					Back to the Home Page
				</Link>
			</Banner>
		</Hero>
	);
}
