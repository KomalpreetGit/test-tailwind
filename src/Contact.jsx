import { useState } from "react";

function Contact() {
    
    const [name,SetName]= useState();
    const [mail,SetMail]= useState();
    const [message,SetMessage]= useState();
    

    const submittion =()=>{
        alert(name);
        alert(mail);
        alert(message);
    }
    
    
    

    return (
       <main className='mt-20 mx-auto max-w-[700px]'>
        
        <h2 className="py-2 text-4xl">Contact Us</h2>
        <p className="py-2 text-1xl">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ex nostrum harum, fuga est hic repellendus at commodi possimus praesentium voluptates blanditiis rem officiis exercitationem, deserunt expedita nihil maxime tempore aspernatur, porro rerum! Autem.</p>
                  <form className=" h-auto  pt-4">
                    
                        <labe>Name</labe><br/>
                        <input type="text" onChange={(event)=>SetName(event.target.value)} className="border-1 p-1.5 w-full rounded"/><br/><br/>

                        <labe>Email</labe><br/>
                        <input type="text"onChange={(event)=>SetMail(event.target.value)}  className="border-1 p-1.5 w-full rounded"/><br/><br/>

                        <labe>Message</labe><br/>
                        <input type="text" onChange={(event)=>SetMessage(event.target.value)} className="border-1 p-1.5 w-full rounded"/><br/><br/>

                        <div className="text-center">
                            <button onClick={submittion} className="bg-black p-3 w-50 center rounded text-white h">Submit</button>
                        </div>
                  </form>
                 
               </main>
    )
}

export default Contact;