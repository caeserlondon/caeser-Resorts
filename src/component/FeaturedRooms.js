// from -- API section -- https://reactjs.org/docs/context.html#reactcreatecontext  -- API --

import React, { Component } from 'react';

import { RoomContext } from '../context';

export default class FeaturedRooms extends Component {
	static contextType = RoomContext;

	render() {
		const { featuredRooms: rooms } = this.context;
		// console.log(rooms);

		return <div>Hello from FeaturedRooms</div>;
	}
}
