// CountryInfo.jsx
import React from 'react';

function CountryInfo({ countryData }) {
  return (
    <div className="country-info">
      <img
        src={countryData.flags.svg}
        alt={`${countryData.name.common} flag`}
        className="flagImage"
      />

      <h2>{countryData.name.common}</h2>

      <div className="row">
        <div className="dataRow">
          <h4>Capital:</h4>
          <span>{countryData.capital?.[0] || "N/A"}</span>
        </div>
      </div>

      <div className="row">
        <div className="dataRow">
          <h4>Continent:</h4>
          <span>{countryData.continents?.[0] || "N/A"}</span>
        </div>
      </div>

      <div className="row">
        <div className="dataRow">
          <h4>Population:</h4>
          <span>{countryData.population?.toLocaleString() || "N/A"}</span>
        </div>
      </div>

      <div className="row">
        <div className="dataRow">
          <h4>Currency:</h4>
          <span>
            {countryData.currencies
              ? `${countryData.currencies[Object.keys(countryData.currencies)[0]].name} - ${
                  Object.keys(countryData.currencies)[0]
                }`
              : "N/A"}
          </span>
        </div>
      </div>

      <div className="row">
        <div className="dataRow">
          <h4>Common Languages:</h4>
          <span>
            {countryData.languages
              ? Object.values(countryData.languages).join(', ')
              : "N/A"}
          </span>
        </div>
      </div>

      <div className="row">
        <div className="dataRow">
          <h4>Borders:</h4>
          <span>
            {countryData.borders
              ? countryData.borders.join(', ')
              : "None"}
          </span>
        </div>
      </div>

      <div className="row">
        <div className="dataRow">
          <h4>Area:</h4>
          <span>{countryData.area ? `${countryData.area} km²` : "N/A"}</span>
        </div>
      </div>

      <div className="row">
        <div className="dataRow">
          <h4>Calling Area:</h4>
          <span>
            {countryData.idd?.root && countryData.idd?.suffixes
              ? `${countryData.idd.root}${countryData.idd.suffixes[0]}`
              : "N/A"}
          </span>
        </div>
      </div>

      <div className="row">
        <div className="dataRow">
          <h4>Capital Latitude & Longitude:</h4>
          <span>
            {countryData.capitalInfo?.latlng
              ? `${countryData.capitalInfo.latlng[0]}, ${countryData.capitalInfo.latlng[1]}`
              : "N/A"}
          </span>
        </div>
      </div>

      <div className="row">
        <div className="dataRow">
          <h4>Time Zones:</h4>
          <span>
            {countryData.timezones
              ? countryData.timezones.join(', ')
              : "N/A"}
          </span>
        </div>
      </div>
    </div>
  );
}

export default CountryInfo;
