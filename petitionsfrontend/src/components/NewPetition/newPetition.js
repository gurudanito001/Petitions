import React from 'react';
import Navbar from '../navbar';
import Category from './category';

/* function CategoryBtn(props){
    return(
        <button style={ props.name === props.category ? styles.categoryBtnChecked : styles.categoryBtn} 
        className="btn btn-outline-danger h4" name={props.name} onClick={props.onclick}>
            Criminal Justice
        </button>
    )
} */


export default class NewPetition extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            newPetition: {
                category: "",
                title: "",
                description: "",
                audience: "",
                mediaUrl: "",
                signatories: [],
                dateCreated: ""
            }
        }
    }

    handleChange = (event)=>{
        let newPetition = this.state.newPetition;
        newPetition[event.target.name] = event.target.value;
        this.setState({newPetition: newPetition});
    }

    setCategory = (event) =>{
        console.log(event.target.name);

        let newPetition = this.state.newPetition;
        newPetition.category = event.target.name;
        this.setState({newPetition: newPetition});
    }

    
    render(){
        return(
            <>
                <Navbar />
                <div className="container mt-5">
                    <div className="row">
                        <div className="col-12 col-md-10 offset-md-1 col-lg-8 offset-lg-2">
                            <Category category={this.state.newPetition.category} onclick={this.setCategory} />
                        </div>  
                    </div>
                </div>
            </>
        )
    }
}




