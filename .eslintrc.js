const path = require('path');
module.exports = {
    root:true,
    parser:"@babel/eslint-parser",
    extends:[
        'airbnb',
        'airbnb/hooks',
    ],
    plugins:['react','jsk-a11y','import','react-hooks'],
    parserOptions:{
        ecmaVersion:2019,
        sourceType:'module',
        "ecmaFeatures":{
            "jsx":true
        }
    },
    settings:{
        'import/resolver':{
            webpack:{
                config:{
                    resolve:{
                        alias:{
                            '@':path.resolve(__dirname,'./src')
                        },
                        extensions:['.js','.jsx','.ts','.tsx','.json']
                    },
                }
            }
        }
    },
    env:{
        browser:true,
    },
    globals:{
        window:true,
        ENV:true,
    },
    rules:{
        "react/prop-types":0,
    }
}