/*
 * title: Routes
 * Description : application routes
 * Author: Gazi Ashiq Reza
 * Date: 1/8/2024
 *
 *
 */
// dependencies
const { sampleHandler } = require("./handlers/routeHandlers/sampleHandlers");

const routes = {
  sample: sampleHandler,
};

module.exports = routes;
