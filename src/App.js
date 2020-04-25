import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Loader from 'react-loader-spinner'

import styles from './App.module.css'
import NewsRow from './NewsRow'
import CountryChoices from './CountryChoices'

const App = () => {
	const [newsArticles, setNewsArticles] = useState([])
	const [isLoading, setIsLoading] = useState(true)
	const [country, setCountry] = useState('in')

	useEffect(
		() => {
			axios.get(`http://newsapi.org/v2/top-headlines?country=${country}&apiKey=393fe4563d914309858b806b34c113c0`)
				.then(res => {
					setIsLoading(false)
					return res.status === 200 ? res.data : null
				})
				.then(data => setNewsArticles(data.articles))
				.catch(err => {
					setIsLoading(false)
					console.log(err)
				})
		},
		[isLoading]
	);

	const onCountryClick = (code) => {
		setCountry(code)
		setIsLoading(true)
	}

	const openUrl = (url) => {
		window.open(url, '_blank')
	}

	return isLoading ?
		<div className={styles.loader}>
			<Loader
				type='Puff'
				color='#00BFFF'
				height={100}
				width={100}
				timeout={3000}
			/>
		</div>
		:
		<div>
			<div className={styles.country}>
				<CountryChoices onCountryClick={onCountryClick} />
			</div>
			{
				newsArticles.map((newsArticle, index) => (
					<NewsRow key={index} index={index} newsArticle={newsArticle} openUrl={openUrl} />
				))
			}
		</div>
}

export default App;
