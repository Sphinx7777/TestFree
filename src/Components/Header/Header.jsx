import React from 'react'
import s from './Header.module.scss'
import {Links} from "./Links";


export const Header = () => {

	return (
		<>
		<div className={s.headerWrapper}>
			<header className={s.header}>
				<Links />
			</header>
		</div>
			</>
	)
};

