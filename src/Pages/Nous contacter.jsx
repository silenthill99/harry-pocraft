import React, {useState} from 'react';
import "../css/Nous contacter.css"
import {useForm} from "react-hook-form";

const NousContacter = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    return (
        <main className="contacts">
            <form>
                <label htmlFor="name">Nom</label><br/>
                <input {...register("name")} type="text" name="name" placeholder="Votre nom"/><br/>

                <label htmlFor="mail">Mail</label><br/>
                <input {...register("mail")} type="email" placeholder="Adresse mail" name="mail"
                       onBlur={(e) =>checkMail(e.target.value)} required/><br/><br/>

                <label htmlFor="subject">Sujet</label><br/>
                <input {...register("subject")} type="text" name="subject" placeholder="Sujet de votre demande" required/><br/><br/>

                <label htmlFor="message">Message</label><br/>
                <textarea {...register("message")} name="message" placeholder="Votre message" style={{
                    resize: "none",
                    width: "100%"
                }} rows={10}></textarea><br/>

                <input type="submit" value="Envoyer"/>


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