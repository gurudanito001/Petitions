import React from 'react';
import Navbar from './navbar';
import imgUrl from '../images/change.jpg'


function Homepage (){
    return(
        <>
            <div style={styles.banner}>
                <Navbar />
                <section className="container mt-auto border">
                    <h3 className="text-white text-center font-weight-normal">
                        Start a Movement | Join Online Movements | Facilitate World Change
                    </h3>
                </section>

                
            </div>

            <section className="container">
                <h4>Featured Petitions</h4>
            </section>

            <section className="container">
                <h4>Trending Petitions</h4>
            </section>
        </>
    )
}

const styles = {
    banner:{
        height: '550px',
        background:'linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(' + imgUrl + ')',
        backgroundBlendMode: 'overlay',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center'
    },
    navbar:{
        backgroundColor: 'rgba(0, 0, 0, 0.9)'
    }
};

export default Homepage;