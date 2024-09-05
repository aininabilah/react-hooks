import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { items } from '../constants/consthelp';
import Account from '../images/account.png';
import Finance from '../images/finance.png';
import Invoice from '../images/invoice.png';
import '../index.css';

function Help() {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen  p-8">
        <h1 className="text-gray-600 font-extrabold text-2xl mb-8 dark:text-white">
          Pilih Topik Sesuai Kendalamu
        </h1>
        <div className=" mx-auto py-8">
        <Container>
          <Row className="flex justify-center items-center font-semibold text-gray-700 ">
          {items.map((item, index) => (
            <Col md={4} className="text-grey-100">
            <Card className="text-start mb-4 dark:bg-black" style={{ height: '350px' }}>
            <Card.Body>
            <Card.Title className="flex items-center space-x-3 mb-4">
            <img src={index === 0 ? Account : index === 1 ? Invoice : Finance} alt="PaDi UMKM" />
            <span className="font-bold text-gray-600 text-sm dark:text-white">{item.title}</span>
            </Card.Title>
            <Card.Text className="text-md dark:text-white">
                      {item.subTitle1}
            </Card.Text >
            <Card.Text className="text-md dark:text-white">
                      {item.subTitle2}
            </Card.Text>
            <Card.Text className="text-md dark:text-white">
                      {item.subTitle3}
            </Card.Text>
            <Card.Text className="text-md dark:text-white mb-3">
                      {item.subTitle4}
            </Card.Text>
            <Button variant="outline-info" className="mt-3">
                      Lihat Semua Artikel
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
           <div className="Footer">
            <footer className="mt-17 mb-4 text-center text-gray-400">
              &copy;2022-2025 Pasar Digital UMKM Indonesia
            </footer>
          </div>
        </Container>
      </div>
    </div>
      
    );
  }


export default Help;
