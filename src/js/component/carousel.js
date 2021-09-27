import React from "react";
import Carousel from "react-bootstrap/Carousel";

export const MyCarousel = () => {
	return (
		<Carousel>
			<Carousel.Item>
				<a href="/code">
					<img
						className="d-block w-100 rounded"
						src="https://res.cloudinary.com/petrep/image/upload/v1632756459/portfolio/codepic_1_r40pbk.jpg"
						alt="First slide"
					/>
				</a>
			</Carousel.Item>
			<Carousel.Item>
				<a href="/music">
					<img
						className="d-block w-100 rounded"
						src="https://res.cloudinary.com/petrep/image/upload/v1632756459/portfolio/musicpic_gqxffq.jpg"
						alt="Second slide"
					/>
				</a>
			</Carousel.Item>
			<Carousel.Item>
				<a href="/film">
					<img
						className="d-block w-100 rounded"
						src="https://res.cloudinary.com/petrep/image/upload/v1632756459/portfolio/filmpic_ya5ync.jpg"
						alt="Third slide"
					/>
				</a>
			</Carousel.Item>
		</Carousel>
	);
};
