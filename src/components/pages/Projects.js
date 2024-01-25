import { useLocation } from 'react-router-dom';

import Message from '../layout/Message';
import Container from '../layout/Container';
import LinkButton from '../layout/LinkButton';

import styles from './Projects.module.css';

function Projects() {
  // para pegar a mensagem dinamica
  const location = useLocation();
  let message = '';

  if(location.state) {
    message = location.state.message;
  }

  return (
    <div className={styles.projectsContainer}>
      <div className={styles.titleContainer}>
        <h1>Meus Projetos</h1>
        <LinkButton to="/newproject" text="Criar Projeto"/>
      </div>

      {message && 
        <Message type="success" msg={message} />
      }

        <Container>
          <p>Projetos...</p>
        </Container>
    </div>
  );
}
  
export default Projects;