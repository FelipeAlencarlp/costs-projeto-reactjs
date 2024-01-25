import { useState, useEffect } from 'react';

import styles from './Message.module.css';

function Message({ type, msg }) {
  // alterar a visibilidade por condição
  const [visible, setVisible] = useState(false);

  // controle de tempo de exebição da mensagem
  useEffect(() => {
    // se não tiver mensagem retorna nada
    if(!msg) {
      setVisible(false);
      return;
    }

    // se tiver mensagem segue o fluxo
    setVisible(true);

    const timer = setTimeout(() => {
      setVisible(false)
    }, 3000);

    return () => clearTimeout(timer);
  }, [msg]);

  return (
    <>
      {visible && (
        <div className={`${styles.message} ${styles[type]}`}>{msg}</div>
      )}
    </>
  );
}

export default Message;