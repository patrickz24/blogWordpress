import React, { Fragment } from 'react';

import {
  Link
} from "react-router-dom";

export default function Nav() {
  return (
    <Fragment>

      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/posts/:id">Post</Link>
          </li>
        </ul>
      </nav>
    </Fragment>

  )
}
