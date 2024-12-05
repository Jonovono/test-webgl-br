let container = document.querySelector("#container");
let canvas = document.querySelector("#game-canvas");
let loadingContainer = document.querySelector("#loading-container");
let progressBarFull = document.querySelector("#progress-bar-full");

let buildUrl = "Build";
let loaderUrl = buildUrl + "/f797eaa6baeb613223c07e5fe26e6561.loader.js";
let config = {
    dataUrl: buildUrl + "/df02e40de6bd0b3b6a3d73c67300d7e3.data.br",
    frameworkUrl: buildUrl + "/74ad168b6b4edda186240e156b5a98f7.framework.js.br",
    codeUrl: buildUrl + "/8b388f33d370e8f4154be202d0abef87.wasm.br",
    streamingAssetsUrl: "StreamingAssets"
};

let script = document.createElement("script");
script.src = loaderUrl;
script.onload = () => {
    createUnityInstance(canvas, config, (progress) => {
        progressBarFull.style.width = 100 * progress + "%";
    }).then((unityInstance) => {
        loadingContainer.style.display = "none";
        canvas.focus();
    }).catch((message) => {
        alert(message);
    });
};

document.body.appendChild(script)

function closeInstantGame(){
    window.parent.closeInstantGame();
}
