function getRandomNumInRange(min, max) {
  let result;
  do {
    result = Math.random() * (max - min) + min;
  } while (result.toFixed() === result);
  return result;
}

function getRandomNum() {
  let result;
  do {
    result = Math.random() * Number.MAX_SAFE_INTEGER;
  } while (result.toFixed() === result);
  return result;
}
  
const sleep = (ms) => {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

async function main() {
  while (true) {
    for (let i = 0; i < getRandomNumInRange(0, 100000); i++) {
      setTimeout(() => {
        try {
          document.querySelector('html.music-mainstage-button-height.no-focus-outline body ytmusic-app ytmusic-popup-container.style-scope.ytmusic-app tp-yt-paper-dialog.style-scope.ytmusic-popup-container ytmusic-you-there-renderer.style-scope.ytmusic-popup-container div.actions.style-scope.ytmusic-you-there-renderer yt-button-renderer.style-scope.ytmusic-you-there-renderer yt-button-shape button.ytSpecButtonShapeNextHost.ytSpecButtonShapeNextText.ytSpecButtonShapeNextCallToAction.ytSpecButtonShapeNextSizeM.ytSpecButtonShapeNextEnableBackdropFilterExperiment.ytSpecButtonShapeNextMainstageIconSize.ytSpecButtonShapeNextMainstagePadding').click(); 
        } catch(exception) {}
      }, getRandomNum());
    }
    await sleep(getRandomNumInRange(0, 10000));
  }
}
main();



