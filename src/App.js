import { useSelector, useDispatch } from "react-redux";

import "bootstrap/dist/css/bootstrap.min.css";
import { Modal, Container, Button, Navbar} from "react-bootstrap";

import Post from "./components/Post";
import PostForm from "./components/PostForm";
import User from "./components/User";
import { isEmpty } from "./components/Utils";
import logoNN from "../src/assets/logoNN.svg";

import { toggleModalShow } from "./app/features/ui/uiSlice";

const App = () => {
  const posts = useSelector((state) => state.storePosts.posts);
  const modalShow = useSelector((state) => state.storeUi.modalShow);
  const dispatch = useDispatch();

	/// Modal ///////
  if (localStorage.getItem("firstTimeHere") === null) {
		localStorage.setItem("firstTimeHere", false);
		dispatch(toggleModalShow(true));
  }
	/// EOF Modal ///

  return (
    <div>
      <Modal show={modalShow} onHide={() => dispatch(toggleModalShow(false))} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Informations</Modal.Title>
        </Modal.Header>
        <Modal.Body >
          Tout ce que vous écrivez ici sera stocké localement sur votre périphérique.
          <strong> Personne d'autre ne pourra le voir. </strong><br/><br/>
					Il n'y a pour l'instant pas de mécanisme ou sécurité si le localStorage est plein. <br/><br/>
        </Modal.Body>
					<a style={{marginLeft: "15px"}} href="https://github.com/nnieddu/CRUD-localStorage-exemple/"><strong>Code source</strong></a><br/>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => dispatch(toggleModalShow(false))}>
            Fermer
          </Button>
        </Modal.Footer>
      </Modal>

      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand>
            <img alt="pp" src={logoNN} />
          </Navbar.Brand>
          <h1>CRUD</h1>
          <User />
        </Container>
      </Navbar>
        <PostForm />
        <div className="content">
          <div>
            {!isEmpty(posts) &&
              posts.slice(0).reverse().map((post, index) => <Post post={post} key={index} />)}
          </div>
        </div>
      </div>
  );
};

export default App;
