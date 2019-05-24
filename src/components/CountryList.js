import React, {Component} from 'react'

class CountryList extends Component{

  constructor(props){
    super(props)
    this.state = {
      country: ''
    }
    this.handleCountrySelect = this.handleCountrySelect.bind(this)
  }

  componentDidMount(){
    this.props.getCountryData()
  }

  createDropDownList(){
    const dropdown = this.props.countries.map((country, index) => {
      return <option value={index} key={index}>{country.name}</option>
    })
    return dropdown
  }

handleCountrySelect(event){
  this.setState({ country: event.target.value });
  const index = event.target.value;
  const selectedCountry= this.props.countries[index]
  const newCountry = {
    name: selectedCountry.name,
    capital: selectedCountry.capital,
    flag: selectedCountry.flag
  }
  this.props.saveCountry(newCountry)
}

  render(){
    return(
      <div>
        <select className="ui dropdown" onChange={this.handleCountrySelect} name="country">
          <option>Countries</option>
            {this.createDropDownList()}
        </select>
      </div>
    )
  }

}

export default CountryList
