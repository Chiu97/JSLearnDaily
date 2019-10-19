async function cb(data) {
  // do stuff here
  resolve(data);
}

const script = document.createElement('script');
script.src = '//example.com?callback=cb';
document.getElementsByTagName('head')[0].appendChild(script);