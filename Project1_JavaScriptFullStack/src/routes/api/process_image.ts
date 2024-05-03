import express from 'express';
const sharp = require('sharp');
const process_image = express.Router();



// Resize route/endpoint 
// localhost:3000/api/process_image
process_image.get('/', (req, res) => {
    res.send('processing the image!!!');

    // TODO: Add args to the route for name of file to resize
    // TODO: Pass that name to the async function below 
    // resizeAnImage();

});


export default process_image;


// TODO: Why does this have to be async? 
async function resizeAnImage(): Promise<Buffer> {
     
    const resizedImage: Buffer = await sharp({
        create: {
            width: 48,
            height: 48 
        }
    })
        .png() // Convert the image to PNG format
        .toBuffer(); // Convert the image to a buffer

    return resizedImage; // Return the buffer
}




 

// Callback 

// sharp(inputBuffer)
//   .resize(320, 240)
//   .toFile('output.webp', (err, info) => { ... });


// Promise 

// sharp('input.jpg')
//   .rotate()
//   .resize(200)
//   .jpeg({ mozjpeg: true })
//   .toBuffer()
//   .then( data => { ... })
//   .catch( err => { ... });

 

// Stream 

// const roundedCorners = Buffer.from(
//     '<svg><rect x="0" y="0" width="200" height="200" rx="50" ry="50"/></svg>'
//   );
  
//   const roundedCornerResizer =
//     sharp()
//       .resize(200, 200)
//       .composite([{
//         input: roundedCorners,
//         blend: 'dest-in'
//       }])
//       .png();
  
//   readableStream
//     .pipe(roundedCornerResizer)
//     .pipe(writableStream);