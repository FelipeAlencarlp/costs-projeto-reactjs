import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Message from '../layout/Message';
import Container from '../layout/Container';
import Loading from '../layout/Loading';
import LinkButton from '../layout/LinkButton';
import ProjectCard from '../project/ProjectCard';

import styles from './Projects.module.css';

function Projects() {
  // salvar os projetos
  const [projects, setProjects] = useState([]);
  // alterar o estado de exibição do loading
  const [removeLoading, setRemoveLoading] = useState(false);

  // para pegar a mensagem dinamica
  const location = useLocation();
  let message = '';

  if(location.state) {
    message = location.state.message;
  }

  useEffect(() => {
    setTimeout(() => {
      fetch('http://localhost:5000/projects', {
        method: 'GET',
        headers: {
          'Content-type': 'application.json'
        }
      })
        .then((resp) => resp.json())
        .then((data) => {
          setProjects(data)
          setRemoveLoading(true)
        })
        .catch((err) => console.log(err))
    }, 300)
  }, []);

  return (
    <div className={styles.projectsContainer}>
      <div className={styles.titleContainer}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto"/>
      </div>

      {message && 
        <Message type="success" msg={message} />
      }
      
      <Container customClass="start">
        {projects.length > 0 &&
          projects.map((project) => (
            <ProjectCard
              id={project.id}
              name={project.name}
              budget={project.budget}
              category={project.category.name}
              key={project.id}
            />
          ))}
          {!removeLoading && <Loading />}
          {removeLoading && projects.length === 0 &&
            <p>Não há projetos cadastrados!</p>
          }
      </Container>
    </div>
  );
}
  
export default Projects;