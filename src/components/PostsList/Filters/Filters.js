import React from 'react'
import { Grid, Card, Image } from "semantic-ui-react"
import { Link } from "gatsby"
import { map } from "lodash"
import windowControls from "../../../images/window_controls.png"
import "../PostsList.scss"

export default function Filters(props) {
    const { allPosts, seoPosts, devPosts } = props
    console.log(props)

    return (
        <div>
            <Grid className="posts-list">
            {map(allPosts, post => (
                <Grid.Column key={post.id} mobile={16} tablet={16} computer={5}>
                    <Card className="posts-list__item">
                        <div className="posts-list__item__header">
                            <div className="posts-list__item__header__container">
                                <Image src={windowControls} />
                                <Link to={`/${post.url}`}><h2>{post.Titulo}</h2></Link>
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
        </div>
    )
}
