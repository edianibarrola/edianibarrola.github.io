import React from "react";

export const AboutMePage = () => {
	return (
		<div className="container w-50">
			<div className="row">
				<div className="col">
					<h1>Edian Ibarrola</h1>
					<p>
						I was born in Mexico and raised in Miami. I enjoy capturing the real world. Currently I am a
						self employed Full Stack Web Developer and part-time Instructor for 4Geeks Coding Academy. On my
						spare time I make stuff, make music, garden, do Improv and play with my Wife , cats, dog, snake
						and tortoises. If I had to pick one, I would choose Lord of the Rings over any other trilogy. I
						Also collect Pokemon stuff and am fascinated by ancient ruins so choosing a birthday or
						christmas gift for me is very easy!
					</p>
					<p>Currently Living in Miami - Open to working remote.</p>

					<div className="col"></div>
					<div className="col">
						<p>
							<a href="mailto:edianibarrola@gmail.com">
								<i className="fas fa-envelope fa-2x" />
								{"   "}
								Please email me with any questions or suggestions.
							</a>
						</p>
						<a
							href="https://res.cloudinary.com/petrep/image/upload/v1632859909/portfolio/Edian_Ibarrola_Resume_10-08-2021-09-58-41_oyoynt.pdf"
							download>
							<p>
								<i className="fas fa-file-pdf fa-2x" />
								{"  "} Download a copy of my CV.
							</p>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};
