import Link from 'next/link';
function Header(){
  return(
    <header>
      <div className="outer">
          <div className="inner">
            <Link href="/" passHref><strong className="logo-text">Youruni</strong></Link>
            <nav role="navigation" aria-label="main navigation" className="nav">
              <ul aria-label="menu" className='nav-list'>
                  <li className='nav-item active'><Link href="/">Product</Link></li>
                  <li className='nav-item'><Link href="/">Download</Link></li>
                  <li className='nav-item'><Link href="/">Pricing</Link></li>
              </ul>
            </nav>
          </div>
        </div>
        <style jsx>{`
          header{
            color: var(--text-color-dark);
          }
          header .inner{
            display: flex;  
            flex-direction: row;
            justify-content: space-between;
            align-items : center;
          }
          header .logo-text{
            font-size: 24px;
          }
          .inner{
            padding-top: 40px;
          }
          nav ul.nav-list{
            display: flex;
            flex-direction: row;
            margin: 0;
            padding: 0;
            gap: var(--gap);
          }      
          nav li.nav-item{
            list-style: none;
            font-size: 17px;
          }
          nav li.nav-item.active{
            border-bottom: 2px solid var(--accent-color);
          }   

          @media screen and (max-width: 375px){
              header .inner{
                flex-direction: column;
              }
          }
        `}
        </style>
    </header>
  ) 
}

export default Header;