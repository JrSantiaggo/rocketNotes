import { Container, Links, Content } from "./style"
import { Button } from "../../components/Button"
import { Header } from "../../components/Header"
import { Section } from "../../components/Section"
import { Tag } from "../../components/Tag"
import { ButtonText } from "../../components/ButtonText"

export function Details() {

  return (
    <Container>
      <Header />
        <main>
          <Content>
            <ButtonText title="Excluir nota"/>

            <h1>Introdução ao React</h1>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. 
              Illo quibusdam dicta eveniet voluptate illum dolorum quasi,
               sunt esse iste quae minus et placeat, quos non reprehenderit
                debitis veritatis nobis nisi.
            </p>

            <Section title="Links úteis">
              <Links>
                <li><a href="#"></a>Link 1</li>
                <li><a href="#"></a>Link 2</li>
                <li><a href="#"></a>Link 3</li>
              </Links>
            </Section>


            <Section title="Marcadores">
              <Tag title="Node" />
              <Tag title="java script" />
              <Tag title="style components" />
              <Tag title="react" />
            </Section>

            <Button title="Voltar"  />
          </Content>
        </main>


    </Container>
  )
}
