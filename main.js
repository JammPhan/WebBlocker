const blockerImage = () => {
  return `<img class="bg" src="https://images.unsplash.com/photo-1547721064-da6cfb341d50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"/>`;
};

const imageStyling = () => {
  return `<meta name="viewport" content="width=device-width, initial-scale=1">
    <style>
    body, html {
        height: 100%;
        margin: 0;
    }
    
    .bg {
        
        height: 100%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    };
    </style>`;
};

switch (window.location.hostname) {
  case "www.youtube.com":
    document.head.innerHTML = imageStyling();
    document.body.innerHTML = blockerImage();
    break;
}
