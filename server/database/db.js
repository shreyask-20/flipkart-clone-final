import mongoose from 'mongoose';

const Connection = async (username, password) => {
        const URL = `mongodb+srv://shreyasskhandagale:5v262HE3FcDUQlKb@cluster0.8fkql.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
    try {
        await mongoose.connect(URL, { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
        console.log('Database Connected Succesfully');
    } catch(error) {
        console.log('Error: ', error.message);
    }

};

export default Connection;