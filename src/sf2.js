const AWS = require("aws-sdk");

var creds = new AWS.Credentials({
  accessKeyId: "ASIAS5JE6BRNZH5HJ5MH",
  secretAccessKey: "60vPnAVsTMzjhF9E+HzNI5uxGxX+NJldELwLTpT7",
  sessionToken:
    "IQoJb3JpZ2luX2VjEPH//////////wEaCXVzLXdlc3QtMiJIMEYCIQDLV+rqHb4iByyToOL8TBDiGMbEP9JyHrXIzKCpTfbTmwIhAIausBdsT5BjKJRaYLup81F8+nDDWUBiqQPbQghhCkiDKpsDCFoQAhoMMjAwMzMwMzE2ODkxIgycQBCqtj2dSMqsd+wq+AJog/xgPuX3vpHyS+AI0BLVFXcfMeTCeJ/NIV0Q5cqMShzCszeneLX81mGuon/Twf9Ei0o6zT1A+9QZVxAttY3UYamaE4Px7QxzVJmEIe77nbQ4YB8Y19wUu2TurbhTwnsT0o/0eCTUqXHdX+MYuIvIZwb8nWowydbRWTSwhO2qjnWxfSPtFwu4sE9UfcdWlgxJHFJQ4HQh8fOoWp9ZUEKJHTg+fO2LEmhtV9Up/hpHn3M5NRZG0sGnukhva8BCKwLxC92VSPQUV5R77YSX0umzQdmzTzjbz/akudBqVBd3jrtIZS+vxPZZ0kgS+uOQNiEZHIDVrrAqh90NhFcBCbGOvKoPTV70sOA+U/A0woR9KCKvSXK2Y3tseFQjXpl4UFSF5kRNzOtA5SJE9+AM7u7BqcchlAJtCS9z7dJaNuy4A5aLKGt2Px+cCwi4PNGd78dGrg5ANmnGQAEb26u1Sp8uZ/M8F5FRauXysCiIvorXBqcBEXaFN0hHMOOP05cGOqUBusnG5eww+mI7B/5C418kK/ufCIrzw5cFpCuFY5raUs7ppioG/R5h52zFAQHQbRzPNp8OVgqW5JsHdGrsdHo8oNBphAE9ntX3H/JxOqVoM3bjUldkqQNwYQyZxPoYaA5JmJshnTz7TtB3IvYHdyAwUeR2Cgw0oA9pqx/TYB4uFMAxFV7WI8x31gywG6NVBsHG27bZnS5PA7pDCykKoEYaau1gMnl6"
});

AWS.config.update({ region: "eu-west-1", credentials: creds });

// Insert request name to the arrived list and store the request detailes

const insertNewRequest = async (key) => {
  var params = {
    Message: "The SMax message was arived." /* required */,

    TopicArn: "arn:aws:sns:eu-west-1:200330316891:SMaxTest1"

    //MessageGroupId: 'test1'
  };

  // Create promise and SNS service object

  console.info("Before insert to SNS ");

  try {
    let publishTextPromise = await new AWS.SNS({ region: "eu-west-1" })
      .publish(params)
      .promise();

    console.info(
      "sendMessage to SNS result:" + JSON.stringify(publishTextPromise)
    );
  } catch (error) {
    console.error("error sendMessage to SNS:" + JSON.stringify(error));
  }
};

module.exports = {
  insertNewRequest
};
