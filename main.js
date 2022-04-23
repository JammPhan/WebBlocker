const blockerImage = () => {
  return `<img class="bg" src="https://static.wixstatic.com/media/63becb_c7acc95c34504e86a40c7f1767e4b091~mv2.gif"/>`
}

const imageStyling = () => {
  return `<meta name="viewport" content="width=device-width, initial-scale=1">
    <style>

    body, html {
        height: 100%;
        margin: 0;
    }

    .bg {
        width: 100%;
        height: 100%;
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
    };

    </style>`;
};

switch (window.location.hostname) {
  case "www.instagram.com":
    document.head.innerHTML = imageStyling();
    document.body.innerHTML = blockerImage();
    break;
  case "www.facebook.com":
    document.head.innerHTML = imageStyling();
    document.body.innerHTML = blockerImage();
    break;
  case "monkeytype.com":
    document.head.innerHTML = imageStyling();
    document.body.innerHTML = blockerImage();
    break;
  // case "www.bbc.com":
  //   document.head.innerHTML = imageStyling();
  //   document.body.innerHTML = blockerImage();
  //   break;
  case "www.ft.com":
    document.head.innerHTML = imageStyling();
    document.body.innerHTML = blockerImage();
    break;
  case "www.linkedin.com":
    document.head.innerHTML = imageStyling();
    document.body.innerHTML = blockerImage();
    break;
}
