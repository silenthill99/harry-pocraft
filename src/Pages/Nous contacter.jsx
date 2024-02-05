import "../css/Nous contacter.css"
import {useForm} from "react-hook-form";
import emailjs from "@emailjs/browser"

const NousContacter = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmitForm = (data) => {
        alert('Votre message a bien été envoyé et sera traité dans les plus brefs délais')
        emailjs.send(
            'service_l4b05zp',
            'template_y8y10ur',
            {
                subject: data.subject,
                email: data.email,
                message: data.message,
                name: data.name
            },
            'RkW-jZKy0IcqEfXxt'
        )
    }

    return (
        <main className="contacts">
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <label htmlFor="name">Nom</label><br/>
                <input {...register("name")} type="text" name="name" placeholder="Votre nom"/><br/>

                <label htmlFor="mail">Mail</label><br/>
                <input {...register("email", {required: true})} type="email" name="email" placeholder="Adresse mail" required/><br/>
                <br/>

                <label htmlFor="subject">Sujet</label><br/>
                <input {...register("subject")} type="text" name="subject" placeholder="Sujet de votre demande"/><br/><br/>

                <label htmlFor="message">Message</label><br/>
                <textarea {...register("message")} name="message" placeholder="Votre message" style={{
                    resize: "none",
                    width: "100%"
                }} rows={10}></textarea><br/>
                {errors.email && <p style={{
                    color: "red"
                }}>Email recquis</p>}
                <input type="submit" value="Envoyer"/>
            </form>
        </main>
    )
};


export default NousContacter;