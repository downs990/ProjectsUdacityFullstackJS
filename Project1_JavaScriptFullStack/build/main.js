"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const index_1 = __importDefault(require("./routes/index"));
const app = (0, express_1.default)();
const port = 3000;
// Gets all of the routes from the api folder
app.use('/api', index_1.default);
app.listen(port, () => {
    console.log(`server started at localhost: ${port}`);
});
// INSTRUCTIONS ON HOW TO RUN: 
// - sit at root dir of project (not src)
// - compile the project. 'npm run build'
// - run the build files. 'node build/main' 
