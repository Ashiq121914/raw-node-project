/*
 * title: not found Handler
 * Description : 404 not found handler
 * Author: Gazi Ashiq Reza
 * Date: 1/8/2024
 *
 *
 */

// module scaffolding
const handler = {};

handler.notFoundHandler = (requestProperties, callback) => {
  console.log("not found");
  callback(404, {
    message: "your requested url was not found!",
  });
};

module.exports = handler;
