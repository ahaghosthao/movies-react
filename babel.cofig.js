module.exports = (api)=>{
    api.cache(true);
    const plugins = [
        require("@babel/plugin-transform-runtime"),
        [require("@babel/plugin-proposal-decorators"),{legacy:true}],
        [require("@babel/plugin-proposal-class-properties"),{loose:true}],
        require("@babel/plugin-proposal-export-default-from"),
    ];
    const presets=[
        [require("@babel/preset-env"),{
            modules:false,
            useBuiltIns:'usage',
            corejs:{
                version:3,
                proposals:true
            }
        }],
        [require("@babel/preset-react")]
    ];
    return {
        plugins,
        presets
    }
}