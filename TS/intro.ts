//Intro

type ContentImage = {
    type: "image";
    src: string;
};

type ContentText = {
    type: "text";
    text: string;
};

const contentElement = getContentElement();

if (contentElement.type === "image") {
    contentElement.src;
} else {
    contentElement.text;
}


function getContentElement(): ContentImage | ContentText {
    if (Math.random() >= 0.5) {
        const returnObj: ContentImage = { type: "image", src: "https://..." };
        return returnObj;
    } else {
        const returnObj: ContentText = { type: "text", text: "text" };
        return returnObj;
    }
}