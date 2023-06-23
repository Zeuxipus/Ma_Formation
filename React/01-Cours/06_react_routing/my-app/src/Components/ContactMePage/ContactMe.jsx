import React from 'react';

const ContactPage = () => {
    return ( 
        <form>
            <div>
                <label htmlFor="">Nom</label>
                <input type="text" />
            </div>

            <div>
                <label htmlFor="">Prenom</label>
                <input type="text" />
            </div>

            <div>
                <label htmlFor="">Email</label>
                <input type="text" />
            </div>

            <div>
                <label htmlFor="">Adresse</label>
                <input type="text" />
            </div>

            <div>
                <label htmlFor="">Telephone</label>
                <input type="text" />
            </div>
        </form>
     );
}
 
export default ContactPage;