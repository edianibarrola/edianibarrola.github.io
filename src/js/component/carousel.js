import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { Link } from "react-router-dom";

export const MyCarousel = () => {
	return (
		<Carousel fade variant="dark">
			<Carousel.Item interval={25000}>
				<Link to="/code">
					<img
						className="d-block w-100 rounded"
						src="https://res.cloudinary.com/petrep/image/upload/v1632756459/portfolio/codepic_1_r40pbk.jpg"
						alt="First slide"
					/>
				</Link>
			</Carousel.Item>
			<Carousel.Item interval={2000}>
				<Link to="/music">
					<img
						className="d-block w-100 rounded"
						src="https://res.cloudinary.com/petrep/image/upload/v1632756459/portfolio/musicpic_gqxffq.jpg"
						alt="Second slide"
					/>
				</Link>
			</Carousel.Item>
			<Carousel.Item interval={2000}>
				<Link to="/film">
					<img
						className="d-block w-100 rounded"
						src="https://res.cloudinary.com/petrep/image/upload/v1632756459/portfolio/filmpic_ya5ync.jpg"
						alt="Third slide"
					/>
				</Link>
			</Carousel.Item>
		</Carousel>
	);
};
