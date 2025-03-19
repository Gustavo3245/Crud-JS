const request = require('supertest');
const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');
const { ConnectMongo } = require('../../Mongo.js');


const TestApp = require('../../Server.js');
const ProductModel = require('../Models/product.model.js');

let mongoServer;

//Create A Memory MongoDB Server
beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const uri = mongoServer.getUri();

    await ConnectMongo(uri);
})

//Disconnect Memory MongoDB Server
afterAll(async () => {
    await mongoose.connection.dropDatabase();
    await mongoose.connection.close();
    await mongoServer.stop();
})

describe('Test for Get Products Routes', () => {

    describe('Get Individual Product, Get /product/:id ', () => { 
        
        it('Should return a product', async () => {
            
            const newProduct = new ProductModel({
                name: 'Test Product',
                quantity: 10,
                price: 100,
                
            });
            await ProductModel.create(newProduct);
            
            
            const InstanceProduct = await ProductModel.findOne({name: 'Test Product'});
            expect(InstanceProduct).toBeTruthy(); 

            const response = await request(TestApp).get(`/api/products/product/${InstanceProduct._id}`);
            return expect(response.statusCode).toBe(200);

            
              
        });
    });

    describe('Get All Products, Get /products',  () => {
        it('Should return products, Get /Products', async () => {
            const response = await request(TestApp).get('/api/products/products');
            return expect(response.statusCode).toBe(200);
            
        });
    });
    

})



