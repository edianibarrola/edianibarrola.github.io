import React from "react";
import Accordion from "react-bootstrap/Accordion";

export const CodePage = () => {
	return (
		<div className="container">
			<div className="row">
				<div className="col-12">
					<h1>Code Projects</h1>
				</div>
				<div className="col-12">
					<Accordion defaultActiveKey="0" flush>
						<Accordion.Item eventKey="0">
							<Accordion.Header>Pokependium </Accordion.Header>
							<Accordion.Body>
								<p>
									<b>
										Pokependium is my first solo project. I made it because I have been a fan of
										Pokemon for a very long time and found myself in need of a convenient (and free)
										way to track how many copies of each card I own.
									</b>
									Pokependium allows you to view information for <i>every</i> Card in<i>every</i> Set
									that has ever existed. Once you create an account you can check off each card you
									own, and store how many copies of each one you have.
									<i>This makes catchin em all much easier!</i>
								</p>
								<p>
									I plan to add several more features in the near future and have already begun
									tinkering with them.
								</p>
								Built with:
								<ul>
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
						<Accordion.Item eventKey="1">
							<Accordion.Header>PetRep</Accordion.Header>
							<Accordion.Body>
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
									or in times of need- locate someone nearby who can help an animal in need!
								</p>
								Built with:
								<ul>
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
					</Accordion>
				</div>
			</div>
		</div>
	);
};
