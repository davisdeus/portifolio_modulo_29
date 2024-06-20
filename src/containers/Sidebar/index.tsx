import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Title from '../../components/Title'

import { Descricao, BotaoTema, SidebarContainer } from './styles'

const Sidebar = () => (
  <div>
    <SidebarContainer>
      <Avatar />
      <Title fontSize={20}>Davi silva de Deus</Title>
      <Paragrafo tipo="secundario" fontSize={16}>
        Davisdeus
      </Paragrafo>
      <Descricao tipo="principal" fontSize={12}>
        Engenheiro-Front-end
      </Descricao>
      <BotaoTema>Trocar Tema</BotaoTema>
    </SidebarContainer>
  </div>
)

export default Sidebar
