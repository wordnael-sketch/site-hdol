(function(){
 var N=["AFEB BRASAL","AFFEGO","ANAFE SAÚDE","BACEN","CAEME - GO","CAESAN","CAMED","CARE PLUS","CASEC (CODEVASF)","CASEMBRAPA (EMBRAPA)","CBMDF","CLIQUE MÉDICOS","CNTI","CONAB","EMBRATEL (TELOS)","FAPES (BNDES)","FASCAL","GDF-SAÚDE(INAS)","GEAP","GRAVIA","LIFE EMPRESARIAL","LUMINAR SAÚDE (EVIDA)","NOTRE DAME","OMINT SAÚDE","PF SAÚDE (POLÍCIA FEDERAL)","PLAN ASSISTE (MPU)","PLAS/JMU (STM)","PMDF - CONSULTAS MÉDICAS","PMDF - SAÚDE MENTAL E TERAPIAS","PRÓ-SAÚDE (CÂMARA DOS DEPUTADOS)","PRÓ-SAÚDE (TJDFT)","PRÓ-SER (STJ)","PRÓ-SOCIAL (TRF)","PROASA","REAL GRANDEZA (DEMAIS PLANOS)","REAL GRANDEZA (SALVUS E SALUTEM)","SAÚDE CAIXA","SAÚDE PETROBRAS","SERPRO","SIS SENADO","STF-MED (STF)","TRE SAÚDE","TRT SAÚDE","TST SAÚDE","UNAFISCO SAÚDE (DEMAIS PLANOS)","UNAFISCO SAÚDE (PREMIUM)"];
 function norm(s){return s.toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g,'').trim();}
 var q=document.getElementById('cv-q'),res=document.getElementById('cv-res'),lista=document.getElementById('cv-list'),mq=document.getElementById('cv-marquee');
 if(!q||!lista||!mq)return;
 var set=function(hid){var d=document.createElement('div');d.className='marquee-set';if(hid)d.setAttribute('aria-hidden','true');N.forEach(function(n){var s=document.createElement('span');s.className='cv-chip';s.textContent=n;d.appendChild(s);});return d;};
 var tr=document.createElement('div');tr.className='marquee-track';tr.appendChild(set(false));tr.appendChild(set(true));mq.appendChild(tr);
 var items=N.map(function(n){var li=document.createElement('li'),b=document.createElement('b'),s=document.createElement('span');b.textContent=n;s.textContent='Atendido no HDOL. Confirme os detalhes no WhatsApp.';li.dataset.k=norm(n);li.hidden=true;li.appendChild(b);li.appendChild(s);lista.appendChild(li);return li;});
 q.addEventListener('input',function(){
  var v=norm(q.value),hits=0;
  items.forEach(function(li){var h=v.length>1&&li.dataset.k.indexOf(v)>-1;li.hidden=!h;li.classList.toggle('hit',h);if(h)hits++;});
  if(v.length<2){res.textContent='';return;}
  res.innerHTML=hits?'Encontrado. Confira o convênio destacado ao lado.':'Não encontramos “'+q.value.replace(/[<>&]/g,'')+'” na lista. Pergunte no <a href="https://wa.me/5561999656111" target="_blank" rel="noopener">WhatsApp (61) 99965-6111</a> antes de marcar.';
 });
 var sel=document.getElementById('ag-conv');
 if(sel){var o=sel.querySelector('option[value=""]');sel.innerHTML='';sel.appendChild(o||new Option('Escolha',''));N.forEach(function(n){sel.appendChild(new Option(n,n));});sel.appendChild(new Option('Outro (informo na conversa)','Outro (informo na conversa)'));}
})();
