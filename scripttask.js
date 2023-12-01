var request = new XMLHttpRequest();
request.open("GET", "https://restcountries.com/v3.1/all");
request.send();
request.onload = function(){
    var res = JSON.parse(request.response);
    console.log(res);
    // Get all the countries from Asia continent /region using Filter function
    var cnames = res.filter(country => country.region === 'Asia').map(country => country.name.common);
    console.log("Asia:", cnames);

    // Get all the countries with a population of less than 2 lakhs using the filter function
    var popu = res.filter(country => country.population < 200000).map(country => country.name.common);
    console.log(popu);

    // Print the details (name, capital, flag) using the forEach function
    console.log('Details of each country:');
    res.forEach(country => {
      const { name, capital, flags } = country;
      console.log(`Name: ${name.common}, Capital: ${capital}, Flag: ${flags.png}`);
    });

    // Print the total population of countries using the reduce function
    var totalPopulation = res.reduce((acc, country) => acc + (country.population || 0),0);
    console.log('Total Population:', totalPopulation);

    // Print the country that uses US dollars as currency
    var usDollarCountries = res.filter(country => country.currencies && country.currencies.USD);
    console.log('Countries that use US dollars:', usDollarCountries);
  };