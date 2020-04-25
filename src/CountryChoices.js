import React from 'react'
import PropTypes from 'prop-types'

const CountryChoices = (props) => {

    const country = ['India', 'US', 'Australia', 'New Zealand']
    const countryCode = ['in', 'us', 'au', 'nz']

    return <div>
        <button style={{ padding: '5px', margin: '5px' }} onClick={() => props.onCountryClick(countryCode[0])}>{country[0]}</button>
        <button style={{ padding: '5px', margin: '5px' }} onClick={() => props.onCountryClick(countryCode[1])}>{country[1]}</button>
        <button style={{ padding: '5px', margin: '5px' }} onClick={() => props.onCountryClick(countryCode[2])}>{country[2]}</button>
        <button style={{ padding: '5px', margin: '5px' }} onClick={() => props.onCountryClick(countryCode[3])}>{country[3]}</button>
    </div>
}

CountryChoices.propTypes = {
    onCountryClick: PropTypes.func.isRequired,
}

export default CountryChoices;
