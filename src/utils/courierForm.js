import { CourierClient } from "@trycourier/courier";


const courierTest = async (title, eBody, senderName, senderEmail) => {
    const courier = new CourierClient(
        { authorizationToken: "pk_prod_GPZXNZBJCVMG5WQM688B8SKBQEBB" }
    );

    const { requestId } = await courier.send({
        message: {
            content: {
                title,
                body: "{{eBody}}\n\nThank You for your time,\n{{senderName}}\n{{senderEmail}}",
            },
            data: {
                eBody,
                senderName,
                senderEmail,
            },
            to: {
                email: 'ianmstevenson1@gmail.com',
            },
            routing:{
                method: "single",
                channels: ["email"],
            }
        }
    });
}

export default courierTest;
