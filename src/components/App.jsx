import React, { useState } from "react";
import { useGetLaunchesQuery } from "../redux/nasaApi";
import { useGetRocketsQuery } from "../redux/rocketApi";
import { Container, Pagination, Form, Card, ListGroup } from "react-bootstrap";


const App = () => {
  const [sorts, setSort] = useState(-1);
  const [currentPage, setCurrentPage] = useState(1)
  const {data, isLoading} = useGetLaunchesQuery({sorts, currentPage});
  const {data: rockets} = useGetRocketsQuery();
  let pages = []
  const changeSort = () => {setSort(sorts * (-1))}

  for (let i = 1; i <= (data?.totalPages); i++) {
    pages.push(i)
  }
  
  return (
    isLoading? 
      <h2>Is Loading</h2>
    :
    <Container>
      <Pagination size="sm"
        className="pages"
        style={{justifyContent: 'center', paddingTop: '50px'}}
        >
        {pages.map((page) => <Pagination.Item
          key={page}
          id={page}
          className={"page"}
          onClick={(evt) => setCurrentPage(evt.target.id)}>{page}
        </Pagination.Item>)}
      </Pagination>
      <Form.Label>Sorting by Data:
        <Form.Select onChange={changeSort} aria-label="Sorting by Data">
          <option value="nearest">Nearest</option>
          <option value="old">Old</option>
        </Form.Select>
      </Form.Label>
      <ListGroup>
        {data?.docs.map((launch) => {
          const rocketLaunch = rockets.find(el => el.id === launch.rocket)
            return (
              <ListGroup.Item key={launch.id}>
                <Card style={{ width: 'auto' }}>
                  <Card.Img variant="top" src={rocketLaunch.flickr_images[Math.floor(Math.random() * rocketLaunch.flickr_images.length)]} />
                  <Card.Body>
                    <Card.Title>Корабль {launch.name} запущен {new Date(launch.date_utc).toLocaleString()}</Card.Title>
                      <Card.Text>{launch.details}</Card.Text>
                  </Card.Body>
                </Card>
              </ListGroup.Item>
            )
          })}
      </ListGroup>
    </Container>
  )
}

export default App;