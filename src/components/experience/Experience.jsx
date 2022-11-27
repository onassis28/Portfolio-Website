import React from 'react';
import './experience.css';
import { BsCheckCircle } from 'react-icons/bs';

const Experience = () => {
	return (
		<section id='experience'>
			<h5>The Skillset i bring along</h5>
			<h2>My Experience</h2>

			<div className='container experience__container' id='ex__cont'>
				<div className='experience__skills'>
					<h3>Frontend Skills</h3>
					<div className='experience__content'>
						<article className='experience__details'>
							<BsCheckCircle className='experience__icon' />
							<div>
								<h4>HTML5</h4>
								<small>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsCheckCircle className='experience__icon' />
							<div>
								<h4>CSS3</h4>
								<small>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsCheckCircle className='experience__icon' />
							<div>
								<h4>TypeScript/JavaScript</h4>
								<small>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsCheckCircle className='experience__icon' />
							<div>
								<h4>Tailwind CSS</h4>
								<small>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsCheckCircle className='experience__icon' />
							<div>
								<h4>React/NextJS</h4>
								<small>Experienced</small>
							</div>
						</article>
					</div>
				</div>

				<div className='data__dev'>
					<h3>Data Skills</h3>
					<div className='experience__content'>
						<article className='experience__details'>
							<BsCheckCircle className='experience__icon' />
							<div>
								<h4>Python</h4>
								<small>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsCheckCircle className='experience__icon' />
							<div>
								<h4>Pandas/Numpy</h4>
								<small>Experienced</small>
							</div>
						</article>
						<article className='experience__details'>
							<BsCheckCircle className='experience__icon' />
							<div>
								<h4>SQL/NoSQL</h4>
								<small>Experienced</small>
							</div>
						</article>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Experience;
