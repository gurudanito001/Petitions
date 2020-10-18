import React from 'react';

const Category = (props)=>{
    return(
        <section className="text-center px-3">
            <header className="mb-5">
                <h1>
                    Select a Category for your Petition
                </h1>
                <p>
                Selecting a topic allows CHNG.org to recommend your petition to interested supporters
                </p>
            </header>
            <p className="d-flex justify-content-around">
                <button style={props.category === "animals" ? styles.categoryBtnChecked : styles.categoryBtn}
                    className="btn btn-outline-danger" name="animals" onClick={props.onclick}>
                    Animals
                </button>

                <button style={props.category === "humanRights" ? styles.categoryBtnChecked : styles.categoryBtn}
                    className="btn btn-outline-danger" name="humanRights" onClick={props.onclick}>
                    Human Rights
                </button>

                <button style={props.category === "health" ? styles.categoryBtnChecked : styles.categoryBtn}
                    className="btn btn-outline-danger" name="health" onClick={props.onclick}>
                    Health
                </button>

                <button style={props.category === "environment" ? styles.categoryBtnChecked : styles.categoryBtn}
                    className="btn btn-outline-danger small" name="environment" onClick={props.onclick}>
                    Environ <br/>ment
                </button>
            </p>

            <p className="d-flex justify-content-around">
                <button style={props.category === "politics" ? styles.categoryBtnChecked : styles.categoryBtn}
                    className="btn btn-outline-danger" name="politics" onClick={props.onclick}>
                    Politics
                </button>

                <button style={props.category === "localEvents" ? styles.categoryBtnChecked : styles.categoryBtn}
                    className="btn btn-outline-danger" name="localEvents" onClick={props.onclick}>
                    Local Events
                </button>

                <button style={props.category === "economicEquality" ? styles.categoryBtnChecked : styles.categoryBtn}
                    className="btn btn-outline-danger" name="economicEquality" onClick={props.onclick}>
                    Economic Equality
                </button>

                <button style={props.category === "disability" ? styles.categoryBtnChecked : styles.categoryBtn}
                    className="btn btn-outline-danger" name="disability" onClick={props.onclick}>
                    Disability
                </button>
            </p>

            <p className="d-flex justify-content-around">
                <button style={props.category === "criminalJustice" ? styles.categoryBtnChecked : styles.categoryBtn}
                    className="btn btn-outline-danger" name="criminalJustice" onClick={props.onclick}>
                    Criminal Justice
                </button>

                <button style={props.category === "migration" ? styles.categoryBtnChecked : styles.categoryBtn}
                    className="btn btn-outline-danger" name="migration" onClick={props.onclick}>
                    Migration
                </button>

                <button style={props.category === "education" ? styles.categoryBtnChecked : styles.categoryBtn}
                    className="btn btn-outline-danger" name="education" onClick={props.onclick}>
                    Education
                </button>

                <button style={props.category === "racialInjustice" ? styles.categoryBtnChecked : styles.categoryBtn}
                    className="btn btn-outline-danger" name="racialInjustice" onClick={props.onclick}>
                    Racial Injustice
                </button>
            </p>
        </section>
    )
}

const styles = {
    categoryBtn: {
        height: '100px',
        width: '100px',
        borderRadius: '50px',
        border: '2px solid #d9534f',
        outline: 'none',
        fontSize: "18px",
        lineHeight: "20px"
    },
    categoryBtnChecked: {
        height: '100px',
        width: '100px',
        borderRadius: '50px',
        border: '2px solid #d9534f',
        outline: 'none',
        backgroundColor: '#d9534f',
        color: 'white',
        fontSize: "18px",
        lineHeight: "20px"
    }
    
}

export default Category;