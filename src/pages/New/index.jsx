import { useState } from "react";
import { Container, Form } from "./styles";
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { TextArea } from "../../components/TextArea"
import { NoteItem } from "../../components/NoteItem"
import { Section } from "../../components/Section"
import { Button } from "../../components/Button"
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import { useNavigate } from "react-router-dom";

export function New(){

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const [links, setLinks] = useState([]);
  const [newLink, setNewLink] = useState("");

  const [tags, setTags] = useState([]);
  const [newTag, setNewtag] = useState("");

  const navigate = useNavigate();

  function handleAddLink(){
    //pega o valor do input e adiciona no array de links
    //mantem o valor do input como era antes, e apenas adiciona o novo link
    setLinks(prevState => [...prevState, newLink])
    setNewLink("");
  }

  function handleRemoveLink(deleted){
    //pega o array de links e remove o item que foi clicado
    setLinks(prevState => prevState.filter((link) => link !== deleted))
  }

  function handleAddTag(){
    setTags(prevState => [...prevState, newTag])
    setNewtag("");
  }

  function handleRemoveTag(deleted){
    setTags(prevState => prevState.filter((tag) => tag !== deleted))
  }

  async function handleNewNote(){

    if(newTag || newLink){
      alert("Adicione as tags e links antes de criar a nota");
      return;
    }

    if(!title){
      alert("Adicione um título para a nota");
      return;
    }



    await api.post("/notes", {
      title,
      description,
      tags,
      links
    });

    alert("Nota criada com sucesso!");
    navigate("/");
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

          <Input
           placeholder="Título"
           onChange={e => setTitle(e.target.value)}
           />
          <TextArea 
           placeholder="Observações" 
           onChange={e => setDescription(e.target.value)}
          />

          <Section title="Links Úteis">
            {
              links.map((link, index) => (
                <NoteItem 
                  key={index}
                  value={link}
                  //usar arrow function para passar uma funcção com parametro
                  onClick={() => {handleRemoveLink(link)}}
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
              {
                tags.map((tag, index) => (
                  <NoteItem
                    key={index}
                    value={tag}
                    onClick={() => {handleRemoveTag(tag)}}
                  />
                ))
                
              }
              

              <NoteItem
               isNew 
               placeholder="Nova Tag"
               onChange={e => setNewtag(e.target.value)}
               value={newTag}
               onClick={handleAddTag}
              />
            </div>
 
          </Section>

          <Button 
            title="Salvar"
            onClick={handleNewNote}
          />
        </Form>

      </main>
    </Container>
  )
}