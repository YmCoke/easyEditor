import EasyEditor from "./index";

export interface ITextConfig {
    width?: string
    height?: string
    padding?: string
    border?: string
    lineHeight?: string
}

export interface IText {
    width: (x: number) => void
    height: (x: number) => void
    clear: () => void
}

export function initText(editor: EasyEditor, config: ITextConfig): [HTMLElement, IText] {
    return [initDom(editor, config), initApi(editor, config)];
}

function initDom(editor: EasyEditor, config: ITextConfig): HTMLElement {
    const textDom = document.createElement("div");

    textDom.style.width = config.width || "100%";
    textDom.style.height = config.height || "500px";
    textDom.style.padding = config.padding || "6px 10px";
    textDom.style.border = config.border || "1px solid #666";
    textDom.style.lineHeight = config.lineHeight || "1";

    textDom.contentEditable = "true";
    textDom.style.boxSizing = "border-box";
    textDom.style.outline = "none";

    initEvent(textDom, editor);
    return textDom;
}

function initEvent(dom: HTMLElement,editor: EasyEditor) {
    // 绑定鼠标抬起缓存range事件
    dom.addEventListener("mouseup", function(e) {
        editor.cacheRange = window.getSelection().getRangeAt(0);
    })
}

function initApi(editor: EasyEditor, config: ITextConfig): IText {
    const text: IText = {
        width() {},
        height() {},
        clear() {}
    };

    return text;
}