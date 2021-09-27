import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { MyCarousel } from "../component/carousel";

export const Home = () => (
	<div className="container text-center mt-5" style={{ height: "90vh" }}>
		<div className="row">
			<div className="col">
				<h1>Edian Ibarrola</h1>
				<h2>Full-Stack Developer</h2>
				<p>I make stuff.</p>
				<div className="mx-auto col-12 d-flex align-items-center justify-content-around">
					<a href="http://www.edianibarrola.com">
						<i className="fas fa-home" />
					</a>
					<a href="http://www.twitter.com/ediansmells">
						<i className="fab fa-twitter" />
					</a>
					{"  "}
					<a href="http://github.com/edianibarrola">
						<i className="fab fa-github-alt" />
					</a>
					{"  "}
					<a href="http://www.instagram.com/the_garden_of_edian/">
						<i className="fab fa-instagram" />
					</a>
				</div>
				<div className="col-12">
					<MyCarousel />
				</div>
			</div>
			<div className="col">
				<img
					style={{ height: "50vh" }}
					src="https://res.cloudinary.com/petrep/image/upload/v1632749359/portfolio/IMG_3730_kjewfq.jpg"
					alt="Edian Ibarrola's headshot picture"
				/>
			</div>
		</div>
		<a href="#" className="btn btn-success">
			If you see this green button, bootstrap is working
		</a>
	</div>
);
