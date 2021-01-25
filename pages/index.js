import { useState} from 'react';

function Home() {
    return (
        <div>
            <h1>Home 2 de Giuliano</h1>
            <Contador />
        </div>
    )
}

function Contador() {
    const [contador, setContador] = useState(1);

    function adicionarContador() {
        setContador(contador + 1);
    }
    return (
        <div>
            <div>{contador}</div>
            <button onClick={adicionarContador}n>Adicionar</button>
        </div>
    )
}

export default Home