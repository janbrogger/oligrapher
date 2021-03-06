import PropTypes from 'prop-types';
import React, { Component } from 'react';
import AddNodeInput from './AddNodeInput';

export default class EditButtons extends Component {

  render() {
    return (
      <div id="editButtons" className="form-inline buttonGroup">
        <AddNodeInput 
          ref="addNodeInput"
          addNode={this.props.addNode}
          addEdge={this.props.addEdge}
          closeAddForm={this.props.closeAddForm} 
          source={this.props.source} 
          nodes={this.props.nodes}
          results={this.props.nodeResults}
          setNodeResults={this.props.setNodeResults} />
        <button className="btn btn-sm btn-default" title="add adge between nodes" onClick={this.props.toggleAddEdgeForm}>add edge</button>
        { this.props.showInterlocksButton &&
          <button id="addInterlocksButton" className="btn btn-sm btn-default" title="search for entities related to both of selected" onClick={this.props.fetchInterlocks}>add interlocks</button>
        }
      </div>
    );
  }
}
