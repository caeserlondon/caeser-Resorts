import React, { Component } from 'react';
import Title from './Title';
import {
	FaUmbrellaBeach,
	FaCocktail,
	FaShuttleVan,
	FaPaw,
} from 'react-icons/fa';

export default class Services extends Component {
	state = {
		services: [
			{
				icon: <FaUmbrellaBeach />,
				title: 'private beach',
				info: 'Manhattan irish coffee Bloody mary bombay Deanston caju amigo redline spritzer blue hawaii.',
			},
			{
				icon: <FaCocktail />,
				title: 'free cocktails',
				info: 'Manhattan irish coffee Bloody mary bombay Deanston caju amigo redline spritzer blue hawaii.',
			},
			{
				icon: <FaShuttleVan />,
				title: 'free airport transfers',
				info: 'Manhattan irish coffee Bloody mary bombay Deanston caju amigo redline spritzer blue hawaii.',
			},
			{
				icon: <FaPaw />,
				title: 'Pets friendly',
				info: 'Manhattan irish coffee Bloody mary bombay Deanston caju amigo redline spritzer blue hawaii.',
			},
		],
	};
	render() {
		return (
			<section className="services">
				<Title title="Services" />
				<div className="services-center">
					{this.state.services.map((item, index) => {
						return (
							<article key={index} className="service">
								<span>{item.icon}</span>
								<h6>{item.title}</h6>
								<p>{item.info}</p>
							</article>
						);
					})}
				</div>
			</section>
		);
	}
}
