import Header from './Header';
import Cards from './Card';
import Footer from './Footer';
import './App.css';


function App() {
  return (
    <main>
      <Header texto_titulo="Galería de Imágenes con React" />
    <section className='contenedor_imagenes'>
      <Cards titulo_imagen="titulo de la imagen" descripcion_imagen="descripcion de la imagen" src_imagen="https://picsum.photos/200" />
      <Cards titulo_imagen="titulo de la imagen" descripcion_imagen="descripcion de la imagen" src_imagen="https://picsum.photos/200" />
      <Cards titulo_imagen="titulo de la imagen" descripcion_imagen="descripcion de la imagen" src_imagen="https://picsum.photos/200" />
    </section>
      <Footer />
    </main>
  );
}

export default App;
