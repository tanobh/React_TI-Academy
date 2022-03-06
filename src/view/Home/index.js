import { Container } from "reactstrap";

export const Home = () => {
    return (
        <div>
            <Container>
                <div className="d-flex">
                    <div className="m-auto p-2">
                        <h1>Home</h1>
                    </div>
                </div>
                <div className="p-2">
                    <a href="/listaclientes"
                        className="btn btn-outline-success btn-sm">
                        Clientes
                    </a>
                    <a href="/listaservicos"
                        className="btn btn-outline-success btn-sm">
                        Servicos
                    </a>
                    <a href="/listapedidos"
                        className="btn btn-outline-success btn-sm">
                        Pedidos
                    </a>
                </div>
            </Container>
        </div>
    );
};