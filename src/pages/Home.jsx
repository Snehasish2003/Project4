import React, { useEffect } from 'react';
import Page2 from '../components/page2/Page2';
import Page3 from '../components/Page3';
import Page4 from '../components/Page4';
import Page5 from '../components/Page5';
import Page1 from '../components/Page1';
import Page6 from '../components/Page6';
import Layout from '../components/layout';
import PricingTable from '../components/Pricing/Pricing';
import Page8 from '../components/Page8';

const Home = () => {
    useEffect(() => {
        const handleScrollToPage3 = () => {
            const page3Element = document.getElementById('page3');
            const page2Element = document.getElementById('page2');
            if (page3Element) {
                page3Element.scrollIntoView({ behavior: 'smooth' });
            }
            if (page2Element) {
                page2Element.scrollIntoView({ behavior: 'smooth' });
            }
        };

        window.addEventListener('scrollToPage3', handleScrollToPage3);
        window.addEventListener('scrollToPage2', handleScrollToPage3);
        return () => {
            window.removeEventListener('scrollToPage3', handleScrollToPage3);
            window.removeEventListener('scrollToPage2', handleScrollToPage3);
        };
    }, []);

    return (
        <Layout>
            <Page1 />
            <Page2 id="page2"/>
            <Page3 id="page3" />
            <Page4 />
            <Page5 />
            <Page6 />
            <PricingTable />
            <Page8 />
        </Layout>
    );
};

export default Home;
