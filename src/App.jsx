import React, {Component} from 'react';
import {PageHeader, Grid, Row} from 'react-bootstrap';
import ThumbProject from './ThumbProject.jsx';
import ModalProject from './ModalProject.jsx';

export default class App extends Component {
  constructor(...args) {
    super(...args);

    this.showModal = this.showModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

    this.state = {
      visibleModal: false,
      subscribeUrl: null
    };
  }

  render() {
    return (
      <Grid>
        <PageHeader>Notify Amicus</PageHeader>
        <Row>
          {this.props.data.map((list, index) => (
            <ThumbProject key={index} {...list} onClick={this.showModal}/>
          ))}
        </Row>
        <ModalProject closeModal={this.closeModal} visibleModal={this.state.visibleModal} subscribeUrl={this.state.subscribeUrl}/>
      </Grid>
    );
  }

  showModal(subscribeUrl) {
    this.setState({
      visibleModal: true,
      subscribeUrl: subscribeUrl
    });
  }

  closeModal() {
    this.setState({visibleModal: false});
  }
}
