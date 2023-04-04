function DadosPessoaisForm() {
    return (
        <div>
            <div className="col-12">
                <label className="form-label" htmlFor="name">Nome:</label>
                <div className="input-group mb-3 col-12">
                    <input type="text" className="form-control" name="name" id="name" placeholder="Digite o seu nome" required />
                </div>
            </div>
            <div className="col-12">
                <label className="form-label" htmlFor="name">Email:</label>
                <div className="input-group">
                    <input type="text" className="form-control" name="email" id="email" placeholder="Digite o seu email" required />
                </div>
            </div>
        </div>
    );
}

export default DadosPessoaisForm;