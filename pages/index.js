import { useState } from 'react';

import Head from 'next/head'
import Hero from '../components/Hero';
import csvToArray from '../lib/csvToArray';
import cardStyle from '../styles/Card.module.css';

import SearchBar from '../components/SearchBar';


export async function getStaticProps() {
  const res = await fetch('https://gist.githubusercontent.com/simonlast/d5a86ba0c82e1b0d9f6e3d2581b95755/raw/f608b9b896dd3339df13dae317998d5f24c00a50/edu-scorecard.csv');
  const csv = await res.text(); 
  // Use the helper function to turn CSV into array
  let cardsArr = await csvToArray(csv);
  return {
    props: {cardsArr}, // will be passed to the page component as props
  }
}


export default function Home({cardsArr}) {
  const [allData, setAllData] = useState(cardsArr);
  const [filteredData, setFilteredData] = useState(cardsArr);

  const [searchValue, setSearchValue] = useState('');
  // Search function
  function handleSearch(value){
    setSearchValue(value);
    
    let result = [];
    // convert it into lowercase and filter the data based on our search
    result = allData.filter((data) => {
      return Object.values(data).join('').toLowerCase().includes(searchValue.toLowerCase())
    });
  
    setFilteredData(result);
    setSearchValue(value);

  }
  // generate the individual card component 
  const cards = filteredData.map(({INSTNM, UNITID, CITY, STABBR, INSTURL})=>{
    return(
      <div className={cardStyle.card} key={UNITID}>
        <p className={cardStyle.cardLocation}>{CITY} <span className="">·</span> {STABBR} </p>
        <h3 className={cardStyle.cardTitle}>{INSTNM}</h3>
        <a href={`https://${INSTURL}`} target="_blank" rel="noopener noreferrer">{INSTURL}</a>
      </div>
    )
  })

  return (
    <div className="main-container">
      <Head>
        <title>YourUni</title>
        <meta name="description" content="Zeyao's Notion Takehome" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="outer">
        <div className="inner">
          <Hero /> 
          <SearchBar placeholder="Search..." onChange={e=>handleSearch(e.target.value)}/>
          <section className="card-wrapper">
            {cards}
          </section>
        </div>
      </div>

      <style jsx>{`
        .main-container .inner{
          display: flex;
          flex-direction: column;
        }
        .card-wrapper{
          display: grid;
          padding-top: 50px;
          grid-template-columns:repeat(auto-fill, minmax(282px, 1fr) ) ;;
          gap: calc(var(--gap) * 2) var(--gap);
          padding-bottom: 100px;
        }
      `}
      </style>
    </div>
  )
}
