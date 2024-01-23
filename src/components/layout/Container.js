import styles from './Container.module.css';

function Container(props) {
    return (
        <div
            // criação de custom class caso for necessário utilizar
            className={`
                ${styles.container}
                ${styles[props.customClass]}
            `}
        >
            {props.children}
        </div>
    );
}

export default Container;