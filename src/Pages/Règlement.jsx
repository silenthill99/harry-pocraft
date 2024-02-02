import React from 'react';
import "../css/Règlement.css"
const Règlement = () => {
    return (
        <main className="reglement">
            <h1><u>Règlement intérieur</u></h1>
            <p>Le règlement intérieur est considéré comme lu et approuvé dès votre 1ère connections sur les serveurs de
                l'infrastructure, que ce soit sur le serveur de jeu ou sur le discord</p>

            <ol>
                <li id="discord">
                    <h2><u>Règlement Discord</u></h2>
                    <ol>
                        <li>
                            <h3>Pseudo et photo de profil</h3>
                            <p>
                                Tout pseudo et/ou photo de profil à caractère discriminant, pornographique, terroriste
                                ou
                                encore
                                politique sont strictement interdits
                            </p>
                        </li>
                        <li>
                            <h3>Discrimination</h3>
                            <p>
                                La discrimination est strictement interdite, un bannissement définitif sera prononcé, de
                                façon
                                non négociable. Un dépot de plainte pourra même être envisagé par le staff de
                                l'infrastructure à
                                la victime envers la personne concernée
                            </p>
                        </li>
                        <li>
                            <h3>Langage</h3>
                            <p>
                                Que ce soit dans un salon textuel ou vocal, merci de tenir un language correct. Les
                                sanctions
                                pourront aller d'un simple warn jusqu'à un ban temporaire.
                            </p>
                        </li>
                        <li>
                            <h3>Humour</h3>
                            <p>
                                L'humour de ce serveur est à utiliser avec modération. N'oubliez pas que nous sommes sur
                                un serveur communaitaire, vous ne connaissez donc pas forcément ceux qui se trouvent en
                                face de vous. Par conséquent, toute forme d'humour noire est à proscrire.
                            </p>
                        </li>
                        <li>
                            <h3>Conflits</h3>
                            <p>
                                En cas de mésentente avec d'autres joueurs, merci de ne pas régler vos différents en
                                public. Vos histoires ne concernent pas les autres, cela peut même déranger et polluer
                                le tchat.
                            </p>
                        </li>
                        <li>
                            <h3>Flood</h3>
                            <p>
                                Le flood est la répétition successive d'un seul et même caracère. Cela est également
                                interdit sur le serveur et c'est considéré comme de la pollution du tchat.
                            </p>
                        </li>
                        <li>
                            <h3>Spam</h3>
                            <p>
                                Tout comme le flood, le spam est considéré comme de la pollution du tchat donc c'est
                                aussi interdit.
                            </p>
                        </li>
                        <li>
                            <h3>Mentions</h3>
                            <p>
                                Sauf en cas de mention contraire, merci de ne pas mentionner le staff. Néanmoins vous
                                pouvez toujours contacter le staff par message privé.
                            </p>
                        </li>
                        <li>
                            <h3>Pub</h3>
                            <p>
                                Que ce soit par message privé ou publiquement sur le serveur, il est interdit de faire
                                de la pub sur le serveur. Nous tolérerons malgré tout les pubs dans vos pseudos, vos
                                descriptions ou biographies.
                            </p>
                        </li>
                    </ol>
                </li>
            </ol>
        </main>
    );
};

export default Règlement;