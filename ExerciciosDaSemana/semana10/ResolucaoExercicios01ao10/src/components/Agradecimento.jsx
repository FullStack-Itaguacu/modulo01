function Agradecimento() {
    return (
        <div>
            <h3>Obrigado pelo seu cadastro!</h3>

            <div className="row">
                <h4>Conte-nos: onde nos conheceu?</h4>
                <div className="col-12">
                    <select className="form-select" aria-label="Default select example">
                        <option defaultValue>Selecione</option>
                        <option value="site">Pelo site</option>
                        <option value="linkedind">Pelo LinkedIn</option>
                        <option value="instagram">Pelo Instagram</option>
                    </select>
                </div>
            </div>
        </div>
    );
}

export default Agradecimento;