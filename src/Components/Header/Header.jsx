import React from 'react'
import s from './Header.module.scss'
import {Links} from "./Links";


export const Header = () => {

	return (
		<>
		<div className={s.footerWrapper}>
			<footer className={s.footer}>
				<Links />
			</footer>
		</div>
			</>
	)
};

