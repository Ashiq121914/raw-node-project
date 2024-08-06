/*
 * title: Sample Handler
 * Description : sample handler
 * Author: Gazi Ashiq Reza
 * Date: 1/8/2024
 *
 *
 */

// module scaffolding
const handler = {};

handler.sampleHandler = (requestProperties, callback) => {
  console.log(requestProperties);
  callback(200, {
    message: "this is a sample url",
  });
};

module.exports = handler;
