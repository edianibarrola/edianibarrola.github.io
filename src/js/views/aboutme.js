import React from "react";

export const AboutMePage = () => {
	return (
		<div style={{ "min-width": "300px" }} className="container w-50">
			<div className="row">
				<div className="col">
					<h1>Edian Ibarrola</h1>
					<p>
						I was born in Mexico, raised in Hollywood and currently living in Miami. I enjoy creating things
						and being helpful. I am a Full Stack Web Developer and part-time Instructor for 4Geeks Coding
						Academy. Prior to my current position, I helped run KidTec. I managed social media, curriculum
						development and taught students our extracurricular STEM based Coding program at several
						elementary schools throughout South Florida.
					</p>
					<p>
						On my {'"spare"'} time I design and make stuff with my 3d printer, sculpt with clay, airbrush,
						make music, garden, do improv and sing musicals with my Wife and play with my cats, dog, snake
						and tortoises. If I had to pick one, I would choose Lord of the Rings over any other trilogy. I
						have been collecting Pokemon since the red and blue days and am fascinated by ancient ruins so
						choosing a birthday or christmas gift for me is very easy!
					</p>
					<p>Currently Living in Miami - Open to working remote.</p>

					<div className="col"></div>
					<div className="col">
						<p>
							<a href="mailto:edianibarrola@gmail.com">
								{"    "}
								<i className="fas m-2 fa-envelope fa-2x" />
								{"    "}
								Please email me with any questions or suggestions.
							</a>
						</p>
						<p>
							<a
								href="https://res.cloudinary.com/petrep/image/upload/v1633025865/portfolio/edianibarrolaresume_ulp8se.pdf"
								download>
								<i className="fas m-2 fa-file-pdf fa-2x" />
								{"    "}
								Download a copy of my CV.
							</a>
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
