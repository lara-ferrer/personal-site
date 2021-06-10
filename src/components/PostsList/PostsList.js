import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Button } from "react-bootstrap";
import { Grid, Card, Image } from "semantic-ui-react"
import { Link } from "gatsby"
import { map } from "lodash"
import windowControls from "../../images/window_controls.png"
import "./PostsList.scss"

export default function PostsList(props) {
    const { allPosts, seoPosts, devPosts, perfPosts } = props

    const all = 
    <React.Fragment>
        <Grid className="posts-list">
            {map(allPosts, post => (
                <Grid.Column key={post.id} mobile={16} tablet={16} computer={5}>
                        <Card className="posts-list__item">
                            <div className="posts-list__item__header">
                                <div className="posts-list__item__header__container">
                                    <Container>
                                        <Row>
                                            <Col lg={4} md={4} xs={4} className="controls">
                                                <Image src={windowControls} />
                                            </Col>
                                            <Col lg={8} md={8} xs={8}>
                                                <Link to={`/${post.url}`}><h2>{post.Titulo}</h2></Link>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                        <Link to={`/${post.url}`}><Image src={post.img_destacada.publicURL} /></Link>
                        <Card.Content>
                            <Card.Description>
                                <p>{post.Extracto}</p>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Card.Meta>Categoría: {post.Categoria}</Card.Meta>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            ))}
        </Grid>
    </React.Fragment>

    const perf = 
    <React.Fragment>
        <Grid className="posts-list">
            {map(perfPosts, post => (
                <Grid.Column key={post.id} mobile={16} tablet={16} computer={5}>
                        <Card className="posts-list__item">
                            <div className="posts-list__item__header">
                                <div className="posts-list__item__header__container">
                                    <Container>
                                        <Row>
                                            <Col lg={4} className="controls">
                                                <Image src={windowControls} />
                                            </Col>
                                            <Col lg={8} className="controls">
                                                <Link to={`/${post.url}`}><h2>{post.Titulo}</h2></Link>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                        <Link to={`/${post.url}`}><Image src={post.img_destacada.publicURL} /></Link>
                        <Card.Content>
                            <Card.Description>
                                <p>{post.Extracto}</p>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Card.Meta>Categoría: {post.Categoria}</Card.Meta>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            ))}
        </Grid>
    </React.Fragment>

    const dev = 
    <React.Fragment>
        <Grid className="posts-list">
            {map(devPosts, post => (
                <Grid.Column key={post.id} mobile={16} tablet={16} computer={5}>
                        <Card className="posts-list__item">
                            <div className="posts-list__item__header">
                                <div className="posts-list__item__header__container">
                                    <Container>
                                        <Row>
                                            <Col lg={4} className="controls">
                                                <Image src={windowControls} />
                                            </Col>
                                            <Col lg={8} className="controls">
                                                <Link to={`/${post.url}`}><h2>{post.Titulo}</h2></Link>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                        <Link to={`/${post.url}`}><Image src={post.img_destacada.publicURL} /></Link>
                        <Card.Content>
                            <Card.Description>
                                <p>{post.Extracto}</p>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Card.Meta>Categoría: {post.Categoria}</Card.Meta>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            ))}
        </Grid>
    </React.Fragment>

    const seo = 
    <React.Fragment>
        <Grid className="posts-list">
            {map(seoPosts, post => (
                <Grid.Column key={post.id} mobile={16} tablet={16} computer={5}>
                        <Card className="posts-list__item">
                            <div className="posts-list__item__header">
                                <div className="posts-list__item__header__container">
                                    <Container>
                                        <Row>
                                            <Col lg={4} className="controls">
                                                <Image src={windowControls} />
                                            </Col>
                                            <Col lg={8} className="controls">
                                                <Link to={`/${post.url}`}><h2>{post.Titulo}</h2></Link>
                                            </Col>
                                        </Row>
                                    </Container>
                                </div>
                            </div>
                        <Link to={`/${post.url}`}><Image src={post.img_destacada.publicURL} /></Link>
                        <Card.Content>
                            <Card.Description>
                                <p>{post.Extracto}</p>
                            </Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                            <Card.Meta>Categoría: {post.Categoria}</Card.Meta>
                        </Card.Content>
                    </Card>
                </Grid.Column>
            ))}
        </Grid>
    </React.Fragment>


    const categories = [
        {
            contains: all,
            category: ["all"]
        },
        {
            contains: seo,
            category: ["seo"]
        },
        {
            contains: dev,
            category: ["dev"]
        },
        {
            contains: perf,
            category: ["perf"]
        }
      ];
    
    const [filter, setFilter] = useState("all");
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        setProjects(categories);
    }, []);
    useEffect(() => {
        setProjects([]);
        const filtered = categories.map(p => ({ ...p, filtered: p.category.includes(filter) }));
        setProjects(filtered);
    }, [filter]);

    return (
        <div>
            <Grid className="filtered-button">
                <div>
                    <Button className="blow-btn" href="#" active={filter === "all"} onClick={() => setFilter("all")}>Ver todo</Button>
                    <Button className="blow-btn" href="#" active={filter === "dev"} onClick={() => setFilter("dev")}>Desarrollo web</Button>
                    <Button className="blow-btn" href="#" active={filter === "seo"} onClick={() => setFilter("seo")}>Posicionamiento SEO</Button>
                    <Button className="blow-btn" href="#" active={filter === "perf"} onClick={() => setFilter("perf")}>Web performance</Button>
                </div>
            </Grid>

            {projects.map(item =>
                item.filtered === true ? <span key={item.contains}>{item.contains}</span> : ""
            )}
        </div>
    )
}
