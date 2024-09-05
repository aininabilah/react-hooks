import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Foto from '../images/kantor2.jpg';
import '../index.css';

function About() {
  return (
    <div className="w-full dashboard flex justify-center items-center mt-8">
      <div className="mx-auto py-8" style={{ maxWidth: '1100px' }}> 
        <Container>
          <Row className="align-items-center justify-content-center min-h-screen font-semibold text-gray-700">
            <Col md={6} className="text-grey-100 mt-5">
              <div>
                <h3 className="font-extrabold text-3xl dark:text-white">Visi</h3>
                <p className="mt-4 font-medium text-sm dark:text-white">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci nisi, non accusantium a ab necessitatibus blanditiis consequatur voluptatibus sit quas eius. Ipsam perspiciatis fugiat porro suscipit molestiae a vitae vel.
                </p>
              </div>

              <div className="mt-8">
                <h3 className="font-extrabold text-3xl dark:text-white">Misi</h3>
                <p className="mt-4 font-medium text-sm dark:text-white">
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci nisi, non accusantium a ab necessitatibus 
                </p>
                <ul style={{ listStyleType: 'disc', color: 'black' }}>
                  <li className="text-gray-700 font-medium text-sm dark:text-white">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci nisi,
                  </li>
                  <li className="text-gray-700 font-medium text-sm dark:text-white">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci nisi,
                  </li>
                  <li className="text-gray-700 font-medium text-sm dark:text-white">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci nisi,
                  </li>
                </ul>
              </div>
            </Col>

            <Col md={6} className="d-flex justify-content-center mt-8">
              <div>
                <img src={Foto} alt="PaDi UMKM" className="rounded-lg shadow-lg img-fluid" />
              </div>
            </Col>
          </Row>
          <footer className="mt-20 mb-4 text-center text-gray-400">
            &copy;2022-2025 Pasar Digital UMKM Indonesia
          </footer>
        </Container>
      </div>
    </div>
  );
}

export default About;
