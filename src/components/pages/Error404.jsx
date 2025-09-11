import React from 'react';

const Error404 = ({setUsuarioLogueado}) => {
    return (
        <div>
            <h1 className="text-danger">Error 404 vieja del water</h1>
            {setUsuarioLogueado(false)}
        </div>
    );
};

export default Error404;