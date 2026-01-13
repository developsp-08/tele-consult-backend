const swaggerUi = require('swagger-ui-express');
const swaggerJsDoc = require('swagger-jsdoc');

const swaggerSpec = swaggerJsDoc({
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Tele Consult API Documentation',
            version: '1.0.0',
        },
    },
    apis: ['./routes/*.js'],
});

module.exports = { swaggerUi, swaggerSpec };
