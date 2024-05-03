"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const sharp = require('sharp');
const process_image = express_1.default.Router();
// Resize route/endpoint 
process_image.get('/', (req, res) => {
    res.send('students route!');
    // TODO: Add args to the route for name of file to resize
    // TODO: Pass that name to the async function below 
    // resizeAnImage();
});
exports.default = process_image;
// TODO: Why does this have to be async? 
function resizeAnImage() {
    return __awaiter(this, void 0, void 0, function* () {
        const resizedImage = yield sharp({
            create: {
                width: 48,
                height: 48
            }
        })
            .png() // Convert the image to PNG format
            .toBuffer(); // Convert the image to a buffer
        return resizedImage; // Return the buffer
    });
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
