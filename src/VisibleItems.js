import React from 'react';
import Table from 'react-bootstrap/Table'
import Item from './Item'

class VisibleItems extends React.Component {

  render() {
    return (
      <>
        <Table>
          <thead>
            <tr>
              <th> ID</th>
              <th>Item</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {this.props.items.map((item) => (
              <Item key={item.id} {...item}
                onClick={() => this.props.onItemClick(item.id)}
                removeClick={() => this.props.removeClick(item.id)} />
            ))}
          </tbody>
        </Table>
      </>
    );
  }
}

export default VisibleItems;

//correct version
