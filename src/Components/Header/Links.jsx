import React from 'react'
import s from './Header.module.scss'
import organizer from "../images/organizer.png";
import socialNetwork from "../images/socialNetwork.png";
import git from "../images/git.ico";
import mail from "../images/mail.ico";
import test from "../images/test.ico";


export const Links = () => {

	return (
		<>
			<a className={s.link}
				 target='_blank'
				 rel='noopener noreferrer'
				 href="https://sphinx7777.github.io/testFree_3">
				<img className={s.linkImg}
						 src={test}
						 alt="Test 1"/>
				<span className={s.linkTitle}>
								 Test_2
							 </span>
			</a>

			<div className={s.LinkWrapper}>
				<div className={s.linkLineWrapper}>
					<a className={s.link}
						 target='_blank'
						 rel='noopener noreferrer'
						 href="https://sphinx7777.github.io/reactTypeScript">
						<img className={s.linkImg}
								 src={organizer}
								 alt="ToDo"/>
						<span className={s.linkTitle}>
									 ToDo
								 </span>
					</a>
					<a className={s.link}
						 target='_blank'
						 rel='noopener noreferrer'
						 href="https://sphinx7777.github.io/SocialNetvork">
						<img className={s.linkImg}
								 src={socialNetwork}
								 alt="Social network"/>
						<span className={s.linkTitle}>
									 Social_Network
								 </span>
					</a>
					<a className={s.link}
						 target='_blank'
						 rel='noopener noreferrer'
						 href="https://github.com/Sphinx7777?tab=repositories">
						<img className={s.linkImg}
								 src={git}
								 alt="Гитхаб"/>
						<span className=
										{s.linkTitle}>
									 Git</span>
					</a>
				</div>
			</div>
			<div>
				<a className={s.linkPost}
					 target='_blank'
					 rel='noopener noreferrer'
					 href="mailto:Spamoglot13@gmail.com">
					<img className={s.linkImg}
							 src={mail}
							 alt="Social network"/>
					<span className={s.linkTitle}>
								 Spamoglot13@gmail.com
							 </span>
				</a>
			</div>
		</>
	)
};

