// import React from 'react'
// import img from "../assets/images/01-bg.jpg"
// import Cardhover from '../Cardhover';
// function Gallery() {
//   return (
//    <div>
//     <div className="cardimage">
//         <div className="imagechild">
//           <Cardhover img={img} />
//         </div>
//         <div className="imagechild">
//           <Cardhover img={img} />
//         </div>
//         <div className="imagechild">
//           <Cardhover img={img} />
//         </div>
//         <div className="imagechild">
//           <Cardhover img={img} />
//         </div>
//         <div className="imagechild">
//           <Cardhover img={img} />
//         </div>
//         <div className="imagechild">
//           <Cardhover img={img} />
//         </div>

//         <div className="imagechild">
//           <Cardhover img={img} />
//         </div>
//         <div className="imagechild">
//           <Cardhover img={img} />
//         </div>
//       </div>
//    </div>
//   )
// }

// export default Gallery









import React from 'react';
import img from "../assets/images/01-bg.jpg";
import Cardhover from '../Cardhover';

function Gallery() {
  return (
    <div>
      <div className="cardimage">
        <div className="imagechild">
          <div className="overlay">
          <h4>CateGory</h4>
          <p>Project Name</p>
          </div>
          <Cardhover img={img} />
        </div>
        <div className="imagechild">
          <div className="overlay">
          <h4>CateGory</h4>
          <p>Project Name</p>
          </div>
          <Cardhover img={img} />
        </div>
        <div className="imagechild">
          <div className="overlay">
          <h4>CateGory</h4>
          <p>Project Name</p>
          </div>
          <Cardhover img={img} />
        </div>
        <div className="imagechild">
          <div className="overlay">
          <h4>CateGory</h4>
          <p>Project Name</p>
          </div>
          <Cardhover img={img} />
        </div>
        <div className="imagechild">
          <div className="overlay">
          <h4>CateGory</h4>
          <p>Project Name</p>
          </div>
          <Cardhover img={img} />
        </div>
        <div className="imagechild">
          <div className="overlay">
            <h4>CateGory</h4>
    <p>Project Name</p>
          </div>
          <Cardhover img={img} />
        </div>
        <div className="imagechild">
          <div className="overlay">
          <h4>CateGory</h4>
          <p>Project Name</p>
          </div>
          <Cardhover img={img} />
        </div>
        <div className="imagechild">
          <div className="overlay">
          <h4>CateGory</h4>
          <p>Project Name</p>
          </div>
          <Cardhover img={img} />
        </div>
      </div>
    </div>
  );
}

export default Gallery;
