import React from "react";
import './tile.scss';

class Tile extends React.Component {
      render() {
        return (
            <div className="tile_container">
                <div className="title">{this.props.title}</div>
                <div className="content">
                    {this.props.children}
                </div>
            </div>
        );
      }
}

export default Tile;