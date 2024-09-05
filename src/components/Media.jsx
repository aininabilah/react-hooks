import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import axios from 'axios';
import '../index.css';

function Media() {
  const [media, setMedia] = useState([]);
  const [visible, setVisible] = useState(6);
  const [hasMore, setHasMore] = useState(true);

  useEffect(() => {
    fetchMedia();
  }, []);

  const fetchMedia = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
      const newData = response.data.slice(0, visible);
      setMedia(newData);
      if (response.data.length <= visible) {
        setHasMore(false);
      }
    } catch (error) {
      console.error("Error fetching media:", error);
    }
  };

  const loadMore = () => {
    setVisible(prevVisible => {
      const newVisible = prevVisible + 6;
      fetchMedia(newVisible);
      return newVisible;
    });
  };

  return (
    <div className="flex flex-col items-start justify-center min-h-screen p-8">
      <h1 className="text-left pl-4 ml-8 text-gray-600 font-extrabold text-3xl dark:text-white">
        Media
      </h1>
      <h6 className="text-left pl-4 ml-8 text-gray-600 font-medium mb-8 dark:text-white">
        Informasi Seputar PaDi UMKM
      </h6>
      <div className="mx-auto py-8">
        <Container>
          <Row className="flex justify-center items-center font-semibold text-gray-700">
            {media.map((item, index) => (
              <Col md={4} className="text-grey-100" key={item.id}>
                <Card className="d-flex flex-column text-start mb-4 dark:bg-black" style={{ height: '600px' }}>
                  <Card.Body className="d-flex flex-column">
                    <img 
                      src={`https://picsum.photos/700?office=${item.id}`} 
                      alt={`Media ${item.id}`} 
                      className="mb-3" 
                    />
                    <Card.Title className="font-extrabold text-grey-900 text-xl space-x-2 dark:text-white">
                      {item.title}
                    </Card.Title>
                    <Card.Text className="font-medium text-sm items-center space-x-2 dark:text-white ">
                      {item.body}
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
          <div className="text-center">
            {hasMore && (
              <Button variant="primary mb-3" onClick={loadMore}>
                Load More
              </Button>
            )}
          </div>
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

export default Media;
