import React, { useState } from "react";
import "./ContactForm.css";
import contactUs from "../DataBase/contactUs";
import { useSelector } from "react-redux";

const ContactForm = () => {
	const { currentUser: User } = useSelector((state) => state.user);
	const [formData, setFormData] = useState({
		fullName: "",
		email: "",
		contactNumber: "",
		subject: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData({
			...formData,
			[name]: value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		// Handle form submission logic here, e.g., sending data to server
		console.log(formData);
		contactUs(User, formData);
		alert("Thank You For Your Feedback!!");
		setFormData({
			fullName: "",
			email: "",
			contactNumber: "",
			subject: "",
			message: "",
		});
	};

	return (
		<div className="container">
			<div className="inner-container">
				<h1 className="contact-h1">Let's Connect</h1>
				<div className="contact-us-div">
					Contact our support team or make an appointment with our experts
				</div>
				<form onSubmit={handleSubmit}>
					<div className="form-group">
						<label htmlFor="fullName">Full Name:</label>
						<input
							type="text"
							id="fullName"
							name="fullName"
							value={formData.fullName}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="email">Email:</label>
						<input
							type="email"
							id="email"
							name="email"
							value={formData.email}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="contactNumber">Contact Number:</label>
						<input
							type="text"
							id="contactNumber"
							name="contactNumber"
							value={formData.contactNumber}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="subject">Subject:</label>
						<input
							type="text"
							id="subject"
							name="subject"
							value={formData.subject}
							onChange={handleChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="message">Message:</label>
						<textarea
							id="message"
							name="message"
							value={formData.message}
							onChange={handleChange}
							required
						></textarea>
					</div>
					<button type="submit">Submit Form</button>
				</form>
			</div>
		</div>
	);
};

export default ContactForm;
