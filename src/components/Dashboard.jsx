import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Kantor from '../images/kantor.jpg';
import '../index.css';

const Dashboard = () => {
  return (
    <div className="w-full dashboard m-0">
    <div className=" bg-gradient-to-r from-cyan-200 to-cyan-600  h-3/4 flex flex-col justify-center items-center w-full " >
      <Container>
        <Row className="align-items-center mx-auto" style={{ maxWidth: '1100px' }}>
          <Col>
            <div className="text-left text-white">
              <h3 className="font-bold text-3xl text-gray-700">PaDi UMKM Hadir Sebagai Satu Solusi Bisnis bagi UMKM, BUMN dan Pemerintah.</h3>
              <p className="font-medium mt-4 text-gray-500 text-sm">Mempertemukan UMKM berkualitas dengan perusahaan BUMN maupun Swasta untuk mendapatkan transaksi dengan harga dan kualitas terbaik.</p>
            </div>
          </Col>
          <Col >
            <div className="flex justify-center">
              <img src={Kantor} alt="PaDi UMKM" className="rounded-lg shadow-lg w-3/4" />
            </div>
          </Col>
        </Row>
      </Container>
      </div>
      <div className="Footer">
      <footer className="mt-2 mb-4 text-center text-gray-400">
        &copy;2022-2025 Pasar Digital UMKM Indonesia
      </footer>
      </div>
    </div>
  );
};

export default Dashboard;
