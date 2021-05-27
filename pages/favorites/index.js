import { useEffect, useState } from "react";
import Layout from "../../components/Layout";
import ShowMovies from "../../components/ShowMovies";

const Favorites = () => {

    return (
        <Layout>
            <main>
                <h1>Your favorite movies: </h1>
                <ShowMovies />
            </main>
        </Layout>
    )
}

export default Favorites;
