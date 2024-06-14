import OpenAI from 'openai';
import dotenv from 'dotenv';

dotenv.config();

const openai = new OpenAI({
  apiKey: process.env['OPENAI_API_KEY'],
});

const generateImage = async (req, res) => {
  try {
    const response = await openai.images.generate({
      //   model: 'dall-e-3',
      prompt: 'polar bear drinking beer with friends',
      n: 1,
      size: '256x256',
    });

    const imageUrl = response.data[0].url;

    res.status(200).json({
      success: true,
      data: imageUrl,
    });
  } catch (error) {
    if (error instanceof OpenAI.APIError) {
      console.error(error.status); // e.g. 401
      console.error(error.message); // e.g. The authentication token you passed was invalid...
      console.error(error.code); // e.g. 'invalid_api_key'
      console.error(error.type); // e.g. 'invalid_request_error'
    } else {
      // Non-API error
      console.log(error);
    }

    res.status(400).json({
      success: false,
      error: 'The image could not be generated',
    });
  }
};

export default generateImage;
