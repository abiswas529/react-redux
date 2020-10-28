import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Row, Col, Table, Button } from 'react-bootstrap';
import Pagination from "react-bootstrap-4-pagination";
import './App.css';

import { deleteAction, changeAction } from './actions/simpleAction'

/* 
 * mapDispatchToProps
*/
const mapDispatchToProps = dispatch => ({
  deleteAction: (id) => dispatch(deleteAction(id)),
  changeAction: (pg) => dispatch(changeAction(pg)),
})

/* 
 * mapStateToProps
*/
const mapStateToProps = state => ({
  ...state
})

/**
 * @class App
 * @extends {Component}
 */
class App extends Component {
  /**
   * @memberof App
   * @summary handles button click 
   */
  constructor(props) {
    super(props);

    this.state = {
      currentPage: 1
    }
  }
  deleteAction = (id) => {
    this.props.deleteAction(id);
  }
  changeAction = (id) => {
    this.setState({ currentPage: id });
    this.props.changeAction(id);
  }
  componentDidMount() {
    // making all API calls and store in the redux-store
    this.props.changeAction(1);
  }

  render() {
    return (
      <div className="App">
        <body className="App-header">
          <Container>
            <Row>
              <Col xs={12}>
                <Table className="table-background" striped bordered hover>
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Thumbnail</th>
                      <th>Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {
                      this.props && this.props.simpleReducer && this.props.simpleReducer.result && this.props.simpleReducer.result.map(item => (
                        <tr>
                          <td>{item.id}</td>
                          <td>{item.title}</td>
                          <td className="text-middle"><img className="imgClass" src={item.url}></img></td>
                          <td className="text-middle"><Button onClick={(e) => this.deleteAction(item.id)}>Delete</Button></td>
                        </tr>
                      ))
                    }
                  </tbody>
                </Table></Col>
            </Row>
            <Row>
              <Col>
                <Pagination
                  totalPages={10}
                  currentPage={this.state.currentPage}
                  showMax={5}
                  prevNext
                  onClick={(p) => this.changeAction(p)}
                />
              </Col>
            </Row>
          </Container>
        </body>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);