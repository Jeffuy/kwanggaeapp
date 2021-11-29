import React, { useState } from "react";
import desafios from "@scripts/challenges.js";

const Challenge = () => {
	// LA SIGUIENTE LINEA NO SIRVE PERO NO SE PUEDE BORRAR
    const [desafio, setDesafio] = useState("");
    const cgs = desafios.renderOnScreen();

    const choose = () => {
        desafios.elegirChallenge();
		// LA SIGUIENTE LINEA NO SIRVE PERO NO SE PUEDE BORRAR
        setDesafio(<></>);
    };

    return (
        <>
            <section>
                <div className="container">
                    <p
                        className="text-center fs-5 mt-3 text-white"
                        id="puntos"
                    />
                    <div className="container">
                        <div className="row  justify-content-center    ">
                            <button
                                type="button"
                                className="btn btn-lg btn-dark mt-3 "
                                onClick={() => choose()}
                            >
                                Dame un desafío
                            </button>
                        </div>
                    </div>
                </div>

                <div className="container-fluid">
                    <div className="row">
                        <div className="col-8 offset-2">
                            <p
                                className="text-center fs-3 mt-2"
                                id="result"
                            ></p>
                        </div>
                    </div>
                </div>
                <div className="container-fluid">
                    <div className="col-md-8">
                        <div>{cgs}</div>
                    </div>
                </div>
                <div className="container-fluid mt-5">
                    <p className="text-center fs-6 mt-5 text-danger">
                        <b>
                            <a
                                className="badge bg-danger"
                                onClick={() => resetPoints}
                            >
                                Reiniciar puntos
                            </a>{" "}
                            (esta opción no se puede deshacer)
                        </b>
                    </p>
                </div>
            </section>
        </>
    );
};

export default Challenge;
