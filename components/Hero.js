import Image from 'next/image';
function Hero(){
  return(
    <section className="hero">
      <div className="hero-text">
        <h1 className="hero-title">Find the <br className='hide-mobile'/>university that’s right for you.</h1>
        <h2 className='hero-subtitle'>Tenetur ex explicabo et illo. Recusandae fugit eius voluptatem. Voluptas atque autem totam.</h2>
      </div>
      <div className="hero-image-wrapper">
        <Image src="/hero-image.webp" alt="a man standing on top of a mountain" width={383} height={383}/>
      </div>

      <style jsx>{`
        .hero{
          max-width: 996px;
          margin: 80px auto 100px auto;
          display: flex;
          flex-direction: column-reverse;
          align-items: center;
        }
        .hero .hero-text{
          width: 100%;  
          color: var(--text-color-dark);
          margin-top: var(--gap);
        }
        .hero .hero-title{
          font-size: 69px;
          font-weight: bold;
          letter-spacing: -1.85px;
          line-height: 1;
        }
        .hero .hero-subtitle{
          font-weight: 400;
          font-size: 20px;
          line-height: 145%;
          margin-top: var(--gap);
        }

        @media screen and (min-width: 768px){
          .hero{
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: var(--gap);
          }
          .hero .hero-text{
            margin-top: 0;
            width: calc((100% - var(--gap)/ 2) / 10 * 6);
          }
        }
      `}
      </style>
    </section>
  )
}

export default Hero;