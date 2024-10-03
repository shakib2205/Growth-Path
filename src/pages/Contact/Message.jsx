import { useState } from "react";
import Swal from "sweetalert2";


const Message = () => {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault(); 
        localStorage.setItem('contactFormData', JSON.stringify(formData));
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Message has been sent and saved to localStorage",
            showConfirmButton: false,
            timer: 1500
          });
          

        setFormData({ name: '', email: '', message: '' });
    };


    return (
        <div className="flex justify-between items-center p-12">
            
            <div className="flex flex-col items-start justify-center w-1/2 text-left space-y-4">
                <h2 className="text-3xl font-bold">Send Us a Message</h2>
                <p className="text-lg">
                    Interested in our Content Writing Services or need <br /> advice? Then please get in touch and we’ll be glad to help.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="flex flex-col space-y-6 w-[500px]">
                <input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="input input-bordered input-success w-full"
                />
                <input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="input input-bordered input-success w-full"
                />
                <textarea
                    name="message"
                    className="textarea textarea-success h-[120px] w-full"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                ></textarea>

                <button type="submit" className="btn btn-outline w-[175px] self-center">Send Message</button>
            </form>
        </div>

    );
};

export default Message;