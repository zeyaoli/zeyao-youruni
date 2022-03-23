function SearchBar({onChange, placeholder}){
  return(
    <div className="search-bar">
      <label htmlFor='searchInput'>
        <span className='visually-hidden'>Search</span>
      </label>
      <input role="search" className="searchInput" id="searchInput" type="text" onChange={onChange} placeholder={placeholder} />

      <style jsx>{`
          label{
            width: 0;
          }
          .visually-hidden{
            visibility: hidden;
            width: 0;
            margin: 0;
            padding: 0;
          }
          .search-bar{
            max-width: 384px;
            display: flex;
          }
          .searchInput{
            width: 100%;
            border: 2px solid #eeeeee;
            border-radius:4px;
            padding: var(--inner-padding);
            color: var(--text-color-light);

          }
        `}</style>
    </div>
  )
}

export default SearchBar;