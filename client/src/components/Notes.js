import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getNotes } from '../actions/notes';
import { Container, Grid, Header, Card, Image } from 'semantic-ui-react';

class Notes extends React.Component {
  state = { category: '' }

  componentDidMount() {
    this.props.dispatch(getNotes())
  }

  notes = () => {
    return this.props.notes.map( note =>
      <Grid.Column computer={4}>
        <Card>
          <Card.Content>
            <Card.Header>
              {note.name}
            </Card.Header>
            <Card.Description>
              {note.description}
            </Card.Description>
          </Card.Content>
          <Card.Content extra>
            <Link to={`/notes/${note.id}`}>
              View Note
            </Link>
          </Card.Content>
        </Card>
      </Grid.Column>
    )
  }

  render() {
    return (
      <Container>
        <Header as="h3" textAlign="center">Notes</Header>
          <Grid columns={16}>
            <Grid.Row>
              { this.notes() }
            </Grid.Row>
          </Grid>
        </Container>
    )
  }

}

const mapStateToProps = (state) => {
  return { notes: state.notes }
}

export default connect(mapStateToProps)(Notes);
