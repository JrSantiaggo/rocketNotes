import { useState } from "react";
import { Container, Form } from "./styles";
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom";

export function New(){

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  function handleAddLink(){
    //pega o valor do input e adiciona no array de links
    //mantem o valor do input como era antes, e apenas adiciona o novo link
    setLinks(prevState => [...prevState, newLink])
    setNewLink("");
  }

  return (
    <Container>
      <Header />

      <main>
        <Form>
          <header>
            <h1>Criar Nota</h1>
            <Link to="/">Voltar</Link>
          </header>

          <Input placeholder="Título"/>
          <TextArea placeholder="Observações" />

          <Section title="Links Úteis">
            {
              links.map((link, index) => (
                <NoteItem 
                  key={index}
                  value={link}
                  onClick={() => {}}
                />
              ))
            }
            <NoteItem
             isNew 
             placeholder="Novo Link"
             value={newLink}
             onChange={e => setNewLink(e.target.value)}
             onClick={handleAddLink}
             />
          </Section>

          <Section title="Marcadores">
            <div className="tags">
              <NoteItem value="React"/>
              <NoteItem isNew placeholder="Nova Tag"/>
            </div>
 
          </Section>

          <Button title="Salvar"/>
        </Form>

      </main>
    </Container>
  )
}