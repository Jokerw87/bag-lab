'use strict';
(function(){
 const bar=document.createElement('div'),save=document.createElement('button'),open=document.createElement('button'),file=document.createElement('input'),note=document.createElement('p');
 save.type=open.type='button';save.id='saveRecipe';open.id='openRecipe';file.id='recipeFile';file.type='file';file.accept='.json,application/json';file.hidden=true;save.textContent='保存参数 JSON';open.textContent='载入参数 JSON';note.className='hint';note.textContent='仅保存参数与图表刻度，不保存结果。载入会清除旧结果，请重新运行；无自动备份。';bar.append(save,open,note);$('settings').append(bar);document.body.append(file);
 let busy=false,epoch=0;
 $('settings').addEventListener('input',()=>epoch++);$('settings').addEventListener('submit',()=>epoch++);$('reset').addEventListener('click',()=>epoch++);sharedScale.addEventListener('change',()=>epoch++);
 function lock(on){busy=on;save.disabled=open.disabled=on;}
 save.onclick=()=>{if(busy)return;try{const data=BagRecipe.validate({format:'bag-lab-recipe',version:1,config:config(),sharedScale:sharedScale.checked});download(new Blob([JSON.stringify(data,null,2)],{type:'application/json'}),'bag-lab-recipe.json');$('status').textContent='已请求保存当前参数；请检查下载文件。不会保存结果或自动备份。';}catch(e){$('status').textContent='无法保存：'+e.message;}};
 open.onclick=()=>{if(!busy)file.click();};
 file.onchange=async()=>{const selected=file.files[0];file.value='';if(!selected||busy)return;const start=epoch;lock(true);try{if(!/\.json$/i.test(selected.name)||selected.size>8192)throw Error('请选择不超过 8 KiB 的 JSON 文件。');const data=BagRecipe.parse(await selected.text());if(epoch!==start)throw Error('读取期间操作已变化，未载入旧配置。');if(!confirm('替换当前参数并清除结果？请先保存需要保留的参数。')){$('status').textContent='已取消载入，当前内容未改变。';return;}for(const k of keys)$(k).value=data.config[k];sharedScale.checked=data.sharedScale;epoch++;clear();$('status').textContent='参数已载入，请运行实验；文件不含结果。';}catch(e){$('status').textContent='未载入：'+e.message;}finally{lock(false);}};
})();
