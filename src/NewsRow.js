import React from 'react'
import PropTypes from 'prop-types'

import styles from './NewsRow.module.css'

const NewsRow = (props) => {
    const { title, author, url } = props.newsArticle
    const { index } = props
    const publishedAt = new Date(props.newsArticle.publishedAt)

    return <div className={styles.authCard}>
        <div className={styles.container} onClick={() => { props.openUrl(url) }}>
            <div className={styles.title}>
                {`${index + 1}. ${title}`}
            </div>
            <div className={styles.author}>{author}</div>
            <div className={styles.publishedAt}>
                {`Today, ${publishedAt.getHours()}:${publishedAt.getMinutes() > 9 ? publishedAt.getMinutes() : `0${publishedAt.getMinutes()}`}`}
            </div>
        </div>
    </div>
}

NewsRow.propTypes = {
    newsArticle: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired,
    openUrl: PropTypes.func.isRequired,
}

export default NewsRow
