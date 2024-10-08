
import { useRef, useState, useEffect } from "react";
import "../App.css";
import Swal from 'sweetalert2';
import iconUp from '../assets/icon-up.png';
import { statesList } from "./data";


function Email() {
const fileInputRef = useRef(null);
const [formData, setFormData] =  useState({
    inquiryType: '',
    firstName: '',
    lastName: '',
    email: '',
    phoneNumber: '',
    address: '',
    city: '',
    state: '',
    zipCode: '',
    vin: '',     
    comment: ''
});
    useEffect(() => {
    window.scrollTo(0, 0);
    }, []); 

const handleChange = (e) => {
    const{name,value} = e.target;
    setFormData(prevState => ({
        ...prevState,
        [name]:value
    }))
}

const handleSubmit = (event) => {
    event.preventDefault();
    
    for (let key in formData) {
        if (formData[key] === "" ){
            Swal.fire({
                title: "Attention !",
                text: "Please provide all necessary details in the input area.",
                icon: "warning"
            });
            return;
        }
    }
    Swal.fire({
        title: 'Form Submitted!',
        text: 'Thank you for your submission. Press OK to close.',
        icon: 'success',
        confirmButtonText: 'OK'
    }).then((result) => {
        if (result.isConfirmed) {
            if (fileInputRef.current) {
                fileInputRef.current.value = '';
            }
            console.log('Form submission confirmed');
        }
    });
    };


    return (
    <div className="email-form">
        <div className='form-intro'>
        <h3 className="form-top">We're here to help</h3>
        <p className="text-form">We look forward to hearing from you if you have any questions or feedback on our products and services. 
            To contact us, please fill out the form below.</p>
            <hr className='form-line'/>
            </div>
            
    <form className="form-cont" onSubmit={handleSubmit}>
    <div className='form-group'>
    <p>Inquiry Type</p>
    <select className='the-form' name="inquiryType" value={formData.inquiryType} onChange={handleChange}>
        <option disabled>Please select inquiry type</option>
        <option value>Roadside</option>
        <option value>Customer Care</option>
        <option>General</option>
    </select>
    </div>
    
    <div className='form-group'>
    <label for="first name ">First Name</label>
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange}/>
    </div>

    <div className='form-group'>
    <label for="first name ">Last Name</label>
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange}/>
    </div>

    <div className='form-group'>
    <label for="first name ">Email</label>
        <input type="text" name="email" value={formData.email} onChange={handleChange} />
    </div>

    <div className='form-group'>
    <label for="first name ">Phone number</label>
        <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
    </div>

    <div className='form-group'>
    <label for="first name ">Address</label>
        <input type="text" name="address" value={formData.address} onChange={handleChange} />
    </div>

    <div className='form-group'>
    <label for="first name ">City</label>
        <input type="text" name="city" value={formData.city} onChange={handleChange}/>
    </div>

    <div className='form-group'>
    <label for="first name ">State</label>
    <select className='the-form' name="state" value={formData.state} onChange={handleChange}>
        <option disable >Please select your state</option>
        {
            statesList.map((state,index) => (
                <option key={index} 
                        value={state}>{state}</option>
            ))
        }
    </select>
    </div>

    <div className='form-group'>
    <label for="first name ">Zip Code</label>
        <input type="text" name="zipCode" value={formData.zipCode} onChange={handleChange} />
    </div>

    <div className='form-group'>
    <label for="first name ">Vehicle Identification Number (required, if inquiry is related to a vehicle)</label>
        <input type="text" name="vin" value={formData.vin} onChange={handleChange} />
    </div>

    <div className='form-group'>
    <label for="first name ">Comment</label>
        <input type="text" name="comment" value={formData.comment} onChange={handleChange} />
    </div>

    <div className='form-group'>
    <label for="first name ">Attachment</label>
        <input type="file" className='attachment' ref={fileInputRef}/>
    </div>
    <div className='form-group'>
    <button className="form-button"type='submit'>Submit</button>
    </div>

    </form>
    <a href="#top" class="back-top">
        <img className='icon-form'src={iconUp} alt="pic"/>
    </a>

    <div>
    <p className="bottom-form">© 2024 Mercedes-Benz USA, LLC</p>
    </div>
    </div>
)
}
export default Email;
