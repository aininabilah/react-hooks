import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import '../index.css';

function Contacts() {
    // State untuk menyimpan nama, saran, dan list saran
    const [nama, setNama] = useState("");
    const [saran, setSaran] = useState("");
    const [listSaran, setListSaran] = useState([]);
    
    // Fungsi untuk menghandle submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        if(nama && saran) {
            setListSaran([...listSaran, { nama, saran, likeCount: 0 }]);
            setNama("");
            setSaran("");
        }
    };

    // Fungsi untuk menambah like
    const handleLike = (index) => {
        const newListSaran = [...listSaran];
        newListSaran[index].likeCount += 1;
        setListSaran(newListSaran);
    };

    return (
      <div className="flex flex-col items-start justify-center min-h-screen p-8">
         <Container>
      <h1 className="text-left pl-4 ml-8 text-gray-600 font-extrabold text-3xl dark:text-white">
        Kritik dan Saran
      </h1>
      <p className="text-left pl-4 ml-8 text-gray-600 font-medium text-sm dark:text-white">
        Silahkan masukkan kritik dan saran anda
      </p>

      <Row className="flex justify-center items-center font-semibold text-gray-700 w-6/8 mx-auto px-8 mt-2">
         <Col>
           <Form onSubmit={handleSubmit}>
             <Form.Group controlId="formNama" className="my-3">
               <Form.Label className="dark:text-white">Nama</Form.Label>
               <Form.Control 
                type="text" 
                placeholder="Nama Anda" 
                value={nama} 
                onChange={(e) => setNama(e.target.value)} 
              />
            </Form.Group>

            <Form.Group controlId="formSaran">
              <Form.Label className="dark:text-white"> Saran Anda</Form.Label>
              <Form.Control 
                as="textarea" 
                rows={3} 
                placeholder="Masukkan Saran Anda" 
                value={saran} 
                onChange={(e) => setSaran(e.target.value)} 
              />
            </Form.Group>

            <Button type="submit" className="mt-3 mb-7 items-right bg-cyan-600 text-white hover:bg-sky-900" >
              Kirim Saran
            </Button>
          </Form>
        </Col>
      </Row>

      <Row className="flex justify-center items-center font-semibold text-gray-700 w-6/8 mx-auto px-8 mt-3">
        <Col>
          {/* <h3>Daftar Saran</h3> */}
          {listSaran.map((item, index) => (
            <Card key={index} className="mb-3">
              <Card.Body>
                <Card.Title className="text-lg font-bold">{item.nama}</Card.Title>
                <Card.Text className="text-sm font-normal">{item.saran}</Card.Text>
                <Button 
                  variant="outline-primary" 
                  onClick={() => handleLike(index)}
                  className="absolute bottom-0 right-0 mb-3 mr-3 bg-cyan-600 text-white hover:bg-sky-900"
                >
                  Like {item.likeCount}
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Col>
      </Row>

      <h1 className="text-left pl-4 ml-8 text-gray-600 font-extrabold text-3xl dark:text-white mt-5 my-2">
        Hubungi Kami
      </h1>
      <h6 className="text-left pl-4 ml-8 text-gray-600 font-medium dark:text-white my-2">
        Memiliki pertanyaan lebih lanjut seputar PaDi UMKM?
      </h6>
      <h6 className="text-left pl-4 ml-8 text-gray-600 font-medium my-2 dark:text-white">
        Silahkan menghubungi kami secara langsung
      </h6>
    
      <div className=" mx-auto py-8">
     
        <Row className="flex justify-center items-center font-semibold text-gray-700 w-[95%] mx-auto">
       
          <Col md={6} className="text-grey-100">
          <Card className="text-start mb-4 dark:bg-black">
          <Card.Body>
         
          <Card.Text className="font-extrabold text-2xl text-gray-700 flex items-center space-x-3 my-3 dark:text-white">
          Layanan Informasi Pengguna
          </Card.Text>
          <Card.Text className="font-extrabold text-3xl text-gray-700 flex items-center text-sm space-x-3 mb-0 dark:text-white">
          Email
          </Card.Text>
          <Card.Text className="font-medium text-md flex text-gray-700 items-center text-sm space-x-3 dark:text-white">
          cs@padiumkm.id
          </Card.Text>
          <Card.Text className="font-extrabold text-3xl text-gray-700 flex items-center text-sm space-x-3 mb-0 dark:text-white">
          Whatsapp
          </Card.Text>
          <Card.Text className="font-medium text-md text-gray-700 flex items-center text-sm space-x-3 dark:text-white">
          +6281290007820
          </Card.Text>
          <Card.Text className="font-extrabold text-3xl text-gray-700 flex items-center text-sm space-x-3 mb-0 dark:text-white">
          Senin - Jumat | 08:00 - 17:00 WIB
          </Card.Text>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} className="text-grey-100">
          <Card className="text-start mb-4 dark:bg-black ">
          <Card.Body>
          <Card.Text className="font-extrabold text-2xl text-gray-700 flex items-center space-x-3 my-1 dark:text-white">
          Kantor Kami
          </Card.Text>
          <Card.Text className="font-medium text-lg text-gray-700 flex items-center space-x-3 my-1 dark:text-white">
          PaDi UMKM Headquarters
          </Card.Text>
          <Card.Text className="font-medium text-md text-gray-700 flex items-center space-x-3 my-1 dark:text-white">
          Gedung Telkom Direktorat Business and Technology
          </Card.Text>
          <Card.Text className="font-meidum text-xs text-gray-700 flex items-center space-x-3 my-0 dark:text-white">
          Jln.Prof.Dr.Soepomo No.139, Jakarta Selatan, DKI Jakarta, 12810 Indonesia
          </Card.Text>
          <Card.Text className="font-medium text-xs flex items-center text-sm space-x-3 my-3 mb-8 dark:text-white">
          </Card.Text>
                </Card.Body>
              </Card>
            </Col>
         
        </Row>
         <div className="Footer">
          <footer className="mt-17 mb-4 text-center text-gray-400">
            &copy;2022-2025 Pasar Digital UMKM Indonesia
          </footer>
        </div>
      
    </div>
    </Container>'
  </div>
    
  );
}

export default Contacts;



