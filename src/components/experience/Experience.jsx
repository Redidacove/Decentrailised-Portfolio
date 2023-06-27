/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { SlCalender } from "react-icons/sl"
import './Experience.css'
import React, {useState,useEffect} from 'react'

const Experience = ({state}) => {
    const [education, setEducation] = useState("");
    useEffect(()=>{
        const {contract}=state;
        const educationDetails=async()=>{
            const educations=await contract.methods.allEducation().call();
            setEducation(educations);
        }
        contract && educationDetails();
    },[state])
    return (
        <section className="exp-section">
            <h1 className="title">Experience & Education </h1>

            <div className="container">

                <div className="education">
                    <h1 className="edu-tittle">Education</h1>
                    {education!=="" &&education.map((edu)=>{
                        return (   
                        <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> {edu.date}
                        </p>
                        <h3 className="card-text2">{edu.degree}</h3>
                        <p className="card-text3">{edu.description}</p>
                        <p className="card-text4">
                        {edu.institutionName}
                        </p>
                    </div>)
                    })}
                 
                   
                </div>
                {/* experience */}
                <div className="education">
                    <h1 className="edu-tittle">Experience</h1>
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' /> March 2023 - Present
                        </p>
                        <h3 className="card-text2">Blockchain Development Learning  </h3>
                        <p className="card-text3">learned about solidity Gas optimization and other core things that increased by knoiwledge about solidity and Evm and how things work under the hood ,now making some Proof of work for myself.</p>
                        <p className="card-text4">
                           Blockchain
                        </p>
                    </div>
                    {/* card2 */}
                    
                    {/* card3 */}
                    <div className="edu-card">
                        <p className="card-text1">
                            <SlCalender className='icon' />November 2022 - February 2023
                        </p>
                        <h3 className="card-text2">Blockchain Developer Intern</h3>
                        <p className="card-text3">Worked in Metafy as an intern working on a nft staking project which was on Erc721 standard  also user chainlink datafeed and used ethers for testing it.</p>
                        <p className="card-text4">
                            Metafy
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Experience
