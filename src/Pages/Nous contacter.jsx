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
    // const {
    //     register,
    //     handleSubmit,
    //     watch,
    //     formState: { errors },
    // } = useForm()
    //
    // const onSubmit = (data) => console.log(data)
    //
    // console.log(watch("example")) // watch input value by passing the name of it
    //
    // return (
    //     /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    //     <form onSubmit={handleSubmit(onSubmit)}>
    //         {/* register your input into the hook by invoking the "register" function */}
    //         <input defaultValue="test" {...register("example")} />
    //
    //         {/* include validation with required or other standard HTML validation rules */}
    //         <input {...register("exampleRequired", { required: true })} />
    //         {/* errors will return when field validation fails  */}
    //         {errors.exampleRequired && <span>This field is required</span>}
    //
    //         <input type="submit" />
    //     </form>
    // )
};


export default NousContacter;