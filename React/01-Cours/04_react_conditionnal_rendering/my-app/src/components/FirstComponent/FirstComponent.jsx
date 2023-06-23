import React,{useEffect, useState} from 'react';

const FirstComponent = () => {
    const [myNames, setMyNames] = useState([]);
    const [newName, setNewName] = useState("");

    const addNewName = (e) => {
        e.preventDefault()
        setMyNames([...myNames, newName])
        setNewName("")
        console.log(myNames);
    }

    return(
        <div>
            <h3>FirstComponent</h3>
            <hr />
            <form onSubmit={addNewName}>
                <div>
                    <label htmlFor="newName">New Name : </label>
                    <input type="text" id="newName" name="newName" onInput={(e) => setNewName(e.target.value)}required/>
                </div>
            </form>
            {myNames.length >0 ? (
                <>
                <p>Il y a {myNames.length} personnes dans le tableau</p>
                {myNames.map((name, index) =>
                    <li key = {index}>{name}</li>)}
                </>
            ) : (<p>Il n'y a personne dans le tableau</p>)}
        </div>
    );
}
 
export default FirstComponent;