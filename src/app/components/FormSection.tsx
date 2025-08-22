"use client";


import React, { useState } from "react";
import { useForm, Controller } from "react-hook-form"; 
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import Select from "react-select";
import FormEmbed from "@/app/ContactForm/page";

// Validation schema using Yup
const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  phone: yup.string().required("Phone number is required"),
  email: yup.string().email("Invalid email").required("Email is required"),
  service: yup.object().required("Please select a service"),
  message: yup.string().required("Message is required"),
  terms: yup.boolean().oneOf([true], "You must accept the Privacy Policy & Terms"),
});


const customStyles = {
  control: (base: any) => ({
    ...base,
    backgroundColor: 'white',
    borderColor: '#ccc',
    borderRadius: '8px',
    padding: '6px',
    '&:hover': {
      borderColor: '#999',
    },
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    backgroundColor: state.isSelected ? '#E98305' : 'white',
    color: state.isSelected ? 'white' : 'black',
    padding: '10px',
    fontSize: '14px',
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: 'black', // Changed to black on hover
      color: 'white',
    },
  }),
  menu: (provided: any) => ({
    ...provided,
    backgroundColor: 'white',
    borderRadius: '8px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
  }),
  singleValue: (provided: any) => ({
    ...provided,
    color: 'black',
  }),
};


// Service options for Select input
const services = [
  { value: "ai-development", label: "AI Development" },
  { value: "web-development", label: "Web Development" },
  { value: "mobile-apps", label: "Mobile Apps" },
];

const ContactForm: React.FC = () => {
  const [submitSuccess, setSubmitSuccess] = useState(false); // State for success message
  const [loading, setLoading] = useState(false); // State for loading

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    console.log("Form Submitted:", data);

    // Show loader during submission
    setLoading(true);

    try {
      // Simulate API call or form submission logic
      // Here you can send data to the backend (e.g., using fetch or axios)
      
      // Simulate a delay to show the loader
      setTimeout(() => {
        setSubmitSuccess(true);
        setLoading(false); // Hide loader after submission is complete
      }, 2000); // Simulate a 2-second delay (can be adjusted)

    } catch (error) {
      console.error("Error submitting form:", error);
      setLoading(false); // Hide loader if there is an error
    }
  };

  return (
    <div id="contact" className="contact-form-container container">
      <div className="row">
        <div className="col-md-6">
          <h2>
            Are you ready to take your business to the next level with{" "}
            <span className="yllo-txt">PRIMOTECH AI</span>?
          </h2>
          <p className="form-sub-txt">
            We specialize in providing a comprehensive suite of AI-driven solutions, including bespoke Large Language Models (LLMs).
          </p>
        </div>
        <div className="col-md-6">
        <FormEmbed />
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
