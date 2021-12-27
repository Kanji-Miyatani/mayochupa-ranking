import React from 'react'
import Product from './Product';
import '../Style/Home.css';
function Home() {
    return (
        <div className="home">
           <div className="home__container">
              <img className="home__image" src="https://m.media-amazon.com/images/I/61PzunHdIUL._SX3000_.jpg" alt="" />
                <div className="home__row">
                        <Product title="マヨネーズ"
                        price="500"
                        stars="2"
                        image="https://img.kewpie.co.jp/products_src/g3/imgs/4901577042072L.jpg" />
                        <Product />
                        <Product />
                </div>
                <div className="home__row">
                    <Product />
                    <Product />
                </div>
                <div className="home__row">
                    <Product />
                </div>
           </div>
        </div>
    )
}

 export default Home
