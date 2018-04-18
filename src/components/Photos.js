import React from 'react';

const Photos = ()  => {
		return (	
      <div id="content">
      <h1>Photos of the band</h1>
      <ul id="imagegallery">
        <li>
          <a href="images/photos/concert.jpg" title="The crowd goes wild">
            <img src="images/photos/thumbnail_concert.jpg" alt="the band in concert" />
          </a>
        </li>
        <li>
          <a href="images/photos/bassist.jpg" title="An atmospheric moment">
            <img src="images/photos/thumbnail_bassist.jpg" alt="the bassist" />
          </a>
        </li>
        <li>
          <a href="images/photos/guitarist.jpg" title="Rocking out">
            <img src="images/photos/thumbnail_guitarist.jpg" alt="the guitarist" />
          </a>
        </li>
        <li>
          <a href="images/photos/crowd.jpg" title="Encore! Encore!">
            <img src="images/photos/thumbnail_crowd.jpg" alt="the audience" />
          </a>
        </li>
      </ul>
    </div>
		)
}
export default Photos;