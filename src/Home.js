import React from 'react'
import Product from './Product'
import "./Home.css"

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        ></Product>
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={239}
          rating={4}
          image="https://images-na.ssl-images-amazon.com/images/I/81O%2BGNdkzKL._AC_SX450_.jpg"
        ></Product>
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71Swqqe7XAL._AC_SX466_.jpg"
        ></Product>
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
        ></Product>
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/6125mFrzr6L._AC_SX355_.jpg"
        ></Product>
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        ></Product>
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image="https://avatars.mds.yandex.net/get-pdb/2480261/9483b78c-c265-47e5-8cc6-3b317deeb51c/s1200"
        ></Product>
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image="https://avatars.mds.yandex.net/get-pdb/27625/2f0aa7c1-b6db-4975-a246-68e7face7231/s1200"
        ></Product>
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image="https://avatars.mds.yandex.net/get-pdb/2838786/2c560e54-6e37-4f95-a155-085fa1bd5e41/s1200"
        ></Product>
        <Product
          id="12321341"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses Paperback"
          price={11.96}
          rating={5}
          image="https://avatars.mds.yandex.net/get-pdb/28866/66541628-aca7-4fab-a478-aa4262499dae/s1200"
        ></Product>
      </div>
    </div>
  );
}

export default Home
