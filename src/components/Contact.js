import React from 'react'

const Contact = () => {
    return (
        <div className="container ">
            <div className="row justify-content-center ">
                <div className="col-md-6 col-md-offset-3">
                    <div className="well well-sm">
                        <form className="form-horizontal" >
                            <legend className=" mt-3">Contact us</legend>
                            {/* Name input*/}
                            <div className="form-group">
                                <label className="col-md-3 control-label" htmlFor="name">Name</label>
                                <div className="col-md-9">
                                    <input id="name" name="name" type="text" placeholder="Your name" className="form-control" />
                                </div>
                            </div>
                            {/* Email input*/}
                            <div className="form-group">
                                <label className="col-md-3 control-label" htmlFor="email">Your E-mail</label>
                                <div className="col-md-9">
                                    <input id="email" name="email" type="text" placeholder="Your email" className="form-control" />
                                </div>
                            </div>
                            {/* Message body */}
                            <div className="form-group">
                                <label className="col-md-3 control-label" htmlFor="message">Your message</label>
                                <div className="col-md-9">
                                    <textarea className="form-control" id="message" name="message" placeholder="Please enter your message here..." rows={5} defaultValue={""} />
                                </div>
                            </div>
                            {/* Form actions */}
                            <div className="form-group">
                                <div className="col-md-12 text-right">
                                    <button type="submit" className="btn m-1 btn-primary btn-lg">Submit</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

    )
}
export default Contact;