    // sys/index.js - wie win32k.sys
    function sys_lauf(modus){
      if(modus === 'gpu') return import('./runtime/gpu/gpu.html');
      if(modus === 'team') return import('./runtime/team/visual/');
      if(modus === 'hoch') return quadranisieren(zahl,'hoch'); // 8xxx
      if(modus === 'runter') return quadranisieren(zahl,'runter'); // xxx8
    }
