import styled from 'styled-components'

type BotaoProps = {
  principal: boolean
  fontSize: string
}

const Botao = styled.button<BotaoProps>`
  background-color: ${(props) => (props.principal ? 'green' : 'blue')};
  fontsize: ${(props) => props.fontSize || '16px'};
`
const BotaoPerigo = styled(Botao)`
  background-color: red;
  color: #fff;

  span {
    text-decoration: line-through;
  }
`

function Teste() {
  return (
    <>
      <Botao fontSize="50px" principal>
        Enviar
      </Botao>
      <Botao fontSize="14px" principal={false}>
        Canselar
      </Botao>
      <BotaoPerigo fontSize="" as="a" principal>
        <span>Não clique aqui</span>
      </BotaoPerigo>
    </>
  )
}

export default Teste
