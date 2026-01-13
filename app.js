const express = require('express');
const cors = require('cors');
const { swaggerUi, swaggerSpec } = require('./config/swagger');

const authRoutes = require('./routes/authRoutes');
const userRoutes = require('./routes/userRoutes');
// const adminRoutes = require('./routes/adminRoutes');
// const masterRoutes = require('./routes/masterRoutes');
const homeRoutes = require('./routes/homeRoutes')



const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Swagger documentation
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Routes
app.use('/', homeRoutes);
app.use('/auth', authRoutes);
app.use('/user', userRoutes);
// app.use('/admin', adminRoutes);
// app.use('/master', masterRoutes);



module.exports = app;
