import { useNavigate } from 'react-router-dom';

import ProjectForm from '../project/ProjectForm';

import styles from './NewProject.module.css';

function NewProject() {
    const navigate = useNavigate();

    function createPost(project) {
        // initialize cost and services
        project.cost = 0;
        project.services = [];
        const state = { message: "Projeto criado com sucesso!" };

        fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(project)
        })
            .then((resp) => resp.json())
            .then((data) => {
                console.log(data)
                // redirect on success
                navigate('/projects', { state });
            })
            .catch((err) => console.log(err));
    }

    return (
        <div className={styles.newProjectContainer}>
            <h1>Criar Projeto</h1>
            <p>Crie seu projeto para depois adicionar os serviços.</p>
            
            <ProjectForm handleSubmit={createPost} btnText="Criar Projeto" />
        </div>
    );
}

export default NewProject;