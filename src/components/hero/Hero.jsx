/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unknown-property */
import  React ,{ useState,useEffect} from 'react'
import {Modal, ModalBody, Row } from "reactstrap"
import heroImg from '../../../profile.jpg'
import './Hero.css'

const Hero = ({state}) => {
    
    const [modal, setModal] = useState(false);
    const [description,setDescription]=useState("");

    useEffect(()=> {
        const {contract}=state;
        const Profiledescription = async()=>{
            const descriptionText = await contract.methods.description().call();
            setDescription(descriptionText);
        }
        contract && Profiledescription();
    },[state])

    return (
        <section className="hero">
        <div className="container">
            <div className="hero-text">
                <p> <span>Md Amaan </span>
                    is a  Blockchain Developer From Kolkata (India).</p>
                <h1> This is my portfolio website fully based on blockchain and IPFS.</h1>
                <h3>{description}</h3>
                {/*  =========popup bootstrap==========  */}

                <Modal size='md' isOpen={modal} toggle={() => setModal(!modal)}>
                    <ModalBody>
                            <Row className="text-align">
                                <label htmlFor="" toggle={() => setModal(!modal)}>
                                    Mail Id -intellectance022@gmail.com
                                </label>
                            </Row>
                    </ModalBody>
                </Modal>

                <button className="msg-btn" onClick={() => setModal(true)}>Get in Touch</button>
                {/*  =========popup bootstrap end==========  */}

            </div>
            <div className="hero-img">

                <div className="img-container">
                    <img src={heroImg} alt="profilePhoto" />
                </div>
            </div>
        </div>
    </section>
    )
}

export default Hero
