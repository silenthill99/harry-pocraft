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
                                ou encore politique sont strictement interdits
                            </p>
                        </li>
                        <li>
                            <h3>Discrimination</h3>
                            <p>
                                La discrimination est strictement interdite, un bannissement définitif sera prononcé, de
                                façon non négociable. Un dépot de plainte pourra même être envisagé par le staff de
                                l'infrastructure à la victime envers la personne concernée
                            </p>
                        </li>
                        <li>
                            <h3>Langage</h3>
                            <p>
                                Que ce soit dans un salon textuel ou vocal, merci de tenir un language correct. Les
                                sanctions pourront aller d'un simple warn jusqu'à un ban temporaire.
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
                        <li>
                            <h3>RolePlay</h3>
                            <p>
                                Bien que Harry PoCraft soit un serveur RP, il est interdit de parler RP sur le serveur.
                            </p>
                        </li>
                    </ol>
                </li>
                <li id="in-game">
                    <h2><u>Règlement en jeu</u></h2>
                    <ol>
                        <li>
                            <h3>NoFearRP</h3>
                            <p>
                                Cette règle concerne la notion de la peur. Si un moldu est braqué par un mage noir,
                                il devra faire tout ce qu'il lui est demandé.
                            </p>
                        </li>
                        <li>
                            <h3>PowerGaming / NoPainRP</h3>
                            <p>
                                Durant votre aventure, vous serez amenés à recevoir des sortilèges consistat à vous
                                attaquer, que ce soit un simple sortilège de combat (Stupéfix), ou d'autres sortilèges
                                consistant à vous faire plus de mal (endoloris). Dans ce cas, vous devrez avoir mal et
                                ne pas pouvoir faire tout et n'importe quoi, dan un laps de temps plus ou moins long.
                                Cette règle est aussi valable lorsque vous êtes blessé, vous n'aurez pas le droit de
                                sauter ou courir.
                            </p>
                        </li>
                        <li>
                            <h3>NLR</h3>
                            <p>
                                Le New Life Rules (NLR) esst la règle de la nouvelle vie. Dès lors que vou mourrez, vous
                                devrez incarner un nouveau personnage et avoir tout oublié de votre vie précédente.
                            </p>
                        </li>
                        <li>
                            <h3>RTZ</h3>
                            <p>
                                Le Return To Zone (RTZ) est une règle consistant à ne pas retourner sur son lieu de mort
                                pendant un certain temps. Ici, il faut attendre 10 minutes avant de retourner sur son
                                lieu de mort.
                            </p>
                        </li>
                        <li>
                            <h3>MétaGaming</h3>
                            <p>Il est interdit d'utiliser dans un contexte RP des éléments obtenus dans un contexte HRP.</p>
                        </li>
                        <li>
                            <h3>Les tchats</h3>
                            <p>
                                Comme sur la plupart des serveurs RôlePlay, plusieurs tchat sont mis à disposition. Le
                                tchat HRP (avec la commande /hrp) pour parler HRP, le tchat RP vocal (avec la commande
                                /audio), enfin le tchat RP écrit, surtout présents pour les sourds et muets ou ceux qui
                                n'ont pas de micro. Merci de les utiliser à bon escient.
                            </p>
                        </li>
                    </ol>
                </li>
            </ol>
        </main>
    );
};

export default Règlement;