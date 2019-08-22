import config from './../config/config';
import axios from 'axios';

const newsData = {

    // add news to Cosmic JS database
    addnews(title, description, newsbody, date, backgroundimage)
    {
        return axios.post(config.url+config.bucket_slug+"/add-object/", {
            title: title, slug: title, content: newsbody, type_slug: 'news', write_key: config.write_key,

            metafields: [
                {
                  key: "description",
                  type: "text",
                  value: description
                },
                {
                    key: "date",
                    type: "text",
                    value: date
                  },
                  {
                    key: "backgroundimage",
                    type: "media",
                    value: backgroundimage
                  }
            ]
        
        })
    },

    // fetch all news from Cosmic JS database
    getNews()
    {
        return axios.get(config.url+config.bucket_slug+"/object-type/news",{
            params: {
                read_key: config.read_key
            }
        })
    },


}

export default newsData;