import React, {useState} from 'react';

const NousContacter = () => {
    const [valid, setValid] = useState(false)
    return (
        <main>
            <form>
                <input type="text" placeholder="Nom"/><br/>
                <input type="email" placeholder="Adresse mail" onBlur={(e) =>checkMail(e.target.value)} required/><br/>
                <textarea placeholder="Votre message" style={{
                    resize: "none",
                    width: 200,
                    height: 200
                }}></textarea><br/>
                <input type="submit" value="Envoyer" onClick={(e) => {
                    if (!valid) {
                        e.preventDefault()
                    }
                }}/>
            </form>
        </main>
    );
    function checkMail(mail) {
        if (!mail.includes('@')) {
            alert("Il n'y a pas d'@, cette adresse mail n'est pas valide !")
        } else {
            setValid(true)
        }
    }
};


export default NousContacter;