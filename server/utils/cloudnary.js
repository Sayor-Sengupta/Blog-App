import { v2 as cloudinary } from 'cloudinary';
import { log } from 'console';
import fs from 'fs'

cloudinary.config({ 
    cloud_name: 'diewxoxx9', 
    api_key:'551834987497259',
    api_secret:'v30--rkK2slarVAIqpvd-CRJ46g'
    // Click 'View Credentials' below to copy your API secret
});
const uploadOnCLoudnary = async (localFilePath)=>{

    try{
        if(!localFilePath) return null
        // log("localFilePath",localFilePath)
        //upload files
        const response = await cloudinary.uploader.upload(localFilePath,{
            resource_type:"auto"
        })
        // log("response",response)
        //file has been uploaded successfully
        // console.log("file is uploaded on cloudinary",response.url);
        fs.unlinkSync(localFilePath)
        // console.log(response);
        return response;
       

    }
    catch(error){
        fs.unlinkSync(localFilePath)
        console.log("error.message",error.message); // remove the locally saved temp file as the upload operation got failed
        return null
        
    }
}

export {uploadOnCLoudnary} 