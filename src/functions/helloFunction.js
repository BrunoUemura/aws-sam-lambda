/**
 * @param {Object} event - API Gateway Lambda Proxy Input Format
 * @param {Object} context
 * @returns {Object} object - API Gateway Lambda Proxy Output Format
 */
const handler = async (event, context) => {
  let response;

  const firstName = event.firstName;
  const lastName = event.lastName;
  const message = event.message;

  try {
    response = {
      statusCode: 200,
      body: JSON.stringify({
        message: `${message} ${firstName} ${lastName}`,
      }),
    };
  } catch (err) {
    console.log(err);
    return err;
  }

  return response;
};

module.exports = { handler };
