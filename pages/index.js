import Head from "next/head";
import { Button } from "../components/Button";
import { loadStripe } from "@stripe/stripe-js";
import PageTitle from "../components/PageTitle/PageTitle"
import ProductCard from "../components/ProductCard/ProductCard";
import {flex} from "./../styles/home.module.scss"

export default function Home(props) {

  const products = props.products.slice(0,3);

  const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY)

  return (
    <>
      <Head>
        <meta charset="UTF-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <title>StoreFront</title>
      </Head>
      <PageTitle tagline="Featured Products" title="ValleyRose"></PageTitle>
      <main className={flex}>
        {products.map(product => <ProductCard key={product.uid} product={product}/>)}
      </main>
      
    </>
  )
}


export async function getStaticProps( ) {
  const res = await fetch("https://firstprpj-default-rtdb.firebaseio.com/products.json");
  const productsData = await res.json();
  const products = Object.values(productsData)

  return {
    props: {
      products,
      fallback: false,
    },
    revalidate: 60,
  }
}
