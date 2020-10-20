import React, { useState, useEffect } from 'react';

const Crud = () => {
    const [cruds, setPosts] = useState([]);
    useEffect(() => {
        fetch('http://localhost:8000/cruds')
            .then(response => {
                return response.json();
            }).then(resAsJson => {
                console.log(resAsJson);
                setPosts(resAsJson)
            })
    }, []);

    const getCrud = (e) => {
        const id = e.target.id;
        console.log(id)
    }

    return (
        cruds && cruds.length > 0 ?
            cruds.map(crud => {
                return <div className="crud-card" id={crud.id} onClick={getCrud} key={crud.id}>
                    <img src={`http://localhost/crud/public/images/${crud.image}`} alt={crud.image} className="image" />
                    <p className="crud-title">{crud.title}</p>
                    <p className="crud-body">{crud.body}</p>
                </div>
            })
            : null
    )
}
export default Crud;