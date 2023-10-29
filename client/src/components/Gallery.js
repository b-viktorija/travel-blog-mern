import Carousel from 'react-bootstrap/Carousel';

function Gallery() {
  return (
    <Carousel>
      <Carousel.Item>
        <img src="https://notaboutthemiles.com/wp-content/uploads/2022/02/Sagrada-Familia.jpg" text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://www.holidify.com/images/bgImages/ROME.jpg" text="First slide" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Gallery;