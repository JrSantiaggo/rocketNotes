import {RiShutDownLine} from 'react-icons/ri'
import { Container, Profile, Logout } from "./styles";

export function Header(){
  return (
    <Container>
      <Profile to="/profile">
        <img src="https://github.com/jrsantiaggo.png" alt="foto do usuário"/>

        <div>
          <span>Bem-Vindo</span>
          <strong>Lourival Junior</strong>
        </div>

      </Profile>

      <Logout>
        <RiShutDownLine />
      </Logout>
    </Container>
  )
}