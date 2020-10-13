import React from 'react';
import Navbar from './navbar';
import imgUrl from '../images/bannerImg.jpg'


function Homepage (){
    return(
        <>
            <Navbar />
            <div className="" style={styles.banner}>
                This is a container
            </div>
        </>
    )
}

const styles = {
    banner:{
        height: '400px',
        background:'linear-gradient(0deg, rgba(255, 0, 150, 0.9), rgba(255, 0, 150, 0.9)), url(' + imgUrl + ')',
        backgroundColor: 'red',
        backgroundImage: 'url(' + imgUrl + ')',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center'
    }
    
};

export default Homepage;