function ProjectForm() {
    return (
        <form>
            <div>
                <input type="text" placeholder="Insira o nome do projeto"/>
            </div>

            <div>
                <input type="number" placeholder="Insira o orçamento total"/>
            </div>

            <div>
                <select name="categoryId">
                    <option disabled selected>Selecione a categoria</option>
                </select>
            </div>

            <div>
                <input type="submit" value="Criar Projetos" />
            </div>
        </form>
    );
}

export default ProjectForm;