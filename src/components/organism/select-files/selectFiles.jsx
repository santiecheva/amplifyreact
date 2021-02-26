import React from 'react';

import './selectFiles.scss';
function SelectFiles() {
    return (
        <div className="o-content-select-files">
            <div className="o-content-text-drive"><span>Cargar archivos desde google drive</span><br/><br/>
            aqui podra cargar los archivos que tenga a lojados en google drive ingresando el id del archivo 
            </div>
            <div className="p-distancia content-instrucciones">
                <select>
                    <option value="">Instrucciones</option>
                </select>
            </div>
            <div className="p-distancia o-content-selects">
            <div>Seleccione el tipo de archivo  <br/>
            <select>
                <option>Seleccionar</option>
            </select>
            </div>
            <div className="organizar">Seleccione mes <br/>
            <select>
                <option>Seleccionar</option>
            </select>
            </div>
            <div className="organizar">Seleccione año <br/>
            <select>
                <option>Seleccionar</option>
            </select>
            </div>
            </div>
            <div className="p-distancia o-content-input-text">
                <input type="text" placeholder="Coloque el id de google drive"/>
            </div>

            <div className="p-distancia o-content-input-button">
                <button>Subir archivos</button>
            </div>
            <div className="p-distancia asfasf"></div>
        </div>
    );
}

export default SelectFiles;
