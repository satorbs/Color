var Color=function(){function a(a,b,c){return 0>c&&(c+=1),c>1&&(c-=1),1/6>c?a+6*(b-a)*c:.5>c?b:2/3>c?a+(b-a)*(2/3-c)*6:a}function b(a,b){return Math.min(b,Math.max(0,a))}var c={aqua:"#00ffff",black:"#000000",blue:"#0000ff",fuchsia:"#ff00ff",gray:"#808080",grey:"#808080",green:"#008000",lime:"#00ff00",maroon:"#800000",navy:"#000080",olive:"#808000",orange:"#ffa500",purple:"#800080",red:"#ff0000",silver:"#c0c0c0",teal:"#008080",white:"#ffffff",yellow:"#ffff00"},d=function(a,b,c,d){this.H=a,this.S=b,this.L=c,this.A=d};return d.parse=function(a){var b,e=0,f=0,g=0,h=1;if(a=(""+a).toLowerCase(),a=c[a]||a,b=a.match(/^#(\w{2})(\w{2})(\w{2})$/))e=parseInt(b[1],16),f=parseInt(b[2],16),g=parseInt(b[3],16);else{if(!(b=a.match(/rgba?\((\d+)\D+(\d+)\D+(\d+)(\D+([\d.]+))?\)/)))return;e=parseInt(b[1],10),f=parseInt(b[2],10),g=parseInt(b[3],10),h=b[4]?parseFloat(b[5]):1}e/=255,f/=255,g/=255;var i,j,k=Math.max(e,f,g),l=Math.min(e,f,g),m=(k+l)/2,n=k-l;if(n){switch(j=m>.5?n/(2-k-l):n/(k+l),k){case e:i=(f-g)/n+(g>f?6:0);break;case f:i=(g-e)/n+2;break;case g:i=(e-f)/n+4}i*=60}else i=j=0;return new d(i,j,m,h)},d.prototype={toRGBA:function(){var c=b(this.H,360),d=b(this.S,1),e=b(this.L,1),f={a:b(this.A,1)};if(0===d)f.r=e,f.g=e,f.b=e;else{var g=.5>e?e*(1+d):e+d-e*d,h=2*e-g;c/=360,f.r=a(h,g,c+1/3),f.g=a(h,g,c),f.b=a(h,g,c-1/3)}return f.r*=255,f.g*=255,f.b*=255,f},toString:function(){var a=this.toRGBA();return 1===a.a?"#"+((1<<24)+(a.r<<16)+(a.g<<8)+a.b).toString(16).slice(1,7):"rgba("+[Math.round(a.r),Math.round(a.g),Math.round(a.b),a.a.toFixed(2)].join(",")+")"},hue:function(a){return new d(this.H*a,this.S,this.L,this.A)},saturation:function(a){return new d(this.H,this.S*a,this.L,this.A)},lightness:function(a){return new d(this.H,this.S,this.L*a,this.A)},alpha:function(a){return new d(this.H,this.S,this.L,this.A*a)}},d}(this);