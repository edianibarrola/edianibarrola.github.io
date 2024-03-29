import React from "react";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { MyCarousel } from "../component/carousel";
import { Link } from "react-router-dom";

export const Home = () => (
	<div className=" container  text-center  mt-3 ">
		<div className="row ">
			<div className="col-12  col-md-6 d-flex flex-column justify-content-center p-3 ">
				<div className="col-12 ">
					<h1>Edian Ibarrola</h1>
					<h2>Full-Stack Developer</h2>
					<p>I make stuff.</p>
				</div>

				<div className="col-12">
					<MyCarousel />
				</div>
			</div>

			<div className="col-12 py-3 col-md-6 d-flex flex-column justify-content-center align-items-center  ">
				<div className="col-12 my-5 ">
					<div className="col-12">
						<Link to="/about">
							<img
								className="img-responsive mb-5 rounded "
								style={{ "max-height": "45vh", border: "2px solid #4e3658" }}
								src="https://res.cloudinary.com/petrep/image/upload/v1632749359/portfolio/IMG_3730_kjewfq.jpg"
								alt="Edian Ibarrola's headshot picture"
							/>
						</Link>
					</div>
					<div className="col-12">
						<Link to="/about">
							<button className="btn mx-auto yellowTxt" style={{ border: "2px solid #4e3658" }}>
								Profile and Resume
							</button>
						</Link>
					</div>
				</div>
				<div className="mx-auto col-12 d-flex align-items-center justify-content-around">
					<a href="http://www.edianibarrola.com">
						<i className="fas fa-home fa-2x" />
					</a>
					<a href="http://github.com/edianibarrola">
						<i className="fab fa-github-alt fa-2x" />
					</a>
					<a href="https://www.linkedin.com/in/edianibarrola/">
						<i className="fab fa-linkedin-in fa-2x" />
					</a>
					<a href="http://www.twitter.com/ediansmells">
						<i className="fab fa-twitter fa-2x" />
					</a>
					{"  "}
					{"  "}
					<a href="http://www.instagram.com/edianmakesstuff/">
						<i className="fab fa-instagram fa-2x" />
					</a>
					{"  "}

					<a href="mailto:edianibarrola@gmail.com">
						<i className="fas fa-envelope fa-2x" />
					</a>
				</div>
			</div>
		</div>
	</div>
);
