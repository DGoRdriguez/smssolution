const aws_sqs = {}

aws_sqs.push_message = function () {
    // Load the AWS SDK for Node.js
    var AWS = require('aws-sdk');
    // Set the region 
    AWS.config.update({ region: 'REGION' });
    var creds = new AWS.Credentials('AKIA5GSUDN3Q4GPNXOFK', 'i4fqQPI5G/r7DLCYd+mSJM8Zh8YwUFUbLda25Je5')
    AWS.config.credentials = creds;

    // Create an SQS service object
    var sqs = new AWS.SQS({ apiVersion: '2012-11-05' });

    var params = {
        // Remove DelaySeconds parameter and value for FIFO queues
        //DelaySeconds: 10,
        MessageAttributes: {
            "Title": {
                DataType: "String",
                StringValue: "The Whistler"
            },
            "Author": {
                DataType: "String",
                StringValue: "John Grisham"
            },
        },
        MessageBody: "Raulito no vino a clase, que se fue a la playa",
        MessageDeduplicationId: "001",  // Required for FIFO queues
        MessageGroupId: "Group1",  // Required for FIFO queues
        QueueUrl: "https://sqs.us-east-2.amazonaws.com/907488227041/smssolution.fifo"
    };

    sqs.sendMessage(params, function (err, data) {
        if (err) {
            console.log("Error", err);
        } else {
            console.log("Success", data.MessageId);
        }
    });

}

module.exports = aws_sqs;