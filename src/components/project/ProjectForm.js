import { useEffect, useState } from 'react';

import Input from '../form/Input';
import Select from '../form/Select';
import SubmitButton from '../form/SubmitButton';

import style from './ProjectForm.module.css';

function ProjectForm({ handleSubmit, btnText, projectData }) {
	const [categories, setCategories] = useState([]);
	const [project, setProject] = useState(projectData || {});

	// request para a API
	useEffect(() => {
		fetch("http://localhost:5000/categories", {
			method: "GET",
			headers: {
				"Content-Type": "application/json"
			}
		})
			.then((resp) => resp.json())
			.then((data) => {
				setCategories(data)
			})
			.catch((err) => console.log(err))
	}, []);

	// submit para os dados do formulário
	const submit = (e) => {
		e.preventDefault();
		handleSubmit(project);
	}

	// pega os valores que for sidos preenchidos no input
	function handleChange(e) {
		setProject({ ...project, [e.target.name]: e.target.value });
	}

	function handleCategory(e) {
		// seleciona uma caregoria se tiver
		setProject({
			...project,
			category: {
				id: e.target.value,
				name: e.target.options[e.target.selectedIndex].text
			}
		});
	}

	return (
		<form onSubmit={submit} className={style.form}>
			<Input
				type="text"
				text="Nome do Projeto"
				name="name"
				placeholder="Insira o nome do projeto"
				handleOnChange={handleChange}
				value={project.name ? project.name : ''}
			/>

			<Input
				type="number"
				text="Orçamento do Projeto"
				name="budget"
				placeholder="Insira o orçamento total"
				handleOnChange={handleChange}
				value={project.budget ? project.budget : ''}
			/>

			<Select
				name="categoryId"
				text="Selecione uma categoria"
				options={categories}
				value={project.category ? project.category.id : ''}
				handleOnChange={handleCategory}
			/>

			<SubmitButton text={btnText} />
		</form>
	);
}

export default ProjectForm;