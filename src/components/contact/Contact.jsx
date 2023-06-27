/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import './Contact.css'
import React, {useState,useEffect} from 'react';

const Contact = ({state}) => {
    const [resume,setResume]=useState("");
    useEffect(()=>{
        const {contract}=state;
        const resumeDetails=async()=>{
            //event.preventDefault();
            const resumeCid= await contract.methods.resumeLink().call();
            console.log(resumeCid)
            setResume("https://gateway.pinata.cloud/"+resumeCid);
        }
        contract && resumeDetails;
    },[state])
 
    return (
        <section className="contact-section">
            <h1 className="title">
                Interested?
                Let's Get In Touch!
            </h1>
            <a href={'https://gateway.pinata.cloud/ipfs/QmYnCo8ETCadtnkEexXhRomPUf48WiUDcP1BKuCTaZVZLB'} target='_blank' rel="noopener noreferrer">
                <button className="downlodeBTN">
                    Get Resume
                </button>
            </a>

        </section>
    )
}

export default Contact
