import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { MyCarousel } from "../component/carousel";

export const Home = () => (
	<div className="container text-center mt-5 " style={{ border: "2px solid black" }}>
		<div className="row " style={{ height: "75vh" }}>
			<div className="col-12 col-md-6 d-flex flex-column justify-content-center p-3 ">
				<div className="col-12 ">
					<h1>Edian Ibarrola</h1>
					<h2>Full-Stack Developer</h2>
					<p>I make stuff.</p>
				</div>

				<div className="col-12">
					<MyCarousel />
				</div>
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
			</div>

			<div className="col-12 col-md-6 d-flex justify-content-center align-items-center  ">
				<img
					className="img-responsive rounded"
					style={{ "max-height": "45vh", border: "2px solid #4e3658" }}
					src="https://res.cloudinary.com/petrep/image/upload/v1632749359/portfolio/IMG_3730_kjewfq.jpg"
					alt="Edian Ibarrola's headshot picture"
				/>
			</div>
		</div>
	</div>
);
