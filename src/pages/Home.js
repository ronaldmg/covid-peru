import React from 'react';
import { Layout } from '../components/Layout';
import Map from '../components/Map';

const HomePage = () => {
    return (
        <Layout title='Vacunación contra el Covid-19'
                subtitle='Información sobre el covid-19 en el Perú'>
            <Map />
        </Layout>
    );
};

export const Home = React.memo(HomePage);
