import React from "react";
import Accordion from "react-bootstrap/Accordion";

export const CodePage = () => {
	return (
		<div className="container h-100">
			<div className="row">
				<div className="col-12 text-center">
					<h1>Code Projects</h1>
					Click a title for details.
				</div>
				<div className="col-12">
					<Accordion flush>
						<Accordion.Item eventKey="0">
							<Accordion.Header>PetRep</Accordion.Header>
							<Accordion.Body>
								<a href="https://petrep.vercel.app/">
									<img
										className="shadow "
										style={{
											"min-width": "150px",
											width: "35vw",
											height: "30vh",
											"object-fit": "scale-down",
											float: "right"
										}}
										src="https://res.cloudinary.com/petrep/image/upload/v1632846761/portfolio/Screen_Shot_2021-09-27_at_8.02.30_PM_oogrcj.png"
										alt="A photo of Edian Ibarrola's PetRep Web Application"
									/>
								</a>
								<p>
									<b>
										PetRep was designed to help animals of all species and connect fellow animal
										lovers.
									</b>
									The ability to track individual pets, enclosures - each with their own calendar and
									special information.
								</p>
								<p>
									The PetRep app is also able to reunite lost or found animals with their loved ones,
									or in times of trouble- locate someone nearby who can help an animal in need!
								</p>
								<p>
									<a href="https://petrep.vercel.app/">
										<i>
											<b>Click here or the image to see the app.</b>
										</i>
									</a>
								</p>
								<p>
									<a href="https://github.com/edianibarrola/pet-app-front-end">
										<i className="fab fa-github-alt m-1" /> <b>Click here for github.</b>
									</a>
								</p>
								<b>Built by Edian Ibarrola and James Do with:</b>
								<ul className="menu">
									<li>Html5</li>
									<li> CSS/SCSS</li>
									<li> Javascript</li>
									<li> React</li>
									<li> Bootstrap</li>
									<li> Flux</li>
									<li>Python</li>
									<li>SQL</li>
									<li>SQLAlchemy</li>
									<li>Flask</li>
									<li>Custom Built Api</li>
									<li>External Api</li>
									<li>Firebase</li>
									<li>Cloudinary</li>
									<li>Heroku</li>
								</ul>
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="1">
							<Accordion.Header>Pokependium </Accordion.Header>
							<Accordion.Body>
								<a href="https://www.pokependium.com/">
									<img
										className="shadow "
										style={{
											"min-width": "150px",
											width: "35vw",
											height: "30vh",
											"object-fit": "scale-down",
											float: "right"
										}}
										src="https://res.cloudinary.com/petrep/image/upload/v1632846811/portfolio/Screen_Shot_2021-09-27_at_6.21.31_PM_laeqmp.png"
										alt="A photo of Edian Ibarrola's Pokependium Web Application"
									/>
								</a>
								<p>
									<b>
										Pokependium is my first solo project. I made it because I have been a fan of
										Pokemon for a very long time and found myself in need of a convenient (and free)
										way to track how many copies of each card I own.{" "}
									</b>
									Pokependium allows you to view information for <i> every</i> Card in<i> every </i>{" "}
									Set that has ever existed.
								</p>
								<p>
									Once you create an account you can check off each card you own, and store how many
									copies of each one you have and calculate the value of your collection with live
									market data.
									<i> This makes catchin em all much easier!</i>
								</p>
								<p>
									I plan to add several more features in the near future and have already begun
									tinkering with them.
								</p>
								<p>
									<a href="https://www.pokependium.com/">
										<i>
											<b>Click here or the image to see the app</b>
										</i>
									</a>
								</p>
								<p>
									<a href="https://github.com/edianibarrola/pokependium">
										<i className="fab fa-github-alt m-1" /> <b>Click here for github.</b>
									</a>
								</p>
								Built with:
								<ul className="menu">
									<li>Html5</li>
									<li> CSS/SCSS</li>
									<li> Javascript</li>
									<li> React</li>
									<li> Bootstrap</li>
									<li> Flux</li>
									<li>Python</li>
									<li>SQL</li>
									<li>SQLAlchemy</li>
									<li>Flask</li>
									<li>Custom Built Api</li>
									<li>External Api</li>
									<li>Cloudinary</li>
									<li>Heroku</li>
								</ul>
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="2">
							<Accordion.Header>QR Template Generator</Accordion.Header>
							<Accordion.Body>
								<a href="https://realself-qr-code-maker.herokuapp.com">
									<img
										className="shadow "
										style={{
											"min-width": "150px",
											width: "35vw",
											height: "30vh",
											"object-fit": "scale-down",
											float: "right"
										}}
										src="https://res.cloudinary.com/petrep/image/upload/v1632857758/portfolio/Screen_Shot_2021-09-28_at_3.35.07_PM_ly1kiq.png"
										alt="A photo of Edian Ibarrola's QR code generator Web Application"
									/>
								</a>
								<p>
									<b>
										My wife works harder than <i>anyone</i> in the world{" "}
									</b>
									<i>(except for me in case you are a potential employer). </i>
									We both are employed from home and I am fortunate to get to experience her work
									routine <i> every day! </i> Since she supported me while I studied,
									<i> this App is a great start to paying her back</i> for everything.
									<i> Happy wife = happy life. </i> I hope to find many more ways to make her job run
									effortlessly so she can focus her energy on the more demanding aspects.
								</p>
								<p>
									{" "}
									<a href="https://realself-qr-code-maker.herokuapp.com">
										<i>
											<b>Click here or the image to see the app</b>
										</i>
									</a>
								</p>
								<p>
									<a href="https://github.com/edianibarrola/qrGenForRS">
										<i className="fab fa-github-alt m-1" /> <b>Click here for github.</b>
									</a>
								</p>
								Built with:
								<ul className="menu">
									<li>Html5</li>
									<li> CSS/SCSS</li>
									<li> Javascript</li>
									<li>React</li>
									<li>Canvas</li>
									<li>External Api</li>
								</ul>
							</Accordion.Body>
						</Accordion.Item>
						<Accordion.Item eventKey="3">
							<Accordion.Header>8-bit Music Player </Accordion.Header>
							<Accordion.Body>
								<a href="http://www.edianibarrola.com/musicPlayerWithApi/">
									<img
										className="shadow "
										style={{
											"min-width": "150px",
											width: "35vw",
											height: "30vh",
											"object-fit": "scale-down",
											float: "right"
										}}
										src="https://res.cloudinary.com/petrep/image/upload/v1632846787/portfolio/Screen_Shot_2021-09-28_at_12.10.55_PM_wxdzze.png"
										alt="A photo of Edian Ibarrola's 8-bit Music Player Web Application"
									/>
								</a>
								<p>
									<b>
										This project was more of an exploration of HTML, Javascript and CSS than
										anything.
									</b>
									The 8-bit player utilizes an external API and provides us with some{" "}
									<i>very catchy and nostalgic</i> music. Click a song to select it and manipulate the
									volume and playback controls as you watch Mario dance.
									<i>This web app is also a great way to annoy people. Just leave it on!</i>
								</p>
								<p>
									{" "}
									<a href="http://www.edianibarrola.com/musicPlayerWithApi/">
										<i>
											<b>Click here or the image to see the app</b>
										</i>
									</a>
								</p>
								<p>
									<a href="https://github.com/edianibarrola/musicPlayerWithApi">
										<i className="fab fa-github-alt m-1" /> <b>Click here for github.</b>
									</a>
								</p>
								Built with:
								<ul className="menu">
									<li>Html5</li>
									<li> CSS/SCSS</li>
									<li> Javascript</li>

									<li>External Api</li>
								</ul>
							</Accordion.Body>
						</Accordion.Item>

						<Accordion.Item eventKey="4">
							<Accordion.Header>RS War Cardgame</Accordion.Header>
							<Accordion.Body>
								<a href="https://rswar.herokuapp.com/">
									<img
										className="shadow "
										style={{
											"min-width": "150px",
											width: "35vw",
											height: "30vh",
											"object-fit": "scale-down",
											float: "right"
										}}
										src="https://res.cloudinary.com/petrep/image/upload/v1633639297/portfolio/ezgif.com-gif-maker_2_xyrhic.gif"
										alt="A photo of Edian Ibarrola's RS WAR card game Web Application"
									/>
								</a>
								<p>
									<b>Practice Speed and Logic with React / Js / HTML / CSS </b>I made this as a quick
									challenge for my self in speed and logic. I might add some more features and polish
									it up.
									<i> Theres not much to it </i> I wanted to recreate the game based off the rules.
									<i> Make apps not war!</i>
								</p>
								<p>
									{" "}
									<a href="https://rswar.herokuapp.com/">
										<i>
											<b>Click here or the image to see the app</b>
										</i>
									</a>
								</p>
								<p>
									<a href="https://github.com/edianibarrola/rswar">
										<i className="fab fa-github-alt m-1" /> <b>Click here for github.</b>
									</a>
								</p>
								Built with:
								<ul className="menu">
									<li>Html5</li>
									<li> CSS/SCSS</li>
									<li> Javascript</li>
									<li>React</li>
								</ul>
							</Accordion.Body>
						</Accordion.Item>
					</Accordion>
				</div>
			</div>
		</div>
	);
};
