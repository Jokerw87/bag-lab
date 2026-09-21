'use strict';
(function(root){
 const engine=typeof module!=='undefined'&&module.exports?require('./engine.js'):root.BagLab;
 const fields=['format','version','config','sharedScale'],params=['red','blue','draws','trials','seed'];
 function exact(obj,keys){if(!obj||typeof obj!=='object'||Array.isArray(obj)||Object.keys(obj).length!==keys.length||keys.some(k=>!Object.prototype.hasOwnProperty.call(obj,k)))throw Error('配置字段不完整或包含未知字段。');}
 function validate(obj){exact(obj,fields);exact(obj.config,params);if(obj.format!=='bag-lab-recipe'||obj.version!==1||typeof obj.sharedScale!=='boolean')throw Error('不是受支持的小袋子配置。');return {format:'bag-lab-recipe',version:1,config:engine.validate(obj.config),sharedScale:obj.sharedScale};}
 function parse(text){if(typeof text!=='string'||new TextEncoder().encode(text).length>8192)throw Error('配置最多 8 KiB。');return validate(JSON.parse(text));}
 const api={validate,parse};if(typeof module!=='undefined'&&module.exports)module.exports=api;else root.BagRecipe=Object.freeze(api);
})(globalThis);
