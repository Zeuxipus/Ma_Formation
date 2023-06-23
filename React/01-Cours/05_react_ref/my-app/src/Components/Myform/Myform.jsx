import React, {useRef} from 'react';

const MyForm = () => {
    const firstnameInputRef = useRef()
    const lastnameInputRef = useRef()
    const dateOfBirthInputRef = useRef()
    const emailInputRef = useRef()
    const phoneNumberInputRef = useRef()

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log(`${firstnameInputRef.current.value} - ${lastnameInputRef.current.value} - ${dateOfBirthInputRef.current.value} - ${emailInputRef.current.value} - ${phoneNumberInputRef.current.value}`);
    }

    return ( 
        <div>
            <form>
                <div>
                    <label htmlFor="firstname">Firstname : </label>
                    <input type="text" id='firstname' ref={firstnameInputRef} />
                </div>

                <div>
                    <label htmlFor="lastname">Lastname : </label>
                    <input type="text" id='lastname' ref={lastnameInputRef} />
                </div>

                <div>
                    <label htmlFor="dateOfBirth">date of birth : </label>
                    <input type="date" id='dateOfBirth' ref={dateOfBirthInputRef} />
                </div>

                <div>
                    <label htmlFor="email">Email : </label>
                    <input type="email" id='email' ref={emailInputRef} />
                </div>

                <div>
                    <label htmlFor="phoneNumber">Phone Number : </label>
                    <input type="text" id='phoneNumber' ref={phoneNumberInputRef} />
                </div>
                    <button>Submit</button>
            </form>
        </div>
     );
}
 
export default MyForm;