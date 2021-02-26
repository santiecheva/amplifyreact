import React from 'react';
import './inicio.scss';
import Logo from '../../../images/logoPragmaLogin.svg';
import Images from '../../atoms/images/images';
import Perfil from '../../../images/perfil.png';
import Circulo from '../../../images/circulo.png'
import Dashboard from '../../../images/webDashboard.png';

function Inicio() {
    return (
        <>
            <div>
                <div className="p-content-new-header">
                    <div className="p-logo-new">
                        <div className="p-image-logo-header">
                            <Images Imagen={Logo} />
                        </div>
                    </div>
                    <div className="p-foto-new">
                        <div className="p-image-perfil-header">
                            <div className="div-pequeño">
                                <Images Imagen={Perfil} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-content-new-page">
                    <div className="content-logo-izquierda">
                    <Images Imagen={Dashboard} /> 
                    </div>
                    <div className="second-part">
                        <div className="text-information"><b>Santiago.Zapata,</b> Bienvenido/a <br />
                        al Sistema de Informes Financieros <br />
                            <span>
                                Seleccione una opcion para continuar
                        </span>
                        </div>
                        <div className="content-option-redirect">
                            <a href='/cargaArchivos'>
                            <div className="option-redirect">
                                <div className="display-type">
                                    <div className="content-circle">
                                        <Images Imagen={Circulo} />
                                    </div >
                                    <div className="text-redirect">Subir archivos </div>
                                    <div className="content-flecha">➔</div>
                                </div>
                            </div>
                            </a>
                            <div className="option-redirect">
                                <div className="display-type">
                                    <div className="content-circle">
                                        <Images Imagen={Circulo} />
                                    </div>
                                    <div className="text-redirect">Ir a dashboard </div>
                                    <div className="content-flecha">➔</div>
                                </div>
                            </div>
                            <div className="option-redirect">
                                <div className="display-type">
                                    <div className="content-circle">
                                        <Images Imagen={Circulo} />
                                    </div>
                                    <div className="text-redirect">Gestion de usuarios </div>
                                    <div className="content-flecha">➔</div>
                                </div>
                            </div>
                            <div className="option-redirect">
                                <div className="display-type">
                                    <div className="content-circle">
                                        <Images Imagen={Circulo} />
                                    </div>
                                    <div className="text-redirect">Ir a RPA Sec y Fac </div>
                                    <div className="content-flecha">➔</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Inicio;
