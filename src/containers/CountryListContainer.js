import { connect } from 'react-redux';
import CountryList from '../components/CountryList';

const mapStateToProps = (state) => {
  return {
    countries: state.countries
  };
}

const mapDispatchToProps = (dispatch) => ({
  getCountryData() {
    dispatch(() => {
      fetch('https://restcountries.eu/rest/v2/all')
      .then(res => res.json())
      .then(countriesData => {
        dispatch({
          type: 'COUNTRIES_DATA',
          countriesData
        })
      })
    })
  },
  saveCountry(country) {
    dispatch({
      type: 'SELECT_COUNTRY',
      country
    })
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CountryList);
